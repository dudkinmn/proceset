import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ReactElement } from "react";
import { isEmpty } from 'lodash';

export interface IPrivateRouteProps {
    component: any,
    targetPath: string,
    loginPath: string
} 
type PrivateRouteProps = IPrivateRouteProps

const PrivateRoute = ({
  component,
  targetPath,
  loginPath
}: PrivateRouteProps): ReactElement<PrivateRouteProps> => {
    
  let isAuthorized = isEmpty(localStorage.getItem("token")) ? false : true ;  

  return (

    <Route exact render={() => (
      isAuthorized ?
      component:
      <Redirect to={loginPath} />)} path={targetPath} />
  )
}
export default PrivateRoute


