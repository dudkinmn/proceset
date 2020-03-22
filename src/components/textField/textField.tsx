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
    <div style={styles}>
      { withLabel ?<label>{textLabel}</label> : null}
      <input className={styles.input} type={type} placeholder={placeholder} />
    </div>
  );
};


export default TextField;
