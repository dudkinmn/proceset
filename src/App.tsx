import React, { useEffect} from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';

import "./index.css";
import { TStore } from './store/index.store'
import Authorized from "./layouts/Authorized/Authorized";
import UnAuthorized from "./layouts/UnAuthorized/UnAuthorized";


export interface IAppProps {}

function App({ ...props }: IAppProps): React.ReactElement<any> {
  
  let isAuthorized = useSelector((state: TStore) => (state.isAuthorized));

  const pages = {
    main: () => <Authorized needPage={"main"} />,
    profile: () => <Authorized needPage={"profile"} />,
    login:() => <UnAuthorized isRegister={false} />,
    register: () => <UnAuthorized isRegister={true} />,
    notFound: () => <div>404. Страница не найдена</div>,
  };

  return (
    <>
      <Switch>
        {console.log('isAuthorized=', isAuthorized)}
        <Route exact path="/" component={pages.login} />
        <Route path="/register" component={pages.register} />
        <Route path="/login" component={pages.login} />

        { isAuthorized  ?
          <Route path='/profile' component={pages.profile} />:
          <Redirect to="/login" />}
          
        { isAuthorized  ?
          <Route path='/main' component={pages.main} /> :
          <Redirect to="/login" />}
        </Switch>
      </>
  );
}

export default App;
