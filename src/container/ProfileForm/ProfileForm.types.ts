import { InjectedFormProps } from "redux-form";

export type TProfileStateProps = {
  count: number;
};

export type TProfileDispatchProps = {
  onIncrement(): void;
};

export type TProfileOwnProps = {
};

export type TProfileFormData = {
  loginField: string;
  passwordField: string;
};

export interface IProfileProps
  extends InjectedFormProps<
      TProfileFormData,
      TProfileOwnProps & TProfileDispatchProps & TProfileStateProps
    >,
    TProfileOwnProps,
    TProfileDispatchProps,
  TProfileStateProps { }
    
export interface IProfileState {}
