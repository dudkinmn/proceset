import React, { ReactElement} from "react";
import { isString } from 'lodash'

import {
    TProcessProps
} from './Process.types'
import styles from "./Process.module.css";
import * as Icon from '../../img/icons'




let Process = ({ process }: TProcessProps): ReactElement => {
  

  return (
    <div className={styles.process} >
        <div className={styles.processHeader}>
          <label className={styles.processName}>{process.name}</label>
          <label className={styles.linkToMap}>На карту процесса<Icon.ArrowRight/></label>
        </div>
        <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
  );
};


export default Process;