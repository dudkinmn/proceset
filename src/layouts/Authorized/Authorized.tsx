import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { ReactElement } from "react";

type NeedPage = 'main' | 'profile';

export interface IAuthorizedProps {
    needPage: NeedPage,
}

type AuthorizedProps = IAuthorizedProps


let Authorized = ({ needPage }: AuthorizedProps):ReactElement<AuthorizedProps> => {
    
    console.log("esrgrg");

    let renderSwitch = () => {
        switch(needPage) {
            case 'main':
                return <div>Главная</div>;
            case 'profile':
                return <div>Профиль</div>;
            default:
                return <Redirect to='/'/>;

        }
    }

    return (
        <>
            <div>Хедер</div>
            {renderSwitch() }
        </>

    )

}


export default Authorized
