import React, { ReactElement } from "react";

import LoginForm from "../../container/LoginForm/LoginForm";
import RegisterForm from "../../container/RegisterForm/RegisterForm";
import Logo from "../../components/Logo/Logo";
import styles from "./UnAuthorized.module.css";

export interface IUnAuthorizedProps {
  isRegister: boolean;
}

type UnAuthorizedProps = IUnAuthorizedProps;

let UnAuthorized = ({
  isRegister
}: UnAuthorizedProps): ReactElement<UnAuthorizedProps> => {
  return (
    <div className={styles.body}>
      <div className={styles.background} />
      <div className={styles.content}>
        <Logo />
        {isRegister ? <RegisterForm /> : <LoginForm />}
      </div>
    </div>
  );
};

export default UnAuthorized;
