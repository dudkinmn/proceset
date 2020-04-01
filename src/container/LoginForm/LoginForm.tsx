import React, { ReactElement } from "react";
import { reduxForm, SubmissionError } from "redux-form";
import { useMutation } from "@apollo/react-hooks";
import { withMutation, MutateProps } from "@apollo/react-hoc";
import { useDispatch } from "react-redux";

import {
  ILoginProps,
  ILoginState,
  TLoginOwnProps,
  TLoginFormData,
  ILogin,
  ILoginVariables,
  TSigninData,
  TSigninResponceData
} from "./LoginForm.types";
import { actionSetUser } from "../../store/index.reducer";
import {
  formLoginValidator,
  onlyEmail,
  passLength
} from "../../utils/validators";
import signinMutation from "../../queries/signinMutation";
import history from "../../utils/history";
import { defaultPage } from "../../App"
import InputField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";
import MyLink from "../../components/MyLink/MyLink";
import ErrorServer from "../../components/ErrorServer/ErrorServer";
import styles from "./LoginForm.module.css";

const passwordValidator = passLength(8);
const emailValidator = onlyEmail();

const LoginForm = ({ ...props }: ILoginProps): ReactElement<ILoginState> => {
  const [signin] = useMutation<{}, TSigninData>(signinMutation);
  const dispatch = useDispatch();

  const handleSubmit = (fields: any) => {
    return new Promise((resolve, reject) => {
      signin({
        variables: {
          email: fields.emailField,
          password: fields.passwordField
        }
      })
        .then((res: TSigninResponceData) => {
          localStorage.setItem(
            "token",
            res.data?.login?.token ? res.data.login.token : ""
          );
          dispatch(actionSetUser(res.data?.login?.user));
          history.push(defaultPage);
          resolve(res);
        })
        .catch(e => {
          reject(new SubmissionError({ _error: e?.message }));
        });
    });
  };

  return (
    <form
      onSubmit={props.handleSubmit(handleSubmit)}
      className={styles.formLayout}
    >
      <div className={styles.formContent}>
        <InputField
          name="emailField"
          type="email"
          placeholder="Электронная почта"
          validate={[emailValidator]}
        />
        <InputField
          name="passwordField"
          type="password"
          placeholder="Пароль"
          validate={[passwordValidator]}
        />
        <Button isLogin={true} buttonText="Войти в систему" />
        <MyLink to="/register" linkText="Зарегистрироваться" />
      </div>
      {props.error ? <ErrorServer errorText={props.error} /> : null}
    </form>
  );
};

const connectedToReduxForm = reduxForm<
  TLoginFormData,
  TLoginOwnProps & MutateProps<ILogin, ILoginVariables>
>({
  form: "loginForm",
  validate: formLoginValidator
});

export default withMutation<
  TLoginOwnProps,
  ILogin,
  ILoginVariables,
  TLoginOwnProps & MutateProps<ILogin, ILoginVariables>
>(signinMutation)(connectedToReduxForm(LoginForm));
