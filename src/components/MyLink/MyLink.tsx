import React from "react";
import { ReactElement } from "react";
import { Link } from 'react-router-dom';
import styles from "./MyLink.module.css";

export interface IMyLinkProps {
    to: string
    linkText: string;
}

type MyLinkProps = IMyLinkProps;

let MyLink = ({to, linkText}: MyLinkProps): ReactElement<MyLinkProps> => {
  return (
    <Link className={styles.link} to={to}><span className={styles.link} >{linkText}</span></Link>
  );
};


export default MyLink;
