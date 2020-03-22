import React from "react";
import { Route, Redirect, Link } from "react-router-dom";
import { ReactElement } from "react";
import styles from "./RegisterForm.module.css";

import TextField from '../../components/TextField/TextField';
import Button from '../../components/Button/Button';
import MyLink from '../../components/MyLink/MyLink'
import ErrorLogin from '../../components/ErrorLogin/ErrorLogin'

export interface IRegisterFormProps {
  logIn?: any;
}

type RegisterFormProps = IRegisterFormProps;

let RegisterForm = ({}: RegisterFormProps): ReactElement<RegisterFormProps> => {

  
  return (
    
      <div className={styles.formLayout}>
        <div className={styles.formContent}>
              <p className={styles.headReg}>Регистрация</p>
              <TextField type="text" placeholder="Имя"/>
              <TextField type="text" placeholder="Фамилия" />
              <TextField type="email" placeholder="Электронная почта"/>
              <TextField type="password" placeholder="Введите пароль"/>
              <TextField type="password" placeholder="Повторите пароль"/>
              <Button isLogin={true} type='login' buttonText='Применить и войти' />
              <p>Уже зарегистрированы?
                      <MyLink to='/login' linkText='Вход'/>
              </p>
              
          </div>

          <ErrorLogin/>

       </div>
    
  );
};

const mapStateToProps = (state: any) => {
  return {};
};

/*const connected;*/

export default RegisterForm;
