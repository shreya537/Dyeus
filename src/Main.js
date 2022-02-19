import React from "react";
import "./Main.css";

import { BsCart3 } from "react-icons/bs";
import Product from "./Product";
import CardCarouse from "./CardCarouse";

function Main() {
  return (
    <div className="main">
      <Product />
      <CardCarouse />
      <div className="add-cart">
        <BsCart3
          style={{
            height: `15px`,
            width: `15px`,
            paddingRight: `12px`,
            paddingTop: `4px`,
          }}
        />
        <label>ADD TO CART</label>
      </div>
    </div>
  );
}

export default Main;
