import React, { Fragment, useState } from "react";
import classNames from "classnames/bind";
import styles from "./css/serviceCenter.module.css";
import firstTab from "./img/firstTab.png";
import secondTab from "./img/secondTab.png";

const ss = classNames.bind(styles);

const ServiceCenter = () => {
  let [serviceTab, setServiceTab] = useState(true);

  const choiceTap = () => {
    setServiceTab(!serviceTab);
  };

  return (
    <Fragment>
      <div className={ss("wrapper")}>
        <div className={ss("serviceHeader")}>
          <span>
            <img src="http://www.baskinrobbins.co.kr/assets/images/customer/h_customer_center.png" />
          </span>
          <p>
            고객의 소리를 적극 경청하고 고객만족향상 활동을 지속적으로
            실천합니다.
          </p>
        </div>
        <div className={ss("serviceContent-tab")}>
          <div
            className={ss(
              "serviceContent-first",
              `${serviceTab == true ? "first-on" : ""}`
            )}
            onClick={choiceTap}
          ></div>
          <div
            className={ss(
              "serviceContent-second",
              `${serviceTab == false ? "second-on" : ""}`
            )}
            onClick={choiceTap}
          ></div>
        </div>
        {serviceTab == true ? (
          <div className={ss("serviceContent-1page")}>
            <img src={firstTab} />
          </div>
        ) : (
          <div className={ss("serviceContent-2page")}>
            <img src={secondTab} />
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default ServiceCenter;
