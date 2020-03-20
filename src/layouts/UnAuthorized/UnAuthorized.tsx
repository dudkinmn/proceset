import React from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import { ReactElement } from "react";
import LoginForm from '../../components/LoginForm/LoginForm';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import backStyle from './UnAuthorized.style'


export interface IUnAuthorizedProps {
    isRegister: boolean
    logIn: any
}

type UnAuthorizedProps = IUnAuthorizedProps


let UnAuthorized = ({ isRegister, logIn}: UnAuthorizedProps):ReactElement<UnAuthorizedProps> => {
    
    return (
        <>
            <div className={backStyle}/>
            {isRegister ? <RegisterForm /> : <LoginForm logIn={logIn} />}
        </>
    )
}



export default UnAuthorized
