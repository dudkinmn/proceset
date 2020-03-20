import React from "react";
import { Route, Redirect, Link } from "react-router-dom";
import { ReactElement } from "react";
import divStyle from "./LoginForm.style";
import styles from "./LoginForm.module.css";

export interface ILoginFormProps {
  logIn: any;
}

type LoginFormProps = ILoginFormProps;

let LoginForm = ({ logIn }: LoginFormProps): ReactElement<LoginFormProps> => {
  return (
    <>
      <div className={styles.back}>Я НЕавторизованный лэйаут + Логин</div>
      <div className={styles.content}>
        <button onClick={logIn}>логин</button>
        <Link to="/main">Мэйн</Link>
        <Link to="/profile">Профиль</Link>
      </div>
    </>
  );
};

export default LoginForm;
