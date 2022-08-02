import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { FaCircle } from "react-icons/fa";
import classNames from "classnames/bind";
import styles from "./css/eventBanner.scss";
import mainBg from "./HomeImg/first.jpg";
import bannerEvent from "../data/bannerEvent";
const ss = classNames.bind(styles);

const PrevArrowBtn = (props) => {
  const { className, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "white", fontSize: "50px" }} />
    </div>
  );
};
const NextArrowBtn = (props) => {
  const { className, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "white", fontSize: "50px" }} />
    </div>
  );
};
const EventBanner = () => {
  const [scroll, setScroll] = useState(0);
  const [eventBanner, setEventBanner] = useState(bannerEvent);

  const updateScroll = () => {
    setScroll(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    // 슬라이드 변경 시간
    speed: 5000,
    // 자동 재생 유지 시간
    autoplaySpeed: 5000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrowBtn />,
    prevArrow: <PrevArrowBtn />,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className={ss("dot-custom")}>
        <FaCircle />
      </div>
    ),
    dotsClass: "slick-dots custom-indicator"
  };
  return (
    <Fragment>
      <div className={ss("wrapper")}>
        {scroll < 101 ? (
          <img
            src={mainBg}
            className={ss(`${scroll < 100 ? "original" : "change"}`)}
          />
        ) : (
          <div>
            <div className={ss("mainBanner")}></div>
            <Slider {...settings}>
              {eventBanner.map((a, i) => {
                return (
                  <div key={i}>
                    <img src={a.img} className={ss("eventBanner")} />
                  </div>
                );
              })}
            </Slider>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default EventBanner;
