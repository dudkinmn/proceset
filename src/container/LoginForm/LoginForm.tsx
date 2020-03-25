import React from "react";
import { ReactElement } from "react";
import { reduxForm, SubmissionError } from "redux-form";
import { Dispatch } from "redux";
import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";


import {
  ILoginProps,
  ILoginState,
  TLoginStateProps,
  TLoginOwnProps,
  TLoginDispatchProps,
  TLoginFormData
} from "./LoginForm.types";
import { incAction } from "../../store/index.reducer";
import { formValidator, onlyEmail, passLength } from "../../utils/validators";

import styles from "./LoginForm.module.css";
import InputField from '../../components/TextField/TextField';
import Button from '../../components/Button/Button';
import MyLink from '../../components/MyLink/MyLink'
import ErrorLogin from '../../components/ErrorLogin/ErrorLogin'

export interface ILoginFormProps {
}

type LoginFormProps = ILoginFormProps;

const server = new Promise((resolve, reject) => {
  resolve({
    data: {
      user: "Vasya"
    }
  });
});

const passwordValidator = passLength(8);

let LoginForm = ({ }: ILoginProps): ReactElement<ILoginState> => {

  const handleSubmit = (fields: any) => {
    console.warn(fields);
    return new Promise((resolve, reject) => {
      server
        .then(res => {
          resolve(res);
        })
        .catch(e => {
          reject(new SubmissionError({ _error: "Что-то пошло не так" }));
        });
    });
  }
  
  return (
    
    <form onSubmit={handleSubmit} className={styles.formLayout}>
        <div className={styles.formContent}>
          <InputField name='loginField' type="text" placeholder="Электронная почта"  validate={[onlyEmail]}/>
          <InputField name='passwordField' type="password" placeholder="Пароль" validate={[passwordValidator]} />
          <Button isLogin={true} type='login' buttonText='Войти в систему' />
          <MyLink to='/register' linkText='Зарегистрироваться' />
        </div>

        <ErrorLogin/>

       </form>
    
  );
};


/*const connected;*/

/*const NewLoginForm = reduxForm({
  form: 'LoginForm',
  validate: formValidator
})(LoginForm);
*/

const connectedToReduxForm = reduxForm<
  TLoginFormData,
  TLoginOwnProps & TLoginStateProps & TLoginDispatchProps
>({
  form: "loginForm",
  validate: formValidator
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

export default ConnectedLogin;
