import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCard from "./ProductCard";

import classNames from "classnames/bind";
import styles from "./css/iceCream.module.css";

const ss = classNames.bind(styles);
const IcecreamCake = () => {
  let iceCreamRank = useSelector((state) => state.iceCreamRank);
  let iceCreamData = useSelector((state) => state.iceCreamData);

  return (
    <Fragment>
      <div className={ss("wrapper")}>
        <div className={ss("mainBg")}></div>
        <div className={ss("bestIceCream")}>
          <h3 className={ss("bestIceCream-title")}>
            <img
              src="http://www.baskinrobbins.co.kr/assets/images/menu/h_monthly_best_icecream.png"
              alt="bestIceCream"
            />
          </h3>
          <div className={ss("bestIceCream-rankWrap")}>
            <div className={ss("bestIceCream-slider")}>
              <div className={ss("left")}></div>
              <div className={ss("right")}></div>
              <ul>
                {iceCreamRank.map((a, i) => {
                  return (
                    <li className={ss("bestIceCream-item")}>
                      <img src={a.image} />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className={ss("iceCream-header")}>
          <span>
            <img src="http://www.baskinrobbins.co.kr/assets/images/menu/h_title_A.png" />
          </span>
        </div>
        <div className={ss("iceCream-content")}>
          <Container>
            <Container>
              <Row>
                {iceCreamData.map((item, i) => {
                  return (
                    <Col lg={3} md={6} sm={12}>
                      <ProductCard item={item} key={i} />
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </Container>
        </div>
      </div>
    </Fragment>
  );
};

export default IcecreamCake;

