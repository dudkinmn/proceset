import React from "react";
import { Route, Redirect, Link } from "react-router-dom";
import { ReactElement } from "react";
import ConnectedLogin from "../../container/LoginForm/LoginForm";
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
<<<<<<< HEAD
        {isRegister ? <RegisterForm /> : <ConnectedLogin  />}
=======
        {isRegister ? <RegisterForm /> : <NewLoginForm  />}
>>>>>>> 367a4527e35a24485d55737a4b57fa26dd243258
      </div>
    </div>
  );
};

export default UnAuthorized;
