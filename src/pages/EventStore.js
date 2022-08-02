import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import storeEvent from "../data/storerEvent";
import classNames from "classnames/bind";
import styles from "./css/eventStore.scss";


const ss = classNames.bind(styles);

const EventStore = () => {
  const [eventStore, setEventStore] = useState(storeEvent);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    // 슬라이드 변경 시간
    speed: 1500,
    // 자동 재생 유지 시간
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Fragment>
      <div className={ss("wrapper")}>
        <div className={ss("eventStore-Title")}>
          <div className="logoImg"></div>
        </div>
        <div className={ss("cardWrapper")}>
          <Slider {...settings}>
            {eventStore.map((a,i) => {
              return (
                <div className={ss("eventCard")} key={i} >
                  <img src={a.img} className={ss("eventBanner")} />
                  <img src={a.event} />
                  <span style={{fontSize:'15px'}} >{a.name}</span>
                  <p style={{fontSize:'12px',color:'gray'}}>{a.eventPeriod}</p>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </Fragment>
  );
};

export default EventStore;
