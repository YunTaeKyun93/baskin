import React, { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames/bind";
import styles from "./css/brSns.module.css";
import { Row, Col, Container } from "react-bootstrap";
const ss = classNames.bind(styles);

const BrSns = () => {
  let snsData = useSelector((state) => state.dataSns);

  return (
    <Fragment>
      <div className={ss("snsHeader")}>
        <div className={ss("snsHeader-title")}>
          <div className={ss("snsHeader-logo")}></div>
        </div>
        <ul className={ss("snsHeader-icon")}>
          {snsData.map((a, i) => {
            return (
              <li key={i}>
                <a href={a.url} target="_blank">
                  <img src={a.icon} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export default BrSns;
