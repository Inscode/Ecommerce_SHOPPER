import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/drop_down.png";
import Item from "../Components/Item/Item";
import "../Pages/CSS/ShopCategory.css";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img
        className="shopcategory-banner"
        width="1600px"
        height="350px"
        src={props.banner}
        alt=""
      />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> Out of 20 Products
        </p>
        <div className="shopcategory-sort">
          Sort by{" "}
          <img width="15px" height="15px" src={dropdown_icon} alt=""></img>
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;
