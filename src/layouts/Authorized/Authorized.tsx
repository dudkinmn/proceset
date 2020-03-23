import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { ReactElement, useState } from "react";
import Header from '../../components/Header/Header'
import Profile from '../../container/ProfileForm/ProfileForm'
import Menu from '../../components/Menu/Menu'

type NeedPage = 'main' | 'profile';

export interface IAuthorizedProps {
    needPage: NeedPage,
}

type AuthorizedProps = IAuthorizedProps


let Authorized = ({ needPage }: AuthorizedProps):ReactElement<AuthorizedProps> => {
    
    let [menuVisible, setMenuVisible] = useState(false);
    console.log("setMenuVisible=" + menuVisible);

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
            { menuVisible ? <Menu setMenuVisible={setMenuVisible} /> : null}
            <Header setMenuVisible={setMenuVisible}/>
            {renderSwitch()}
        </>

    )

}


export default Authorized
