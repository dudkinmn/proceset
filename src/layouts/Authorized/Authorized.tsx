import React, { ReactElement, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useQuery } from "@apollo/react-hooks";
import { SubmissionError } from "redux-form";

import {
    TGetUserResponceData
  } from "./Authorized.types";
import Header from '../../components/Header/Header'
import ProfileForm from '../../container/ProfileForm/ProfileForm'
import MainPage from '../../container/MainPage/MainPage'
import Menu from '../../components/Menu/Menu'
import styles from './Authorized.module.css'

import getCurrentUserQuery from "../../queries/getCurrentUserQuery";

type NeedPage = 'main' | 'profile';

export interface IAuthorizedProps {
    needPage: NeedPage,
}

type AuthorizedProps = IAuthorizedProps


let Authorized = ({ needPage }: AuthorizedProps):ReactElement<AuthorizedProps> => {
    
    const [menuVisible, setMenuVisible] = useState(false);

    const { loading, data, error } = useQuery<TGetUserResponceData>(
        getCurrentUserQuery,
        {fetchPolicy: 'network-only'}
    )

    if (loading) {
        return <p>...загрузка</p>;
    }
    
    if (error) {
      return <p>Ошибка: {error.message}</p>;
    }

    localStorage.setItem('Id', data?.currentUser?.id ? data.currentUser.id.toString() : '')
    
    const renderSwitch = () => {
        switch(needPage) {
            case 'main':
                return <MainPage />;
            case 'profile':
                return <ProfileForm initialValues={{
                    firstNameField: data?.currentUser?.firstName,
                    secondNameField: data?.currentUser?.secondName,
                    emailField: data?.currentUser?.email
                }} />;
            default:
                return <Redirect to='/'/>;
        }
    }


    return (
        <div className={styles.body}>  
            {menuVisible ? <Menu setMenuVisible={setMenuVisible} /> : null}
            <Header setMenuVisible={setMenuVisible}/>
            {renderSwitch()}
        </div>
    )

}

export default Authorized





