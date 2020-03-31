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

const Process = ({ process }: TProcessProps): ReactElement => {

  return (
    <div className={styles.process} >
        <div className={styles.processHeader}>
          <label className={styles.processName}>{process.name}</label>
          <label className={styles.linkToMap}>На карту процесса<Icon.ArrowRight/></label>
        </div>
        <div className={styles.processInfo}>
          <div className={styles.infoColumn}>
            <div className={styles.infoBlockFirst}>
              <div className={styles.infoBlockMainData}>  
                <Icon.CountRepeat />
                <span className={styles.dataNumberOfExecutions}>{process.numberOfExecutions}</span>
              </div>
              <p className={styles.footnote}>выполнено раз</p>
            </div>
          </div>
          <div className={styles.infoColumn}>
            <div className={styles.infoBlockSecondToFifth}>
              <div className={styles.infoBlockMainData}>  
                <Icon.AverageTimeWork />
                <span className={styles.dataOth}>{getHHMM(process.averageLeadTime)}</span>
              </div>
              <p className={styles.footnote}>среднее время выполнения</p>
            </div>
            <div className={styles.infoBlockSecondToFifth}>
              <div className={styles.infoBlockMainData}>  
                <Icon.AverageActiveTime />
                <span className={styles.dataOth}>{getHHMM(process.averageActiveTime) + getPercent(process.averageLeadTime, process.averageActiveTime)}</span>
                </div>
              <p className={styles.footnote}>среднее активное время</p>
              </div>
            </div>
          <div className={styles.infoColumn}>
            <div className={styles.infoBlockSecondToFifth}>
              <div className={styles.infoBlockMainData}>  
                <Icon.CountWorker />
                <span className={styles.dataOth}>{getNumberWithText(process.employeesInvolvedProcess, "сотрудник")}</span>
              </div>
              <p className={styles.footnote}>участвует в процессе</p>
            </div>
            <div className={styles.infoBlockSecondToFifth}>
              <div className={styles.infoBlockMainData}>  
                <Icon.CountScenaries />
                <span className={styles.dataOth}>{getNumberWithText(process.numberOfScenarios, "сценарий")}</span>
              </div>
              <p className={styles.footnote}>в процессе</p>
            </div>
          </div>
          <div className={styles.infoColumn}>
            <div className={styles.infoTime}>
              <span className={styles.noteTime}>Начало</span>
              <span className={styles.dataTime}>{getDDMMYYYY(process.start)}</span>
            </div>
            <div className={styles.infoTime}>
              <span className={styles.noteTime}>Окончание</span>
              <span className={styles.dataTime}>{getDDMMYYYY(process.end)}</span>
            </div>
            <div className={styles.infoTime}>
              <span className={styles.noteTime}>Загрузка</span>
              <span className={styles.dataTime}>{getDDMMYYYY(process.loading)}</span>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Process;