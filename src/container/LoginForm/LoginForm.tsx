import React from "react";
import { Route, Redirect, Link } from "react-router-dom";
import { ReactElement } from "react";
import styles from "./LoginForm.module.css";

import TextField from '../../components/TextField/TextField';
import Button from '../../components/Button/Button';
import MyLink from '../../components/MyLink/MyLink'

export interface ILoginFormProps {
  logIn: any;
}

type LoginFormProps = ILoginFormProps;

let LoginForm = ({ logIn }: LoginFormProps): ReactElement<LoginFormProps> => {

  
  return (
    <>
      <div className={styles.formLayout}>
        <div className={styles.formContent}>
          <TextField type="text" placeholder="Электронная почта"/>
          <TextField type="password" placeholder="Пароль"/>
          <Button type='login' buttonText='Войти в систему' />
          <MyLink to='/register' linkText='Зарегистрироваться' />
        </div>

        <div className={styles.error}>
          <img className="icon" src='/img/Warning.png' alt='warning'></img>
            Сообщение об ошибке!
        </div>
       </div>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {};
};

/*const connected;*/

export default LoginForm;
