import React, { ReactElement } from "react";
import { useMutation } from "@apollo/react-hooks";
import { withMutation, MutateProps } from "@apollo/react-hoc";
import { reduxForm, SubmissionError } from "redux-form";
import { useDispatch } from 'react-redux';

import {
  IRegisterProps,
  IRegisterState,
  TRegisterOwnProps,
  TRegisterFormData,
  IRegister,
  IRegisterVariables,
  TSignupData,
  TSignupResponceData
} from "./RegisterForm.types";
import { actionAuthorize } from '../../store/index.reducer'
import { formValidator, onlyEmail, passLength } from "../../utils/validators";
import signupMutation from "../../queries/signupMutation";
import history from '../../utils/history'
import InputField from '../../components/TextField/TextField';
import Button from '../../components/Button/Button';
import MyLink from '../../components/MyLink/MyLink'
import ErrorLogin from '../../components/ErrorLogin/ErrorLogin';
import styles from "./RegisterForm.module.css";

const passwordValidator = passLength(8);
const emailValidator = onlyEmail();

const RegisterForm = ({ ...props }: IRegisterProps): ReactElement<IRegisterState> => {
  
  const [signup] = useMutation<{}, TSignupData>(signupMutation);
  const dispatch = useDispatch();

  const handleSubmit = (fields: any) => {
    return new Promise((resolve, reject) => {
      signup({
        variables: {
          firstName: fields.firstNameField,
          secondName: fields.secondNameField,
          email: fields.emailField,
          password: fields.passwordField
        }
      })
        .then((res: TSignupResponceData) => {
          console.log(res);
          localStorage.setItem('token', res.data?.signup ? res.data.signup : "");
          dispatch(actionAuthorize(true))
          history.push('/main');
          resolve(res);
        })
        .catch(e => {
          reject(new SubmissionError({ _error: e?.message }));
        });
    });
  }

  return (
      <form onSubmit={props.handleSubmit(handleSubmit)} className={styles.formLayout}>
        <div className={styles.formContent}>
              <p className={styles.headReg}>Регистрация</p>
              <InputField name='firstNameField' type="text" placeholder="Имя"/>
              <InputField name='secondNameField' type="text" placeholder="Фамилия" />
              <InputField name='emailField' type="email" placeholder="Электронная почта" validate={[emailValidator]}/>
              <InputField name='passwordField' type="password" placeholder="Введите пароль" validate={[passwordValidator]}/>
              <InputField name='repeatpasswordField' type="password" placeholder="Повторите пароль" validate={[passwordValidator]}/>
              <Button isLogin={true} buttonText='Применить и войти' />
              <p>Уже зарегистрированы?
                  <MyLink to='/login' linkText='Вход'/>
              </p>
          </div>
          {props.error ? <ErrorLogin /> : <></>}
       </form>
  );
};

const connectedToReduxForm = reduxForm<
  TRegisterFormData,
  TRegisterOwnProps & MutateProps<IRegister, IRegisterVariables>
>({
  form: "registerForm",
  validate: formValidator
});

export default withMutation<
  TRegisterOwnProps,
  IRegister,
  IRegisterVariables,
  TRegisterOwnProps & MutateProps<IRegister, IRegisterVariables>
>(signupMutation)(connectedToReduxForm(RegisterForm));