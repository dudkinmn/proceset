import React, { ReactElement} from "react";
import { isString } from 'lodash'

import {
    TProcessProps
} from './Process.types'
import {
  getHHMM,
  getPercent,
  getDDMMYYYY,
  getNumberWithText
} from './Process.module'
import styles from "./Process.module.css";
import * as Icon from '../../img/icons'

let Process = ({ process }: TProcessProps): ReactElement => {

  return (
    <div className={styles.process} >
        <div className={styles.processHeader}>
          <label className={styles.processName}>{process.name}</label>
          <label className={styles.linkToMap}>На карту процесса<Icon.ArrowRight/></label>
        </div>
        <div className={styles.processInfo}>
          <div className={styles.infoColumn}>
            <div className={styles.infoBlock}>
              <Icon.CountRepeat />
              <span>{process.numberOfExecutions}</span>
              <p>выполнено раз</p>
            </div>
          </div>
          <div className={styles.infoColumn}>
            <div className={styles.infoBlock}>
              <Icon.AverageTimeWork />
              <span>{getHHMM(process.averageLeadTime)}</span>
              <p>среднее время выполнения</p>
            </div>
            <div className={styles.infoBlock}>
              <Icon.AverageActiveTime />
              <span>{getHHMM(process.averageActiveTime) + getPercent(process.averageLeadTime, process.averageActiveTime)}</span>
              <p>среднее активное время</p>
            </div>
          </div>
          <div className={styles.infoColumn}>
          <div className={styles.infoBlock}>
              <Icon.CountWorker />
              <span>{getNumberWithText(process.employeesInvolvedProcess, "сотрудник")}</span>
              <p>участвует в процессе</p>
            </div>
            <div className={styles.infoBlock}>
              <Icon.CountScenaries />
              <span>{getNumberWithText(process.numberOfScenarios, "сценарий")}</span>
              <p>в процессе</p>
            </div>
          </div>
          <div className={styles.infoColumn}>
            <div>
              <span>Начало</span>
              <span>{getDDMMYYYY(process.start)}</span>
            </div>
            <div>
              <span>Окончание</span>
              <span>{getDDMMYYYY(process.end)}</span>
            </div>
            <div>
              <span>Загрузка</span>
              <span>{getDDMMYYYY(process.loading)}</span>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Process;