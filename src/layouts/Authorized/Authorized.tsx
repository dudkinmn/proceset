import React, { ReactElement, useState } from 'react';
import { Redirect } from 'react-router-dom';

import Header from '../../components/Header/Header'
import ProfileForm from '../../container/ProfileForm/ProfileForm'
import MainPage from '../../container/MainPage/MainPage'
import Menu from '../../components/Menu/Menu'

type NeedPage = 'main' | 'profile';

export interface IAuthorizedProps {
    needPage: NeedPage,
}

type AuthorizedProps = IAuthorizedProps


let Authorized = ({ needPage }: AuthorizedProps):ReactElement<AuthorizedProps> => {
    
    let [menuVisible, setMenuVisible] = useState(false);

    const renderSwitch = () => {
        switch(needPage) {
            case 'main':
                return <MainPage />;
            case 'profile':
                return <ProfileForm initialValues={{
                    firstNameField: "ewfwefwefwef",
                    secondNameField: 'wefwefwef'
                }} />;
            default:
                return <Redirect to='/'/>;
        }
    }

    return (
        <>
            {menuVisible ? <Menu setMenuVisible={setMenuVisible} /> : null}
            {<Header setMenuVisible={setMenuVisible}/>}
            {renderSwitch()}
        </>
    )

}

export default Authorized
