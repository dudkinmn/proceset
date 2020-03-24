import React from "react";
import { ReactElement } from "react";
import { reduxForm } from "redux-form";
import { Dispatch } from "redux";


import { incAction } from "../../store/index.reducer";
import { formValidator, onlyEmail, passLength } from "../../utils/validators";

import styles from "./LoginForm.module.css";
import InputField from '../../components/TextField/TextField';
import Button from '../../components/Button/Button';
import MyLink from '../../components/MyLink/MyLink'
import ErrorLogin from '../../components/ErrorLogin/ErrorLogin'

export interface ILoginFormProps {
}

type LoginFormProps = ILoginFormProps;

let LoginForm = ({ }: LoginFormProps): ReactElement<LoginFormProps> => {

  
  return (
    
      <div className={styles.formLayout}>
        <div className={styles.formContent}>
          <InputField name='loginField' type="text" placeholder="Электронная почта"/>
          <InputField name='passwordField' type="password" placeholder="Пароль"/>
          <Button isLogin={true} type='login' buttonText='Войти в систему' />
          <MyLink to='/register' linkText='Зарегистрироваться' />
        </div>

        <ErrorLogin/>

       </div>
    
  );
};

const mapStateToProps = (state: any) => {
  return {};
};

/*const connected;*/

export default reduxForm({
  form: 'LoginForm',
  validate: formValidator
})(LoginForm);
