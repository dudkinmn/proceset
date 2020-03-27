import { InjectedFormProps } from "redux-form";
import { MutateProps } from "@apollo/react-hoc";

export type TGetUserResponceData = {

        currentUser: {
            id: number,
            firstName: string;
            secondName: string;
            email: string;
        }
  }
  
