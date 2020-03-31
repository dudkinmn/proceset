import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "@apollo/react-hooks";
import { isEmpty } from "lodash";

import "./index.css";
import { TStore } from "./store/index.store";
import Authorized from "./layouts/Authorized/Authorized";
import UnAuthorized from "./layouts/UnAuthorized/UnAuthorized";
import Preloader from "./components/Preloader/Preloader";
import getCurrentUserQuery from "./queries/getCurrentUserQuery";

import history from "./utils/history";
import { actionSetUser } from "./store/index.reducer";
import { TGetUserResponceData } from "./App.types";

export interface IAppProps {}

function App({ ...props }: IAppProps): React.ReactElement<any> {
  const currentUser = useSelector((state: TStore) => state.currentUser);
  const [isLoading, setIsLoading] = useState(false);
  let isAuthorized = Object.values(currentUser).length > 0;

  const dispatch = useDispatch();

  const { loading, data, error } = useQuery<TGetUserResponceData>(
    getCurrentUserQuery,
    { fetchPolicy: "network-only" }
  );


  
  useEffect(() => {
    if (loading) {
      setIsLoading(loading);
    }

    if (error) {
      history.push("/login");
    }

    if (!isEmpty(localStorage.getItem("token"))) {
      
        
    console.log('внутри аппа', data?.currentUser);
      dispatch(actionSetUser(data?.currentUser));
      history.push("/profile");
    }
    
    console.log('внутри аппа');
    return () => {};
  }, [loading, data, error]);



  /*if (isLoading) {
    return <Preloader />;
  }*/

  const pages = {
    main: () => <Authorized needPage={"main"} />,
    profile: () => <Authorized needPage={"profile"} />,
    login: () => <UnAuthorized isRegister={false} />,
    register: () => <UnAuthorized isRegister={true} />,
    notFound: () => <div>404. Страница не найдена</div>
  };

  return (
    <Switch>
      <Route exact path="/" component={pages.login} />
      <Route path="/register" component={pages.register} />
      <Route path="/login" component={pages.login} />

      {isAuthorized ? (
        <Route path="/profile" component={pages.profile} />
      ) : (
        <Redirect to="/login" />
      )}

      {isAuthorized ? (
        <Route path="/main" component={pages.main} />
      ) : (
        <Redirect to="/login" />
      )}
    </Switch>
  );
}

export default App;
