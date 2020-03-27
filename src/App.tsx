import React, { ReactElement, useState } from "react";
import { Switch, Route, Link, Redirect, useHistory } from "react-router-dom";
import { isEmpty } from "lodash";


import "./index.css";
import Header from "./components/Header/Header";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Authorized from "./layouts/Authorized/Authorized";
import UnAuthorized from "./layouts/UnAuthorized/UnAuthorized";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store/index.store";

export interface IAppProps {}

// client.query({
//   query: gql`
//     query {
//       processList {
//         id
//         name
//       }
//     }
//   `
// });

function App({}: IAppProps): React.ReactElement<any> {
  let isAuthorized = !(isEmpty(localStorage.getItem("token")))

  

  const pages = {
    main: () => <Authorized needPage={"main"} />,
    profile: () => <Authorized needPage={"profile"} />,
    login: () => <UnAuthorized isRegister={false} />,
    register: () => <UnAuthorized isRegister={true} />,
    notFound: () => <div>404. Страница не найдена</div>
  };

  return (
    <>
      <LoginContext.Provider value={isAuthorized}>
        <Switch>
          <Route exact path="/" component={pages.login} />
          <Route path="/register" component={pages.register} />
          <Route path="/login" component={pages.login} />

          <PrivateRoute
              component={pages.profile}
              targetPath="/profile"
              isAuthorized={isAuthorized}
              loginPath="/login"
          />
          
          <PrivateRoute
            component={pages.main}
            targetPath="/main"
            isAuthorized={isAuthorized}
            loginPath="/login"
          />
          
          {/*<Route path="/main" component={pages.main} />
          <Route path="/profile" component={pages.profile} />*/}

          {/*

            <PrivateRoute
              component={pages.profile}
              targetPath="/profile"
              isAuthorized={isAuthorized}
          loginPath="/login"
          />*/}
        </Switch>
      </LoginContext.Provider>
    </>
  );
}

export default App;
export const LoginContext = React.createContext(true);
