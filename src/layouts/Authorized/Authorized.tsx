import React, { ReactElement, useState } from "react";
import { Redirect } from "react-router-dom";

import Header from "../../components/Header/Header";
import ProfileForm from "../../container/ProfileForm/ProfileForm";
import MainPage from "../../container/MainPage/MainPage";
import Menu from "../../components/Menu/Menu";
import styles from "./Authorized.module.css";

type NeedPage = "main" | "profile";

export interface IAuthorizedProps {
  needPage: NeedPage;
}

type AuthorizedProps = IAuthorizedProps;

const Authorized = ({
  needPage
}: AuthorizedProps): ReactElement<AuthorizedProps> => {
  const [menuVisible, setMenuVisible] = useState(false);

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
