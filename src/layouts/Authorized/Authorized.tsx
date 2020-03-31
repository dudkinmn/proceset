import React, { ReactElement, useState } from "react";
import { Redirect } from "react-router-dom";
import { SubmissionError } from "redux-form";

import { TGetUserResponceData } from "./Authorized.types";
import Header from "../../components/Header/Header";
import ProfileForm from "../../container/ProfileForm/ProfileForm";
import MainPage from "../../container/MainPage/MainPage";
import Menu from "../../components/Menu/Menu";
import styles from "./Authorized.module.css";

import { useSelector } from "react-redux";
import { TStore } from "../../store/index.store";

type NeedPage = "main" | "profile";

export interface IAuthorizedProps {
  needPage: NeedPage;
}

type AuthorizedProps = IAuthorizedProps;

let Authorized = ({
  needPage
}: AuthorizedProps): ReactElement<AuthorizedProps> => {
  const [menuVisible, setMenuVisible] = useState(false);
  const currentUser = useSelector((state: TStore) => state.currentUser);

  const renderSwitch = () => {
    switch (needPage) {
      case "main":
        return <MainPage />;
      case "profile":
        return (
          <ProfileForm
            initialValues={{
              /*firstNameField: data?.currentUser?.firstName,
                    secondNameField: data?.currentUser?.secondName,
                    emailField: data?.currentUser?.email*/
              firstNameField: currentUser.firstName,
              secondNameField: currentUser.secondName,
              emailField: currentUser.email
            }}
          />
        );
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
