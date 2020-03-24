import React from "react";
import { Route, Redirect, Link } from "react-router-dom";
import { ReactElement } from "react";

import { reduxForm, SubmissionError } from "redux-form";
import styles from "./ProfileForm.module.css";

import InputField from '../../components/TextField/TextField';
import Button from '../../components/Button/Button';
import MyLink from '../../components/MyLink/MyLink'
import ErrorLogin from '../../components/ErrorLogin/ErrorLogin'

export interface IProfileFormProps {
}

type ProfileFormProps = IProfileFormProps;

let ProfileForm = ({ }: ProfileFormProps): ReactElement<ProfileFormProps> => {

  
  return (
    <div >
      <div className={styles.background}></div>

      <div className={styles.userHeader}>
        <h1 className={styles.userName}>Борис Годунов. Редактирование </h1>
        <Button isLogin={false} type='login' buttonText='Сохранить' />
      </div>
      
      <div className={styles.userData}>
        <InputField name='nameField' type='text' placeholder='Борис' withLabel={true} textLabel='Имя' />
        <InputField name='surnameField' type='text' placeholder='Годунов' withLabel={true} textLabel='Фамилия' />
        <InputField name='emailField' type='email' placeholder='qwerty@yandex.ru.' withLabel={true} textLabel='Электронная почта' />
        <InputField name='passwordField' type='password' placeholder='********' withLabel={true} textLabel='Новый пароль' />
        <InputField name='repeatpasswordField' type='password' placeholder='********' withLabel={true} textLabel='Повторите пароль' />
      </div>
    </div>
    
  );
};

const mapStateToProps = (state: any) => {
  return {};
};


export default reduxForm({
  form: 'ProfileForm'
})(ProfileForm);