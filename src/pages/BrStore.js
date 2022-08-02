import React, { Fragment } from "react";
import classNames from "classnames/bind";
import styles from "./css/brStore.module.css";
const ss = classNames.bind(styles);

const BrStore = () => {
  return (
    <Fragment>
      <div className={ss("wrapper")}>
        <div className={ss("leftContent")}>
          <div className={ss("leftContent-title")}>
            <div className={ss("leftContent-logo")}></div>
          </div>
          <div className={ss("leftContent-main")}></div>
        </div>
        <div className={ss("rightContent")}>
          <div className={ss("rightContent-title")}>
            <div className={ss("rightContent-logo")}></div>
          </div>
          <div className={ss("rightContent-main")}></div>
        </div>
      </div>
    </Fragment>
  );
};

export default BrStore;
