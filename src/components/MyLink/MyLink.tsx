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
      <Link to={to}><a href='#'>{linkText}</a></Link>
  );
};


export default MyLink;
