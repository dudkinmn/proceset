import React from "react";
import { ReactElement } from "react";
import styles from "./Button.module.css";

export interface IButtonProps {
    buttonText: string
    type: string;
}

type ButtonProps = IButtonProps;

let Button = ({type, buttonText}: ButtonProps): ReactElement<ButtonProps> => {
  return (
      <button className={styles.button} >{buttonText}</button>
  );
};


export default Button;
