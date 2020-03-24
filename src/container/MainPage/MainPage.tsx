import React from "react";
import { Route, Redirect, Link } from "react-router-dom";
import { ReactElement } from "react";
import styles from "./MainPage.module.css";

import TextField from '../../components/TextField/TextField';
import Button from '../../components/Button/Button';
import MyLink from '../../components/MyLink/MyLink'
import ErrorLogin from '../../components/ErrorLogin/ErrorLogin'

export interface IMainPageProps {
}

type MainPageProps = IMainPageProps;

let MainPage = ({ }: MainPageProps): ReactElement<MainPageProps> => {

  
  return (
    <div >
      <div className={styles.background}></div>

      <div > Главная страница </div>
    </div>
    
  );
};


/*const connected;*/

export default MainPage;
