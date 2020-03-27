import { InjectedFormProps } from "redux-form";
import { MutateProps } from "@apollo/react-hoc";

export type TProfileStateProps = {
};

export type TProfileDispatchProps = {
};

export type TProfileOwnProps = {
    initialValues : {
      firstNameField?: string;
      secondNameField?: string;
      emailField?: string;
    }
};

export type TProfileFormData = {
    firstNameField?: string;
    secondNameField?: string;
  emailField?: string;
};

export interface IProfileProps
  extends InjectedFormProps<
      TProfileFormData,
      TProfileOwnProps /*& TProfileDispatchProps & TProfileStateProps*/ & MutateProps<IProfile, IProfileVariables>
    >,
  TProfileStateProps,
  TProfileOwnProps,
  MutateProps<IProfile, IProfileVariables> {}
    
export interface IProfileState { }

 export type TUser = {
  id: number;
  firstName: string;
  secondName: string;
  email: string;
};

export interface IProfile {
  token: String;
  user: TUser;
}

export interface IProfileVariables {
  email: string;
  password: string;
}

export type TProfile = {
  email: string;
  password: string;
}

export type TProfileData = { 
  email: string;
  password: string;
};


export type TEditUserResponceData = { 
  data?: {
    id?: number;
    firstName?: string;
    secondName?: string;
    email?: string;
  }
};

export type TEditUserData = { 
  id: number;
  firstName: string;
  secondName: string;
  email: string;
  password: string;
};