import React from "react";
import classNames from "classnames/bind";
import styles from "./css/brMenu.module.css";
import { Fragment } from "react";
import menuDrink from "./HomeImg/menuDrinku.png";
import menuCake from "./HomeImg/menuCake.png";
import menuDessrt from "./HomeImg/menuDessrt.png";
import menuIcecream from "./HomeImg/menuIcecream.png";
import menuPresent from "./HomeImg/menuPresent.png";
import logo from "./HomeImg/Logo.jpg";
import { Zoom, Fade } from "react-reveal/";
const ss = classNames.bind(styles);

const BrMenu = () => {
  return (
    <Fragment>
      <div className={ss("wrapper")}>
        <div className={ss("brMenu-title")}>
          <img src="http://www.baskinrobbins.co.kr/assets/images/main/h_menu.png" />
        </div>

        <Fade top>
          <div className={ss("brMenu", "icecream")}>
            <img src={menuIcecream} />
          </div>
        </Fade>
        <Fade right>
          <div className={ss("brMenu", "cake")}>
            <img src={menuCake} />
          </div>
        </Fade>
        <Fade left>
          <div className={ss("brMenu", "drink")}>
            <img src={menuDrink} />
          </div>
        </Fade>
        <Zoom>
          <div className={ss("brMenu", "logo")}>
            <img src={logo} />
          </div>
        </Zoom>
        <Fade right>
          <div className={ss("brMenu", "present")}>
            <img src={menuPresent} />
          </div>
        </Fade>
        <div style={{ overflow: "hidden" }}>
          <Fade bottom Big>
            <div className={ss("brMenu", "dessert")}>
              <img src={menuDessrt} />
            </div>
          </Fade>
        </div>
      </div>
    </Fragment>
  );
};

export default BrMenu;
