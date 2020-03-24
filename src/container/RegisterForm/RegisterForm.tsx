import React from "react";
import { Route, Redirect, Link } from "react-router-dom";
import { ReactElement } from "react";
import styles from "./RegisterForm.module.css";



import { reduxForm, SubmissionError } from "redux-form";
import InputField from '../../components/TextField/TextField';
import Button from '../../components/Button/Button';
import MyLink from '../../components/MyLink/MyLink'
import ErrorLogin from '../../components/ErrorLogin/ErrorLogin'

export interface IRegisterFormProps {
}

type RegisterFormProps = IRegisterFormProps;

let RegisterForm = ({}: RegisterFormProps): ReactElement<RegisterFormProps> => {

  
  return (
    
      <div className={styles.formLayout}>
        <div className={styles.formContent}>
              <p className={styles.headReg}>Регистрация</p>
              <InputField name='nameField' type="text" placeholder="Имя"/>
              <InputField name='surnameField' type="text" placeholder="Фамилия" />
              <InputField name='emailField' type="email" placeholder="Электронная почта"/>
              <InputField name='passwordField' type="password" placeholder="Введите пароль"/>
              <InputField name='repaetpasswordField' type="password" placeholder="Повторите пароль"/>
              <Button isLogin={true} type='login' buttonText='Применить и войти' />
              <p>Уже зарегистрированы?
                      <MyLink to='/login' linkText='Вход'/>
              </p>
              
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
  form: 'RegisterForm'
})(RegisterForm);
