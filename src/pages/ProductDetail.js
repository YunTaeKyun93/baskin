import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import classNames from "classnames/bind";
import styles from "./css/productDetail.module.css";
import { Col, Row, Container } from "react-bootstrap";
const ss = classNames.bind(styles);
const ProductDetail = () => {
  const params = useParams();
  const productType = params.menuname;
  const producrId = params.id;
  const data = useSelector((state) => state);
  const currentProduct = data[productType];
  const currentItem = currentProduct[producrId];
  console.log(productType);
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
            src={currentItem?.img} alt={currentItem?.name} />
            {productType === "icecream" && (
              <img
              className={ss("icecreamCorn")}
                src={process.env.PUBLIC_URL + "/img/corn.png"}
                alt="cornImg"
              />
            )}
            <button className={ss("buyBtn")}>구매하기</button>
          </div>
          <div className={ss('productSubMenu')}>

          </div>
          <div className={ss("productSubContent")}>

          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
