import React, { ReactFragment } from "react";
import { ReactElement, useState} from "react";


import { Eye } from "../../img/Eye";
import { Field, WrappedFieldProps, BaseFieldProps } from "redux-form";
import styles from "./TextField.module.css";


export interface ITextFieldProps extends Partial<WrappedFieldProps>  {
    type?: "password" | "input" | "email" | "text" ;
    placeholder?: string;
    size?: any;
    withLabel?: boolean;
    textLabel?: string;
    classNames?: string[]

}

type TextFieldProps = ITextFieldProps;

let TextField = ({ type, placeholder, withLabel, textLabel, meta, input}: TextFieldProps): ReactElement => {
  
  let [curType, setCurType] = useState(type)


  const handleEyeClick = (): void => {
    const isPasswordType = curType === "password";
    setCurType(isPasswordType ? "text" : "password" );
  }

  const getEyeIcon = (): React.ReactNode => {
    if (type === "password") {
      return (
        <Eye
          key="eye"
          closed={curType === "password"}
          onClick={handleEyeClick}
        />
      );
    }

    return null;
  }
  
  return (
    <div className={styles.inputBlock} >
      {withLabel ? <label>{textLabel}</label> : null}
      <input
        className={withLabel ? styles.inputWithLabel : styles.inputWithoutLabel}
        type={curType}
        placeholder={placeholder}
        {...input} />
      {getEyeIcon()}
      {meta?.touched && meta.invalid ?
        <span className={withLabel ? styles.errorMessageWithLabel : styles.errorMessageWithoutLabel}>
          {meta.error}
        </span>
        : null}
      
    </div>
  );
};


const InputField: React.FC<ITextFieldProps & BaseFieldProps> = props => {
  return <Field name={props.name} component={TextField} {...props} />;
};

export default InputField;


/*export default TextField;*/
