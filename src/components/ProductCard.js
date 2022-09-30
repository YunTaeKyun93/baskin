import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames/bind";
import styles from "./css/productCard.module.css";
import { Container, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ss = classNames.bind(styles);

const ProductCard = ({ item }) => {
  let [more, setMore] = useState(false);
  let data = useSelector((state) => state);
  let [clickIndex, setClickIndex] = useState(0);
  let navigate = useNavigate();
  const goToDetailPage = () => {
    navigate(`/menupage/${data.currentMenu.name}/${item?.id}`);
  };

  return (
    <Fragment>
      <div
        className={ss("productCard")}
        onMouseLeave={() => setMore(false)}
        onClick={(e) => goToDetailPage()}
      >
        <p>{item?.name}</p>
        {item.hash.length > 2 ? (
          <div className={ss("productCard-hash")}>
            <span>{"#" + item?.hash[0] + " "}</span>
            <span>{"#" + item?.hash[1] + " "}</span>
            {item.hash.length >= 3 && (
              <div
                className={ss("productCard-more")}
                onClick={(e) => {
                  e.stopPropagation();
                  setMore(!more);
                }}
              ></div>
            )}
          </div>
        ) : (
          <div className={ss("productCard-hash")}>
            {item?.hash.map((a, i) => (
              <span key={i}>{"#" + item?.hash[i]}</span>
            ))}
          </div>
        )}
        <div className={ss("productCard-btn")}>
          <a
            target="_blank"
            href="https://www.happyconstore.com/brand/main.do?brandSeq=1474297546090049"
            rel="noreferrer"
          >
            구매
          </a>
        </div>
        {data.currentMenu.name === "icecream" ? (
          <div className={ss("productCard-icecream")}>
            <img src={item?.img} alt={item.name} width={"180px"} />
            <img
              src={process.env.PUBLIC_URL + "/img/corn.png"}
              alt="cornImg"
              width={"60px"}
            />
          </div>
        ) : (
          <img src={item?.img} alt={item.name} />
        )}

        <div
          className={ss(`${more === true ? "productCard-hash-more" : "close"}`)}
        >
          <div className={ss("productCard-HashContent")}>
            {item?.hash.map((hashname, i) => (
              <ul>{more && <li key={item?.id}># {hashname}</li>}</ul>
            ))}
            <div
              className={ss(`${more === true ? "productCard-close" : "close"}`)}
              onClick={(e) => {
                e.stopPropagation();
                setMore(!more);
              }}
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
