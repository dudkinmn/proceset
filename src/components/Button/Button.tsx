import React from "react";
import { ReactElement } from "react";
import styles from "./Button.module.css";

export interface IButtonProps {
  buttonText: string
  type: string;
  isLogin: boolean
}

type ButtonProps = IButtonProps;

let Button = ({type, buttonText, isLogin}: ButtonProps): ReactElement<ButtonProps> => {
  return (
    <>
      {
        isLogin ?
          <button className={styles.button + ' ' + styles.buttonLogin}>{buttonText }</button >
      :
        <button className={styles.button + ' ' + styles.buttonSave}>{buttonText }</button >

    }
      </>
    
  );
};


export default Button;
