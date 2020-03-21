import React, { ReactElement, useState } from "react";

import { Switch, Route, Link, Redirect, useHistory } from "react-router-dom";
import "./index.css";
import wrapperStyle from "./index.styles";
import Header from "./components/Header/Header";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Authorized from "./layouts/Authorized/Authorized";
import UnAuthorized from "./layouts/UnAuthorized/UnAuthorized";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store/index.store";

export interface IAppProps {}

function App({}: IAppProps): React.ReactElement<any> {
  let [counter, setCounter] = useState(0);
  let [isAuthorized, setIsAuthorized] = useState(false);

  function inc() {
    setCounter(++counter);
  }

  function dec() {
    setCounter(--counter);
  }

  const logIn = () => {
    console.log("я в аппе логин");
    setIsAuthorized(true);
    console.log("я в аппе логин =" + isAuthorized);
  };

  const logOut = () => {
    console.log("я в аппе логаут");
    setIsAuthorized(false);
  };

  const pages = {
    main: () => <Authorized needPage={"main"} />,
    profile: () => <Authorized needPage={"profile"} />,
    login: () => <UnAuthorized isRegister={false} logIn={logIn} />,
    register: () => <UnAuthorized isRegister={true} logIn={logIn} />,
    notFound: () => <div>404. Страница не найдена</div>
  };

  return (
    <>
      <LoginContext.Provider value={isAuthorized}>
        <Switch>
          <Route exact path="/" component={pages.login} />
          <Route path="/register" component={pages.register} />
          <Route path="/login" component={pages.login} />

          {/*
                    { 
                        isAuthorized ? <Route path="/main" component={pages.main} /> : <Redirect to="/login"/>
                    }

                    { 
                        isAuthorized ? <Route path="/profile" component={pages.profile} /> : <Redirect to="/login"/>
                    }
                    */}

          <PrivateRoute
            component={pages.main}
            targetPath="/main"
            isAuthorized={isAuthorized}
            loginPath="/login"
          />

          <PrivateRoute
            component={pages.profile}
            targetPath="/profile"
            isAuthorized={isAuthorized}
            loginPath="/login"
          />
        </Switch>
      </LoginContext.Provider>
    </>
  );

  /*return (
      <div>
        {counter}
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
        <div>Hello world</div>
      </div>
    );*/
}

export default App;
export const LoginContext = React.createContext(true);
