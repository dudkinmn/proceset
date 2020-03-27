import React,  { ReactElement } from "react";
import { reduxForm, SubmissionError } from "redux-form";
import { withMutation, MutateProps } from "@apollo/react-hoc";
import { useMutation } from "@apollo/react-hooks";
import { useDispatch, useSelector } from 'react-redux'

import {
  IProfileProps,
  IProfileState,
  TProfileOwnProps,
  TProfileFormData,
  IProfile,
  IProfileVariables,
  TProfileData,

  TEditUserData,
  TEditUserResponceData
} from "./ProfileForm.types";
import { formValidator, onlyEmail, passLength } from "../../utils/validators";


import editUserMutation from "../../queries/editUserMutation";
import styles from "./ProfileForm.module.css";
import InputField from '../../components/TextField/TextField';
import Button from '../../components/Button/Button';

const passwordValidator = passLength(8);
const emailValidator = onlyEmail();



const ProfileForm = ({ ...props }: IProfileProps): ReactElement<IProfileState> => {

  
  console.log(props);
  const [editUser] = useMutation<{}, TEditUserData>(editUserMutation);

  const handleSubmit = (fields: any) => {

    return new Promise((resolve, reject) => {
      editUser({
        variables: {
          id: Number(localStorage.getItem('Id')),
          firstName: fields.firstNameField,
          secondName: fields.secondNameField,
          email: fields.emailField,
          password: fields.passwordField
        }
      })
        .then((res: TEditUserResponceData) => {
          console.log(res);
          resolve(res);
        })
        .catch(e => {
          console.log(e?.message);
          reject(new SubmissionError({ _error: e?.message }));
        });
    });
  }
  
  return ( 
    <form onSubmit={props.handleSubmit(handleSubmit)}>
      <div className={styles.background}/>

      <div className={styles.userHeader}>
        <h1 className={styles.userName}>{props.initialValues.firstNameField + " " + props.initialValues.secondNameField}. Редактирование</h1>
        <Button isLogin={false} disabled={ !(props.dirty && props.anyTouched)} buttonText='Сохранить' />
      </div>
      
      <div className={styles.userData}>
        <InputField name='firstNameField' type='text' placeholder='Борис' withLabel={true} textLabel='Имя' />
        <InputField name='secondNameField' type='text' placeholder='Годунов' withLabel={true} textLabel='Фамилия' />
        <InputField name='emailField' type='email' placeholder='qwerty@yandex.ru.' withLabel={true} textLabel='Электронная почта' validate={[emailValidator]} />
        <InputField name='passwordField' type='password' placeholder='********' withLabel={true} textLabel='Новый пароль' validate={[passwordValidator]} />
        <InputField name='repeatpasswordField' type='password' placeholder='********' withLabel={true} textLabel='Повторите пароль' validate={[passwordValidator]} />
      </div>
    </form>
    
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
>(editUserMutation)(connectedToReduxForm(ProfileForm));

