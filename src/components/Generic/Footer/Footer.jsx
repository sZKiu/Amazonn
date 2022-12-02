import React from "react";
import Logo from "../../../assets/logo.png";
import { AiOutlinePhone, AiOutlineInbox, AiOutlineLink } from "react-icons/ai";
import { BiMap, BiLogOut } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="cFooterWrapper">
      <hr />

      <div className="cFooter">
        <div>
          <div className="logo_footer">
            <img src={Logo} alt="" />
            <span>amazon</span>
          </div>

          <div className="block">
            <div className="detail">
              <span>Contact US</span>
              <span className="pngLine">
                <BiMap className="icon" />
                <span>111 north avenue Orlando, FL 32801</span>
              </span>

              <span className="pngLine">
                <AiOutlinePhone className="icon" />
                <span>352-386-4415</span>
              </span>

              <span className="pngLine">
                <AiOutlineInbox className="icon" />
                <span>support@amazon.com</span>
              </span>
            </div>
          </div>

          <div className="block">
            <div className="detail">
              <span>Account</span>
              <span className="pngLine">
                <BiLogOut className="icon" />
                <span>Sign In</span>
              </span>
            </div>
          </div>

          <div className="block">
            <div className="detail">
              <span>Company</span>
              <span className="pngLine">
                <IoPerson className="icon" />
                <span>About Us</span>
              </span>
            </div>
          </div>

          <div className="block">
            <div className="detail">
              <span>Resources</span>
              <span className="pngLine">
                <AiOutlineLink className="icon" />
                <span>Safety Privacy & Terms</span>
              </span>
            </div>
          </div>
        </div>

        <div className="copyRight">
          <span>Copyright 2022 by Amazon, Inc.</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
