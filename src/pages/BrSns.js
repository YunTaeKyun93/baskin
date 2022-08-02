import React, { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames/bind";
import styles from "./css/brSns.module.css";
import { Row, Col, Container } from "react-bootstrap";
const ss = classNames.bind(styles);

const BrSns = () => {
  let snsData = useSelector((state) => state.dataSns);
  let snsPhoto = useSelector((state) => state.snsPhoto);

  const [randomNum1, setRandomNum1] = useState([]);
  const [randomNum2, setRandomNum2] = useState([]);
  const [randomNum3, setRandomNum3] = useState([]);

  const makeIndex1 = () => {
    let i = 0;
    let iNumber = [];
    let rNumber = 0;
    let numbers = [];

    for (i = 0; i < 43; i++) {
      numbers.push(i);
    }
    for (i = 0; i < 43; i++) {
      rNumber = Math.floor(Math.random() * 43); // 1-43까지 의 랜덤수
      numbers[i] = numbers[rNumber]; //
      // a = numbers[i];  // numbers배열의 인덱스 번호
      // numbers[rNumber] = a;
    }
    for (i = 0; i < 4; i++) {
      iNumber.push(numbers[i]);
    }
    setRandomNum1(iNumber);
  };
  const makeIndex2 = () => {
    let i = 0;
    let iNumber = [];
    let rNumber = 0;
    let numbers = [];

    for (i = 0; i < 43; i++) {
      numbers.push(i);
    }
    for (i = 0; i < 43; i++) {
      rNumber = Math.floor(Math.random() * 43); // 1-43까지 의 랜덤수
      numbers[i] = numbers[rNumber]; //
      // a = numbers[i];  // numbers배열의 인덱스 번호
      // numbers[rNumber] = a;
    }
    for (i = 0; i < 4; i++) {
      iNumber.push(numbers[i]);
    }
    setRandomNum2(iNumber);
  };
  const makeIndex3 = () => {
    let i = 0;
    let iNumber = [];
    let rNumber = 0;
    let numbers = [];

    for (i = 0; i < 43; i++) {
      numbers.push(i);
    }
    for (i = 0; i < 43; i++) {
      rNumber = Math.floor(Math.random() * 43); // 1-43까지 의 랜덤수
      numbers[i] = numbers[rNumber]; //
      // a = numbers[i];  // numbers배열의 인덱스 번호
      // numbers[rNumber] = a;
    }
    for (i = 0; i < 4; i++) {
      iNumber.push(numbers[i]);
    }
    setRandomNum3(iNumber);
  };
  useEffect(() => {
    makeIndex1();
    makeIndex2();
    makeIndex3();
    let timer = setInterval(() => {}, 10000);
  }, []);

  return (
    <Fragment>
      <div className={ss("wrapper")}>
        <div className={ss("snsHeader")}>
          <div className={ss("snsHeader-title")}>
            <div className={ss("snsHeader-logo")}></div>
          </div>
          <ul className={ss("snsHeader-icon")}>
            {snsData.map((a, i) => {
              return (
                <li key={i}>
                  <a>
                    <img src={a.icon} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={ss("snsGallery")}>
          <div className={ss("snsGallery-title")}>
            <div className={ss("snsGallery-logo")}></div>
          </div>
          <div className={ss("snsGallery-photo")}>
            <Container className={ss("snsGallery-table")}>
              <Row className={ss("snsGallery-row")}>
                {randomNum1.map((a, i) => {
                  return (
                    <Col className={ss("snsGallery-col")} sm={3} key={i}>
                      <img src={snsPhoto[a].image} />
                    </Col>
                  );
                })}
              </Row>
              <Row className={ss("snsGallery-row")}>
                {randomNum2.map((a, i) => {
                  return (
                    <Col className={ss("snsGallery-col")} sm={3} key={i}>
                      <img src={snsPhoto[a].image} />
                    </Col>
                  );
                })}
              </Row>
              <Row className={ss("snsGallery-row")}>
                {randomNum3.map((a, i) => {
                  return (
                    <Col className={ss("snsGallery-col")} sm={3} key={i}>
                      <img src={snsPhoto[a].image} />
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BrSns;
