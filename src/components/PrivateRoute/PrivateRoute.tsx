import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ReactElement } from "react";

export interface IPrivateRouteProps {
    component: any,
    targetPath: any,
    isAuthorized: Boolean,
    loginPath: any
}
type PrivateRouteProps = IPrivateRouteProps

const PrivateRoute = ({
  component,
  targetPath,
  isAuthorized,
  loginPath
}: PrivateRouteProps):ReactElement<PrivateRouteProps> => (
    <>
      {console.log("перед роутом"+ targetPath)}
      <Route path={targetPath} render={():ReactElement<PrivateRouteProps> => (isAuthorized ?
            (<>
              {console.log("в рендере" )};
              {component()};
            </>)
            :
            (<>
              {console.log('в редитрете')};
              <Redirect to={loginPath} />;
            </>)
      )}
      />
    </> 
  )
export default PrivateRoute