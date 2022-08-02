import React, { Fragment, useState } from "react";
import Point from "./img/img_happypoint_app.jpg";
import MonthEvent from "./img/img_monthly_fom_220630.png";
import classNames from "classnames/bind";
import styles from "./css/navi.module.css";
const ss = classNames.bind(styles);
const Navi = () => {
  let [close, setClose] = useState(false);

  return (
    <Fragment>
      <div className={ss("wrapper")}>
        <div className={ss("navMenu")}>
          <ul className={ss("userMenu")}>
            <li>LOGIN</li>
            <li>JOIN</li>
          </ul>
          <ul
            className={ss("navInner")}
            onMouseEnter={() => {
              setClose(true);
            }}
            onMouseLeave={() => {
              setClose(false);
            }}
          >
            <li>FLAVOR OF THE MONTH</li>
            <li>MENU</li>
            <li>
              영양 성분 및
              <br />
            </li>
            <li>EVENT</li>
            <li>STORE</li>
            <li>ABOUT</li>
          </ul>
        </div>
      </div>
      <div
        className={ss(`${close == true ? "on" : "modal"}`)}
        onMouseOver={() => setClose(true)}
        onMouseLeave={() => setClose(false)}
      >
        <div>
          <img src={Point} />
        </div>
        <ul className={ss("navInner1")}>
          <li>
            <img src={MonthEvent} />
          </li>
          <li>
            <ul className={ss("menu" ,"product")}>
              <li>아이스크림</li>
              <li>아이스크림케이크</li>
              <li>음료</li>
              <li>디저트</li>
            </ul>
          </li>
          <li>
            <ul className={ss("menu",'nutrient')}>
              <li>아이스크림</li>
              <li>음료</li>
            </ul>
          </li>
          <li>
            <ul className={ss("menu", 'event')}>
              <li>진행중이벤트</li>
              <li>당첨자발표</li>
            </ul>
          </li>
          <li>
            <ul className={ss("menu" , 'store')}>
              <li>매장찾기</li>
              <li>고객센터</li>
              <li>단체주문</li>
            </ul>
          </li>
          <li>
            <ul className={ss("menu")}>
              <li>공지사항</li>
              <li>보도자료</li>
              <li>CONTACT US</li>
            </ul>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Navi;
