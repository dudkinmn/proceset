import React,  { ReactElement } from "react";
import { reduxForm } from "redux-form";
import { withMutation, MutateProps } from "@apollo/react-hoc";

import {
  IProfileProps,
  IProfileState,
  TProfileOwnProps,
  TProfileFormData,
  IProfile,
  IProfileVariables,
  TProfileData
} from "./ProfileForm.types";
import { formValidator, onlyEmail, passLength } from "../../utils/validators";


import signupMutation from "../../queries/signupMutation";
import styles from "./ProfileForm.module.css";
import InputField from '../../components/TextField/TextField';
import Button from '../../components/Button/Button';

const ProfileForm = ({ ...props }: IProfileProps): ReactElement<IProfileState> => {

  const passwordValidator = passLength(8);
  const emailValidator = onlyEmail;
  
  return ( 
    <div >
      {console.log(props)}
      <div className={styles.background}/>>

      <div className={styles.userHeader}>
        <h1 className={styles.userName}>Борис Годунов. Редактирование </h1>
        <Button isLogin={false} type='login' buttonText='Сохранить' />
      </div>
      
      <div className={styles.userData}>
        <InputField name='firstNameField' type='text' placeholder='Борис' withLabel={true} textLabel='Имя' />
        <InputField name='secondNameField' type='text' placeholder='Годунов' withLabel={true} textLabel='Фамилия' />
        <InputField name='emailField' type='email' placeholder='qwerty@yandex.ru.' withLabel={true} textLabel='Электронная почта' validate={[emailValidator]} />
        <InputField name='passwordField' type='password' placeholder='********' withLabel={true} textLabel='Новый пароль' validate={[passwordValidator]}/>
        <InputField name='repeatpasswordField' type='password' placeholder='********' withLabel={true} textLabel='Повторите пароль' validate={[passwordValidator]} />
      </div>
    </div>
    
  );
};


/*const connectedToReduxForm = reduxForm<
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

export default ConnectedProfile;*/

const connectedToReduxForm = reduxForm<
  TProfileFormData,
  TProfileOwnProps & MutateProps<IProfile, IProfileVariables>
>({
  form: "profileForm",
  validate: formValidator
});

export default withMutation<
  TProfileOwnProps,
  IProfile,
  IProfileVariables,
  TProfileOwnProps & MutateProps<IProfile, IProfileVariables>
>(signupMutation)(connectedToReduxForm(ProfileForm));

