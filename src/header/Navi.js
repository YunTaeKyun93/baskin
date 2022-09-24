import React, { Fragment, useState } from "react";
import Point from "./img/img_happypoint_app.jpg";
import MonthEvent from "./img/img_monthly_fom_220630.png";
import classNames from "classnames/bind";
import styles from "./css/navi.module.css";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeMenu } from "../store";
const ss = classNames.bind(styles);
const Navi = () => {
  let [close, setClose] = useState(false);
  let navigate = useNavigate();
  const goMenuPage = () => {};
  const dispatch = useDispatch();
  const clickMenu = (value) => {
    dispatch(changeMenu(value));
  };
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
        className={ss(`${close === true ? "on" : "modal"}`)}
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
            <ul className={ss("menu", "product")}>
              <li onClick={() => clickMenu("icecream")} >
                <Link to="menupage/icecream" className={ss("menuList")}>
                  아이스크림
                </Link>
              </li>
              <li onClick={() => clickMenu("icecreamcake")} >
                <Link to="menupage/icecreamcake" className={ss("menuList")}>
                  아이스크림케이크
                </Link>
              </li>
              <li onClick={() => clickMenu("beverage")} >
                <Link to="menupage/drink" className={ss("menuList")}>
                  음료
                </Link>
              </li>
              <li onClick={() => clickMenu("dessert")} >
                <Link to="menupage/dessert" className={ss("menuList")}>
                  디저트
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <ul className={ss("menu", "nutrient")}>
              <li>아이스크림</li>
              <li>음료</li>
            </ul>
          </li>
          <li>
            <ul className={ss("menu", "event")}>
              <li>진행중이벤트</li>
              <li>당첨자발표</li>
            </ul>
          </li>
          <li>
            <ul className={ss("menu", "store")}>
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
