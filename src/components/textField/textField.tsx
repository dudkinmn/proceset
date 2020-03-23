import React from "react";
import { ReactElement } from "react";
import styles from "./TextField.module.css";


type type = 'text' | 'password' | 'email';

export interface ITextFieldProps {
    type: string;
    placeholder: string;
    withInputSize?: boolean;
    size?: any;
    withLabel?: boolean;
    textLabel?: string

}

type TextFieldProps = ITextFieldProps;

let TextField = ({ type, placeholder, withInputSize,withLabel, textLabel, size }: TextFieldProps): ReactElement<TextFieldProps> => {
  return (
    <div className={styles.inputBlock} >
      {withLabel ? <label>{textLabel}</label> : null}
      {withLabel ?
        <input className={styles.inputWithLabel} type={type} placeholder={placeholder} />
        :
        <input className={styles.inputWithoutLabel} type={type} placeholder={placeholder} />
      }
      
    </div>
  );
};


export default TextField;
