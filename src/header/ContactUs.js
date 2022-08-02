import React, { Fragment, useState } from "react";
import classNames from "classnames/bind";
import styles from "./css/contactUs.module.css";

import contactUsPage from "./img/contactUsPage.png";

const ss = classNames.bind(styles);

const ContactUs = () => {
  return (
    <Fragment>
      <div className={ss("wrapper")}>
        <div className={ss("contactHeader")}>
          <span>
            <img src="http://www.baskinrobbins.co.kr/assets/images/about/contact_title_1.gif" />
          </span>
          <p>비알코리아(주)에 방문해 주셔서 진심으로 감사드립니다.</p>
        </div>
        <div className={ss("contactContent")}>
            <img src={contactUsPage}/>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactUs;
