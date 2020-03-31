import React, { ReactElement } from "react";
import { useQuery } from "@apollo/react-hooks";
import processListQuery from "../../queries/processListQuery";
import { map } from "lodash";

import { IProcessListProps, TProcessListData } from "./MainPage.types";
import Process from "../../components/Process/Process";
import Preloader from "../../components/Preloader/Preloader";
import styles from "./MainPage.module.css";

interface IMainPageProps {}
type MainPageProps = IMainPageProps;

const MainPage = ({
  ...props
}: MainPageProps): ReactElement<IProcessListProps> => {
  const { loading, data, error } = useQuery<TProcessListData>(
    processListQuery,
    { fetchPolicy: "network-only" }
  );

  const renderMain = () => {
    if (loading) {
      return <Preloader />;
    }

    if (error) {
      return <p>Ошибка: {error.message}</p>;
    }

    return map(data?.processList, process => (
      <Process key={process.id} process={process} />
    ));
  };
  

  return (
    <div className={styles.mainPage}>
      <div className={styles.background} />
      {renderMain()}
    </div>
  );
};

export default MainPage;
