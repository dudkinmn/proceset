import React from "react";
import { Route, Redirect, Link } from "react-router-dom";
import { ReactElement } from "react";
import styles from "./ProfileForm.module.css";

import TextField from '../../components/TextField/TextField';
import Button from '../../components/Button/Button';
import MyLink from '../../components/MyLink/MyLink'
import ErrorLogin from '../../components/ErrorLogin/ErrorLogin'

export interface IProfileFormProps {
}

type ProfileFormProps = IProfileFormProps;

let ProfileForm = ({ }: ProfileFormProps): ReactElement<ProfileFormProps> => {

  
  return (
    <>
      <div id='background'></div>

      <div className="user-header">
          <h1 className='user-name'>Борис Годунов. Редактирование </h1>
          <button className='save-button'>Сохранить </button>
      </div>
      
      {/*<div className="user-data">
          <div className="input-blok">
              <label for="uname">Имя</label>
              <input type="text" id="uname" name="name"
                  placeholder="Борис"
                  size="40"/>
          </div>
          <div className="input-blok">
              <label for="usurname">Фамилия</label>
              <input type="text" id="usurname" name="surname"
                  placeholder="Годунов"
                  size="40"/>
          </div>
          <div className="input-blok">
              <label for="uemail">Электронная почта</label>
              <input type="text" id="uemail" name="email"
                  placeholder="qwerty@yandex.ru.ru"
                  size="40"/>
          </div>
          <div className="input-blok">
              <label for="unewpass">Новый пароль</label>
              <input type="password" id="unewpass" name="newpass"
                  placeholder="********"
                  size="40"/>
          </div>
          <div className="input-blok">
              <label for="ureppass">Повторите пароль</label>
              <input type="password" id="ureppass" name="reppass"
                  placeholder="********"
                  size="40"/>
          </div>
  </div>*/}
    </>
    
  );
};

const mapStateToProps = (state: any) => {
  return {};
};

/*const connected;*/

export default ProfileForm;
