import React, { ReactElement } from "react";
import { useDispatch } from "react-redux";

import history from "../../utils/history";
import { actionSetUser } from "../../store/index.reducer";
import {
  IconMenuLight,
  ProductName,
  IconUser,
  IconMain,
  IconQuit
} from "../../img/icons";
import styles from "./Menu.module.css";

export interface IMenuProps {
  setMenuVisible: any;
}

type MenuProps = IMenuProps;

let Menu = ({ setMenuVisible }: MenuProps): ReactElement<MenuProps> => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(actionSetUser({}));
    localStorage.clear();
    history.push("/");
  };

  return (
    <div className={styles.menu}>
      <div className={styles.panelLeft}>
        <div
          onClick={() => {
            setMenuVisible(false);
          }}
          className={styles.btn + " " + styles.btnMenu}
        >
          <div className={styles.btnMenuIcon}>
            <IconMenuLight />
          </div>
          <div className={styles.btnMenuText}>
            <ProductName />
          </div>
        </div>
        <div onClick={() => history.push("/profile")} className={styles.btn}>
          <div className={styles.btnMenuIcon}>
            <IconUser />
          </div>
          <div className={styles.btnMenuTextOth}>Профиль</div>
        </div>
        <div onClick={() => history.push("/main")} className={styles.btn}>
          <div className={styles.btnMenuIcon}>
            <IconMain />
          </div>
          <div className={styles.btnMenuTextOth}>Список процессов</div>
        </div>
        <div onClick={logOut} className={styles.btn}>
          <div className={styles.btnMenuIcon}>
            <IconQuit />
          </div>
          <div className={styles.btnMenuTextOth}>Выход из системы</div>
        </div>
      </div>
      <div
        onClick={() => {
          setMenuVisible(false);
        }}
        className={styles.background}
      />
    </div>
  );
};

export default Menu;
