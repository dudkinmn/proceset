import React from "react";
import { Switch, Route, Redirect} from "react-router-dom";
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

   //статус авторизации
  
  let isAuthorized = isEmpty(localStorage.getItem("token")) ? false : true ;  

  const pages = {
    main: () => <Authorized needPage={"main"} />,
    profile: () => <Authorized needPage={"profile"} />,
    login: () => <UnAuthorized isRegister={false} />,
    register: () => <UnAuthorized isRegister={true} />,
    notFound: () => <div>404. Страница не найдена</div>,
  };

  return (
    <> 
      {isAuthorized = isEmpty(localStorage.getItem("token")) ? false : true}
      <Switch>
         
        <Route exact path="/" component={pages.login} />
        <Route path="/register" component={pages.register} />
        <Route path="/login" component={pages.login} />

        {isAuthorized ?
          <Route path='/profile' component={pages.profile} />:
          <Redirect to="/login" />}
        
        {isAuthorized ?
          <Route path='/main' component={pages.main} /> :
          <Redirect to="/login" />}
        
      </Switch>
    </>
  );
}

export default App;
