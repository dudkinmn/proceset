import React,  { ReactElement } from "react";
import { useQuery } from "@apollo/react-hooks";
import processListQuery from "../../queries/processListQuery";
import { map } from "lodash";

import {
  IProcessListProps,
  TProcessListData
} from "./MainPage.types";
import Process from '../../components/Process/Process'
import styles from "./MainPage.module.css";


export interface IMainPageProps {}
type MainPageProps = IMainPageProps;

 const MainPage = ({ ...props }: MainPageProps): ReactElement<IProcessListProps> => {

  const { loading, data, error } = useQuery<TProcessListData>(
    processListQuery,
    { fetchPolicy: "network-only" }
  );
   
  if (loading) {
    return <p>...загрузка</p>;
  }

  if (error) {
    return <p>Ошибка: {error.message}</p>;
  }
  console.log(data);
   
   
  
  return (
    <div className={styles.mainPage} >
      <div className={styles.background}/>
      {map(data?.processList, process => (
        <Process key={process.id} process={process}/>
      ))}
    </div>
    
  );
};


export default MainPage;


