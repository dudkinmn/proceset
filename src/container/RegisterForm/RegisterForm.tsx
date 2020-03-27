import React from "react";
import { Route, Redirect, Link } from "react-router-dom";
import { ReactElement } from "react";
import styles from "./RegisterForm.module.css";

import { useQuery, useMutation } from "@apollo/react-hooks";
import { withMutation, MutateProps } from "@apollo/react-hoc";

import {
  IRegisterProps,
  IRegisterState,
  TRegisterStateProps,
  TRegisterOwnProps,
  TRegisterDispatchProps,
  TRegisterFormData,
  IRegister,
  IRegisterVariables,
  TRegisterData
} from "./RegisterForm.types";
import { incAction } from "../../store/index.reducer";
import { formValidator, onlyEmail, passLength } from "../../utils/validators";
import signupMutation from "../../queries/signupMutation";

import { reduxForm, SubmissionError } from "redux-form";
import InputField from '../../components/TextField/TextField';
import Button from '../../components/Button/Button';
import MyLink from '../../components/MyLink/MyLink'
import ErrorLogin from '../../components/ErrorLogin/ErrorLogin'

export interface IRegisterFormProps {
}

type RegisterFormProps = IRegisterFormProps;

const passwordValidator = passLength(8);
const emailValidator = onlyEmail();

const RegisterForm = ({ ...props }: IRegisterProps): ReactElement<IRegisterState> => {
  
  const [signup, result] = useMutation<{}, TRegisterData>(signupMutation);

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
        .then(res => {
          console.log(res);
          /**
           * token ложим куда нужно
           * и редиректим history.push
           * res.data?.token;
           * res.data?.user;
           */

          resolve(res);
        })
        .catch(e => {
          console.log(e?.message);
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
              <Button isLogin={true} type='login' buttonText='Применить и войти' />
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