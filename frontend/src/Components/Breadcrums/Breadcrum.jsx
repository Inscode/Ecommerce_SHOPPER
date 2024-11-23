import React from "react";
import "./Breadcrum.css";
import right_arrow from "../Assets/chevron-right.png";

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      Home <img src={right_arrow} alt="" /> SHOP{" "}
      <img src={right_arrow} alt="" /> {product.category}{" "}
      <img src={right_arrow} alt="" />
      {product.name}
    </div>
  );
};

export default Breadcrum;
