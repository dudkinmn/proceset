import React from "react";
import { ReactElement } from "react";
import styles from "./TextField.module.css";

export interface ITextFieldProps {
    type: string;
    placeholder: string
}

type TextFieldProps = ITextFieldProps;

let TextField = ({type, placeholder}: TextFieldProps): ReactElement<TextFieldProps> => {
  return (
      <input className={styles.input} type={type} placeholder={placeholder}/>
  );
};


export default TextField;
