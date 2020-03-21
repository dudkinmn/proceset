import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { ReactElement } from "react";
import Header from '../../components/Header/Header'
import Profile from '../../container/ProfileForm/ProfileForm'

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
                return <Profile />;
            case 'profile':
                return <Profile />;
            default:
                return <Redirect to='/'/>;

        }
    }

    return (
        <>
            <Header/>
            {renderSwitch()}
        </>

    )

}


export default Authorized
