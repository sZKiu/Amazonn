import React from "react";
import Logo from "../../../assets/logo.png"
import { CgShoppingBag } from "react-icons/cg"

function Header() {
  return (
    <div className="container" >
      <div className="logo" >
        <img src={Logo} alt="logo amazon" />
        <span>amazon</span>
      </div>

      <div className="right" >
        <div className="menu" >
          <ul className="menu" >
            <li>Collections</li>
            <li>Brands</li>
            <li>New</li>
            <li>Sales</li>
            <li>ENG</li>
          </ul>
        </div>

        <input type="text" className="search" placeholder="Search" />

        <CgShoppingBag className="cart" />
      </div>
    </div>
  );
}

export default Header;
