import React, { useState } from "react";
import Plane from "../../assets/plane.png";
import { ProductsData } from "../../data/products";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Products = () => {
  const [parent] = useAutoAnimate();

  const [menuProducts, setMenuProducts] = useState(ProductsData);

  const filter = (type) => {
    console.log(ProductsData.filter((product) => product.type === type));
    setMenuProducts(ProductsData.filter((product) => product.type === type));
  };

  return (
    <div className="container_products">
      <img src={Plane} alt="" />
      <h1>Our Featured Products</h1>

      <div className="products">
        <ul className="menu_products">
          <li onClick={() => setMenuProducts(ProductsData)}>All</li>
          <li onClick={() => filter("skin care")}>Skin Care</li>
          <li onClick={() => filter("conditioner")}>Conditioners</li>
          <li onClick={() => filter("foundation")}>Foundations</li>
        </ul>

        <div className="list_products" ref={parent} >
          {menuProducts.map((product, ind) => {
            return (
              <div className="product" key={ind}>
                <div className="left-s">
                  <div className="name">
                    <span>{product.name}</span>
                    <span>{product.detail}</span>
                  </div>
                  <span>{product.price}</span>
                  <div>Show Now</div>
                </div>

                <img src={product.img} alt="" className="img-p" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
