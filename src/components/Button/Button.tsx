import React from "react";
import { ReactElement } from "react";

import styles from "./Button.module.css";

export interface IButtonProps {
  buttonText: string;
  isLogin: boolean;
  disabled?: boolean;
}

type ButtonProps = IButtonProps;

let Button = ({
  buttonText,
  isLogin,
  disabled = false
}: ButtonProps): ReactElement<ButtonProps> => {
  return (
    <button
      className={isLogin ? styles.buttonLogin : styles.buttonSave}
      disabled={disabled}
    >
      {buttonText}
    </button>
  );
};

export default Button;
