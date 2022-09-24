import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./css/iceCream.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
const ss = classNames.bind(styles);
const MenuPage = () => {
  const [menuName, setMenuName] = useState();
  const [title, setTitle] = useState("");
  const data = useSelector((state) => state);
  const params = useParams();

  useEffect(() => {
    switch (data.currentMenu.name) {
      case "icecream":
        setTitle("A");
        break;
      case "icecreamcake":
        setTitle("B");
        break;
      case "beverage":
        setTitle("C");
        break;
      case "dessert":
        setTitle("E");
        break;
      default:
        setTitle("");
    }
  }, [data]);
  return (
    <>
      <div className={ss("wrapper")}>
        <div
          className={ss("mainBg")}
          style={{
            backgroundImage:
              "url(" +
              `http://www.baskinrobbins.co.kr/assets/images/menu/bg_${data.currentMenu.name}_menu.gif` +
              ")",
            backgroundPosition: "center"
          }}
        ></div>
        <div className={ss("iceCream-header")}>
          <span>
            <img
              src={`http://www.baskinrobbins.co.kr/assets/images/menu/h_title_${title}.png`}
              alt={menuName}
            />
          </span>
        </div>
        <div className={ss("iceCream-content")}>
          <Container>
            <Container>
              <Row>
                {data[params.menuname].map((item, i) => {
                  return (
                    <Col lg={3} md={6} sm={12} key={i}>
                      <ProductCard item={item} />
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </Container>
        </div>
      </div>
    </>
  );
};

export default MenuPage;

//
