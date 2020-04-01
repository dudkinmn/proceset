import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "@apollo/react-hooks";
import { isEmpty } from "lodash";

import { TStore } from "./store/index.store";
import Authorized from "./layouts/Authorized/Authorized";
import UnAuthorized from "./layouts/UnAuthorized/UnAuthorized";
import getCurrentUserQuery from "./queries/getCurrentUserQuery";
import history from "./utils/history";
import { actionSetUser } from "./store/index.reducer";
import { TGetUserResponceData } from "./App.types";
import "./index.css";

export interface IAppProps { }

const defaultPage = "/main";

function App({ ...props }: IAppProps): React.ReactElement<any> {
  const currentUser = useSelector((state: TStore) => state.currentUser);
  let isAuthorized = Object.values(currentUser).length > 0;

  const dispatch = useDispatch();

  const { loading, data, error } = useQuery<TGetUserResponceData>(
    getCurrentUserQuery,
    { fetchPolicy: "network-only" }
  );

  useEffect(() => {
    if (error) {
      history.push("/login");
    }

    if (!isEmpty(localStorage.getItem("token")) && !isAuthorized) {
      dispatch(actionSetUser(data?.currentUser));
      history.push(defaultPage);
    }
    return () => {};
  }, [loading, data, error]);

  const pages = {
    main: () => <Authorized needPage={"main"} />,
    profile: () => <Authorized needPage={"profile"} />,
    login: () => <UnAuthorized isRegister={false} />,
    register: () => <UnAuthorized isRegister={true} />,
    notFound: () => <div>404. Страница не найдена</div> //не используется в данной версии
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
export { defaultPage }

