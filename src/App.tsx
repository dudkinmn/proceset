import React from "react";
import { Switch, Route} from "react-router-dom";
import { isEmpty } from "lodash";


import "./index.css";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Authorized from "./layouts/Authorized/Authorized";
import UnAuthorized from "./layouts/UnAuthorized/UnAuthorized";

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

function App({ ...props }: IAppProps): React.ReactElement<any> {

  let isAuthorized = false; //статус авторизации

  const pages = {
    main: () => <Authorized needPage={"main"} />,
    profile: () => <Authorized needPage={"profile"} />,
    login: () => <UnAuthorized isRegister={false} />,
    register: () => <UnAuthorized isRegister={true} />,
    notFound: () => <div>404. Страница не найдена</div>
  };

  return (
    <>
      { isAuthorized = isEmpty(localStorage.getItem("token")) ? false : true }
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
    </>
  );
}

export default App;
