import React, { useEffect } from "react";
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
import { actionAuthorize, actionSetUser } from "./store/index.reducer";
import { TGetUserResponceData } from "./App.types";

export interface IAppProps {}

function App({ ...props }: IAppProps): React.ReactElement<any> {
  const isAuthorized = useSelector((state: TStore) => state.isAuthorized);
  const dispatch = useDispatch();
  const { loading, data, error } = useQuery<TGetUserResponceData>(
    getCurrentUserQuery,
    { fetchPolicy: "network-only" }
  );

  if (loading) {
    return <Preloader />;
  }

  if (error) {
    history.push("/login");
  }

  if (!isEmpty(localStorage.getItem("token"))) {
    dispatch(actionAuthorize(true));
    dispatch(actionSetUser(data?.currentUser));
    history.push("/main");
  }

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
