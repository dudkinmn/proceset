import React, { ReactElement} from "react";

import styles from "./Menu.module.css";
import history from '../../utils/history'
import { IconMenuLight, ProductName, IconUser, IconMain, IconQuit } from '../../img/icons'

export interface IMenuProps {
  setMenuVisible: any
}

type MenuProps = IMenuProps;

let Menu = ({  setMenuVisible}: MenuProps): ReactElement<MenuProps> => {
  
  return (
    <div className={styles.menu}>
      
      <div className={styles.panelLeft}>
        <div onClick={() => {setMenuVisible(false)}} className={styles.btn + " " +  styles.btnMenu}>
            <div className={styles.btnMenuIcon}><IconMenuLight /></div>
            <div className={styles.btnMenuText}><ProductName/></div>
        </div>
        <div onClick={() =>  history.push('/profile') } className={styles.btn}>
            <div className={styles.btnMenuIcon}><IconUser /></div>
            <div className={styles.btnMenuTextOth}>Профиль</div>
        </div>
        <div onClick={() => history.push('/main')} className={styles.btn}>
            <div className={styles.btnMenuIcon}><IconMain /></div>
            <div className={styles.btnMenuTextOth}>Список процессов</div>
        </div>
        <div onClick={() => {
                      history.push('/');
                      localStorage.setItem('token', "" );}} 
             className={styles.btn}>
            <div className={styles.btnMenuIcon}><IconQuit /></div>
            <div className={styles.btnMenuTextOth}>Выход из системы</div>
        </div>


  
      </div>
      <div onClick={() => {setMenuVisible(false)}} className={styles.background}/>
    </div>

  );
};


export default Menu;
