import React from "react";
import { ReactElement } from "react";
import { reduxForm, SubmissionError } from "redux-form";
import { Dispatch } from "redux";
import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";

import { useQuery, useMutation } from "@apollo/react-hooks";
import { withMutation, MutateProps } from "@apollo/react-hoc";
import store from '../../store/index.store'

import {
  ILoginProps,
  ILoginState,
  TLoginStateProps,
  TLoginOwnProps,
  TLoginDispatchProps,
  TLoginFormData,
  ILogin,
  ILoginVariables,
  TlogInData
} from "./LoginForm.types";
import { incAction } from "../../store/index.reducer";
import { formLoginValidator, onlyEmail, passLength } from "../../utils/validators";
import loginMutation from "../../queries/loginMutation";

import styles from "./LoginForm.module.css";
import InputField from '../../components/TextField/TextField';
import Button from '../../components/Button/Button';
import MyLink from '../../components/MyLink/MyLink';
import ErrorLogin from '../../components/ErrorLogin/ErrorLogin';

const passwordValidator = passLength(8);
const emailValidator = onlyEmail();

let LoginForm = ({ ...props }: ILoginProps): ReactElement<ILoginState> => {

  const [logIn, result] = useMutation<{}, TlogInData>(
    loginMutation
  );

  const handleSubmit = (fields: any) => {

    return new Promise((resolve, reject) => {
      logIn({
        variables: {
          email: fields.loginField,
          password: fields.passwordField
        }
      })
        .then(res => {
          console.log("res");
          /**
           * token ложим куда нужно
           * и редиректим history.push
           * res.data?.token;
           * res.data?.user;
           */

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
        <InputField name='loginField' type="text" placeholder="Электронная почта" validate={[emailValidator]} />
        <InputField name='passwordField' type="password" placeholder="Пароль" validate={[passwordValidator]} />
        <Button isLogin={true} type='login' buttonText='Войти в систему' />
        <MyLink to='/register' linkText='Зарегистрироваться' />
      </div>

      {props.error ? <ErrorLogin /> : <></>}

    </form>
    
  );
};


/*const connectedToReduxForm = reduxForm<
  TLoginFormData,
  TLoginOwnProps & TLoginStateProps & TLoginDispatchProps
>({
  form: "loginForm",
  validate: formLoginValidator
});

const mapStateToProps: MapStateToProps<TLoginStateProps, TLoginOwnProps> = (
  state: any,
  ownProps: TLoginOwnProps
) => {
  return {
    count: state?.count,
    initialValues: {
      loginField: "Initialing login field"
    }
  };
};

const mapDispatchToProps: MapDispatchToProps<
  TLoginDispatchProps,
  TLoginOwnProps
> = (dispatch: Dispatch, ownProps: TLoginOwnProps) => {
  return {
    onIncrement() { 
      dispatch(incAction());
    }
  };
  };

  
const ConnectedLogin = connect<
  TLoginStateProps,
  TLoginDispatchProps,
  TLoginOwnProps
>(
  mapStateToProps,
  mapDispatchToProps
)(connectedToReduxForm(LoginForm));

export default ConnectedLogin; */

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
>(loginMutation)(connectedToReduxForm(LoginForm));
