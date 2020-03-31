import React, { ReactElement, useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../../components/Header/Header";
import ProfileForm from "../../container/ProfileForm/ProfileForm";
import MainPage from "../../container/MainPage/MainPage";
import Menu from "../../components/Menu/Menu";
import styles from "./Authorized.module.css";
import { TStore } from "../../store/index.store";

type NeedPage = "main" | "profile";

export interface IAuthorizedProps {
  needPage: NeedPage;
}

type AuthorizedProps = IAuthorizedProps;

const Authorized = ({
  needPage
}: AuthorizedProps): ReactElement<AuthorizedProps> => {
  const [menuVisible, setMenuVisible] = useState(false);
  const currentUser = useSelector((state: TStore) => state.currentUser);

  /*const dispatch = useDispatch();
  const { loading, data, error } = useQuery<TGetUserResponceData>(
    getCurrentUserQuery,
    { fetchPolicy: "network-only" }
  );

  useEffect(() => {

    console.log('внутри профиля');
    if (Object.values(data?.currentUser || {}).length > 0) {
      dispatch(actionSetUser(data?.currentUser));
    }

    return () => {};
  }, [data]);*/

  const renderSwitch = () => {
    switch (needPage) {
      case "main":
        return <MainPage />;
      case "profile":
        return <ProfileForm />;
      default:
        return <Redirect to="/" />;
    }
  };

  return (
    <div className={styles.body}>
      {menuVisible ? <Menu setMenuVisible={setMenuVisible} /> : null}
      <Header setMenuVisible={setMenuVisible} />
      {renderSwitch()}
    </div>
  );
};

export default Authorized;
