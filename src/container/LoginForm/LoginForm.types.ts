import { InjectedFormProps } from "redux-form";
import { MutateProps } from "@apollo/react-hoc";

export type TLoginStateProps = {
};

export type TLoginDispatchProps = {
};

export type TLoginOwnProps = {
};

export type TLoginFormData = {
  loginField: string;
  passwordField: string;
};

export interface ILoginProps
  extends InjectedFormProps<
      TLoginFormData,
      TLoginOwnProps & MutateProps<ILogin, ILoginVariables>
    >,
    TLoginOwnProps,
    MutateProps<ILogin, ILoginVariables> {}
    
export interface ILoginState { }

export type TUser = {
  id: number;
  firstName: string;
  secondName: string;
  email: string;
};

export interface ILogin {
  token: String;
  user: TUser;
}

export interface ILoginVariables {
  email: string;
  password: string;
}

export type TlogIn = {
  email: string;
  password: string;
}

export type TSigninData = { 
  email: string;
  password: string;
};

export type TSigninResponceData = { 
  data?: {
    login?: {
      token?: string;
      user?: {
        id: number;
        firstName: string;
        secondName: string;
        email: string;
      }
    }
  }
};

