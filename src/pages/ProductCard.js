import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames/bind";
import styles from "./css/productCard.module.css";
import { Container, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ss = classNames.bind(styles);

const ProductCard = ({ item }) => {
  let [more, setMore] = useState(false);
  let [clickIndex, setClickIndex] = useState(0);
  let navigate = useNavigate();

  return (
    <Fragment>
      <div className={ss("productCard")} onMouseLeave={()=>setMore(false)}>
        <p>{item?.name}</p>
        {item.hash.length > 2 ? (
          <div className={ss("productCard-hash")}>
            <span>{"#" + item?.hash[0] + " "}</span>
            <span>{"#" + item?.hash[1] + " "}</span>
            {item.hash.length >= 3 && (
              <div
                className={ss("productCard-more")}
                onClick={() => {
                  setMore(!more);
                }}
              ></div>
            )}
          </div>
        ) : (
          <span>{"#" + item?.hash[0]}</span>
        )}
        <div className={ss("productCard-btn")}>
          <a
            target="_blank"
            href="https://www.happyconstore.com/brand/main.do?brandSeq=1474297546090049"
          >
            구매
          </a>
        </div>
        <img src={item?.img} alt={item.name} />
        <div
          className={ss(`${more === true ? "productCard-hash-more" : "close"}`)}
        >
          <div className={ss("productCard-HashContent")}>
            {item?.hash.map((hashname, i) => (
              <ul>{more && <li># {hashname}</li>}</ul>
            ))}
            <div
              className={ss(`${more === true ? "productCard-close" : "close"}`)}
              onClick={() => setMore(!more)}
            >
              -
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductCard;
