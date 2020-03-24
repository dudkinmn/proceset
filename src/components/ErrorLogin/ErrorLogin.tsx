import React from "react";
import { ReactElement } from "react";
import { Link } from 'react-router-dom';
import styles from "./ErrorLogin.module.css";

export interface IErrorLoginProps {

}

type ErrorLoginProps = IErrorLoginProps;

let ErrorLogin = ({}: ErrorLoginProps): ReactElement<ErrorLoginProps> => {
    return (
    <div className={styles.error}>
        <svg className={styles.errorIcon} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" fill="white" fillOpacity="0.01"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M44.7091 39.7497L25.2236 5.99973C24.4538 4.66635 22.5293 4.66635 21.7595 5.99973L2.27387 39.7497C1.50409 41.0831 2.46637 42.7497 4.00592 42.7497H42.9771C44.5167 42.7497 45.4789 41.0831 44.7091 39.7497ZM26.9556 4.99973C25.416 2.3331 21.567 2.3331 20.0274 4.99973L0.541873 38.7497C-0.997739 41.4164 0.926761 44.7497 4.00592 44.7497H42.9771C46.0563 44.7497 47.9808 41.4164 46.4412 38.7497L26.9556 4.99973ZM25.9915 36.1596C25.9915 37.1759 25.096 37.9997 23.9915 37.9997C22.8869 37.9997 21.9915 37.1759 21.9915 36.1596C21.9915 35.1435 22.8869 34.3197 23.9915 34.3197C25.096 34.3197 25.9915 35.1435 25.9915 36.1596ZM23.9915 14.9997C22.887 14.9997 21.9915 15.8951 21.9915 16.9997V30.4797C21.9915 31.5843 22.887 32.4797 23.9915 32.4797C25.0961 32.4797 25.9915 31.5843 25.9915 30.4797V16.9997C25.9915 15.8951 25.0961 14.9997 23.9915 14.9997Z" fill="#EE4141"/>
            </svg>
        Сообщение об ошибке!
    </div>
  );
};


export default ErrorLogin;
