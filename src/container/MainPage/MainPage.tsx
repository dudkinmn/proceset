import React,  { ReactElement }  from "react";

import styles from "./MainPage.module.css";

export interface IMainPageProps {
}

type MainPageProps = IMainPageProps;

let MainPage = ({ ...props }: MainPageProps): ReactElement<MainPageProps> => {

  
  return (
    <div >
      <div className={styles.background}></div>

      <div > Главная страница </div>
    </div>
    
  );
};


/*const connected;*/

export default MainPage;
