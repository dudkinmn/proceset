import { InjectedFormProps } from "redux-form";
import { MutateProps } from "@apollo/react-hoc";

export type TRegisterStateProps = {
};

export type TRegisterDispatchProps = {
};

export type TRegisterOwnProps = {
};

export type TRegisterFormData = {
    firstNameField: string;
    secondNameField: string;
    emailField: string;
    passwordField: string;
};

export interface IRegisterProps
  extends InjectedFormProps<
      TRegisterFormData,
      TRegisterOwnProps & MutateProps<IRegister, IRegisterVariables>
    >,
    TRegisterOwnProps,
    MutateProps<IRegister, IRegisterVariables> {}
    
export interface IRegisterState { }

export type TUser = {
  id: number;
  firstName: string;
  secondName: string;
  email: string;
};

export interface IRegister {
  token: String;
  user: TUser;
}

export interface IRegisterVariables {
  email: string;
  password: string;
}

export type TRegister = {
  email: string;
  password: string;
}

export type TRegisterData = { 
    firstName: string;
    secondName: string;
    email: string;
    password: string;
};

