import React from "react";
import { Route, Redirect, Link } from "react-router-dom";
import { ReactElement } from "react";
import NewLoginForm from "../../container/LoginForm/LoginForm";
import RegisterForm from "../../container/RegisterForm/RegisterForm";

import styles from "./UnAuthorized.module.css";

import Logo from '../../components/Logo/Logo';

export interface IUnAuthorizedProps {
  isRegister: boolean;
  logIn: any;
}

type UnAuthorizedProps = IUnAuthorizedProps;

let UnAuthorized = ({
  isRegister,
  logIn
}: UnAuthorizedProps): ReactElement<UnAuthorizedProps> => {
  return (
    <div className={styles.body}>
      <div className={styles.background} />
      <div className={styles.content}>
        <Logo/>
        {isRegister ? <RegisterForm /> : <NewLoginForm  />}
      </div>
    </div>
  );
};

export default UnAuthorized;
