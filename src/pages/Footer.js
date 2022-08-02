import React, { Fragment, useState } from "react";
import classNames from "classnames/bind";
import styles from "./css/footer.module.scss";
const ss = classNames.bind(styles);

const Footer = () => {
  const [dropTrigger, setDropTrigger] = useState(false);

  return (
    <Fragment>
      <div className={ss("wrapper")}>
        <div className={ss("border-yellow")} />
        <div className={ss("footer-menu1")}>
          <ul>
            <li>점포개설문의</li>
            <li>채용문의</li>
            <li>윤리신고센터</li>
            <li>이용약관</li>
            <li>개인정보처리방침</li>
            <li>영상정보처리기기운영관리방침</li>
            <li>안전보건 경영방침</li>
            <li>거래희망회사 사전등록</li>
          </ul>
        </div>
        <div className={ss("footer-menu2")}>
          <ul>
            <li>
              <img src="http://www.baskinrobbins.co.kr/assets/images/common/btn_happypoint.png" />
            </li>
            <li>
              <img src="http://www.baskinrobbins.co.kr/assets/images/common/btn_happymarket.png" />
            </li>
            <li>
              <img src="http://www.baskinrobbins.co.kr/assets/images/common/btn_spc_story.png" />
            </li>
            <li>
              <div className={ss("footer-link")}>
                <img src="http://www.baskinrobbins.co.kr/assets/images/common/btn_norton.gif" />
                <img src="http://www.baskinrobbins.co.kr/assets/images/common/btn_ccm_2.png" />
                <img src="http://www.baskinrobbins.co.kr/assets/images/common/btn_ksa.png" />
              </div>
            </li>
            <div className={ss("dropdown-wrapper")}>
              <button
                className={ss(
                  `${dropTrigger == true ? "on" : "dropdown-menu"}`
                )}
                onClick={() => {
                  setDropTrigger(!dropTrigger);
                }}
              >
                FAMILY SITE
                <ul
                  className={ss(
                    `${dropTrigger == true ? "showModal" : "dropdown-modal"}`
                  )}
                >
                  <li>7</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                  <li>6</li>
                </ul>
              </button>
            </div>
          </ul>
        </div>
        <div className={ss("footer-menu3")}>
          <img src="http://www.baskinrobbins.co.kr/assets/images/common/footer_logo.png" />
          <div className={ss("footer-info")}>
            <div className={ss("footer-info-top")}>
              <p>사업자 등록번호 : 999-99-99999</p>
              <p>비알코리아(주) 대표이사 000</p>
              <adress>부산시 수영로 267번길 47</adress>
            </div>
            <div className={ss("footer-info-bottom")}>
              <p>TEL: 010-5594-4641</p>
              <p>개인정보관리책임자 : 윤태균</p>
            </div>
            <p>Copyright ⓒ 2016 BRKOREA Company. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
