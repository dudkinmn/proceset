import React, { ReactElement } from "react";

import styles from "./Preloader.module.css";

let Preloader = (): ReactElement => {
  return (
      <div className={styles.preloader}>
          <div className={styles.preloaderImageAnimate}></div>
    </div>
  );
};

export default Preloader;
