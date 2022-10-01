import React from "react";
import { useParams,useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import classNames from "classnames/bind";
import styles from "./css/productDetail.module.css";
import { Col, Row, Container } from "react-bootstrap";
import SnsMenu from "./../components/SnsMenu";
const ss = classNames.bind(styles);
const ProductDetail = () => {
  const params = useParams();
  const productType = params.menuname;
  const producrId = params.id;
  const data = useSelector((state) => state);
  const currentProduct = data[productType];
  const currentItem = currentProduct[producrId];

  const navigate = useNavigate();
  const goBack =()=>{
    window.scrollTo(0,0)
    navigate(-1)
  }
  return (
    <Container className={ss("wrapper")}>
      <Row>
        <Col>
          <div className={ss("productContent")}>
            <p>{currentItem?.engName}</p>
            <h2>{currentItem?.name}</h2>
            <p>{currentItem?.comment}</p>
            <img
              className={ss("itemImg")}
              src={currentItem?.img}
              alt={currentItem?.name}
            />
            {productType === "icecream" && (
              <img
                className={ss("icecreamCorn")}
                src={process.env.PUBLIC_URL + "/img/corn.png"}
                alt="cornImg"
              />
            )}
            <button className={ss("buyBtn")}>
              <a
                target="_blank"
                href="https://www.happyconstore.com/brand/main.do?brandSeq=1474297546090049"
                rel="noreferrer"
              >
                구매하기
              </a>
            </button>
          </div>
          <div className={ss("productSubMenu")}>
            <SnsMenu />
          </div>
          <div className={ss("productSubContent")}>
            {productType === 'icecream' && <img src={process.env.PUBLIC_URL + "/img/icecreamSize.png"} /> }
            
            <button onClick={()=>goBack()}>목록</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
