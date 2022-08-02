import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logo from "./img/logo_baskinrobbins.png";
import Search1 from "./img/icon_search.png";
import Search2 from "./img/btn_search_close.gif";
import classNames from "classnames/bind";
import styles from "./css/header.module.css";


const ss = classNames.bind(styles);

const Header = () => {
  let snsData = useSelector((state) => {
    return state.dataSns;
  });
  let [search, setSearch] = useState(true);
  let navigate = useNavigate();

  return (
    <Fragment>
      <div className={ss("wrapper")}>
        <div className={ss("inner")}>
          <ul className={ss("snsMenu")}>
            {snsData.map(function (a, i) {
              return (
                <li key={i}>
                  <a href={a.url}>
                    <img src={a.headerIcon} />
                  </a>
                </li>
              );
            })}
          </ul>
          <Link className={ss("logo")} to="/">
            <img src={Logo} />
          </Link>
          <ul className={ss("serviceMenu")}>
            <li onClick={()=>navigate('/serviceCenter')}>고객센터</li>
            <li onClick={()=>navigate('/contactUs')}>CONTACT US</li>
            <li onClick={()=>{setSearch(!search)}}>
              {
                search == true ? <img src={Search1} /> : <img src={Search2}/>
              }
              
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
