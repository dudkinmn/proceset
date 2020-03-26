import React from "react";
import { Route, Redirect, Link } from "react-router-dom";
import { ReactElement } from "react";
import { reduxForm, SubmissionError } from "redux-form";
import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import { Dispatch } from "redux";

import {
  IProfileProps,
  IProfileState,
  TProfileStateProps,
  TProfileOwnProps,
  TProfileDispatchProps,
  TProfileFormData
} from "./ProfileForm.types";
import { incAction } from "../../store/index.reducer";
import { formProfileValidator, onlyEmail, passLength } from "../../utils/validators";


import styles from "./ProfileForm.module.css";
import InputField from '../../components/TextField/TextField';
import Button from '../../components/Button/Button';
import MyLink from '../../components/MyLink/MyLink'
import ErrorLogin from '../../components/ErrorLogin/ErrorLogin'

let ProfileForm = ({ }: IProfileProps): ReactElement<IProfileState> => {

    
  const passwordValidator = passLength(8);
  const emailValidator = onlyEmail;

 
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
        <InputField name='emailField' type='email' placeholder='qwerty@yandex.ru.' withLabel={true} textLabel='Электронная почта' validate={[emailValidator]} />
        <InputField name='passwordField' type='password' placeholder='********' withLabel={true} textLabel='Новый пароль' validate={[passwordValidator]}/>
        <InputField name='repeatpasswordField' type='password' placeholder='********' withLabel={true} textLabel='Повторите пароль' validate={[passwordValidator]} />
      </div>
    </div>
    
  );
};


const connectedToReduxForm = reduxForm<
  TProfileFormData,
  TProfileOwnProps & TProfileStateProps & TProfileDispatchProps
>({
  form: "profileForm",
  validate: formProfileValidator
});

const mapStateToProps: MapStateToProps<TProfileStateProps, TProfileOwnProps> = (
  state: any,
  ownProps: TProfileOwnProps
) => {
  return {
    count: state?.count,
    initialValues: {
      nameField: 'nameField',
      surnameField: 'surnameField'
    }
  };
};

const mapDispatchToProps: MapDispatchToProps<
  TProfileDispatchProps,
  TProfileOwnProps
> = (dispatch: Dispatch, ownProps: TProfileOwnProps) => {
  return {
    onIncrement() {
      dispatch(incAction());
    }
  };
};


const ConnectedProfile = connect<
  TProfileStateProps,
  TProfileDispatchProps,
  TProfileOwnProps
>(
  mapStateToProps,
  mapDispatchToProps
)(connectedToReduxForm(ProfileForm));

export default ConnectedProfile;
