import React from "react";
import ReactCompareImage from "react-compare-image";
import Shade from "../../assets/shade.png";
import Before from "../../assets/before.png";
import After from "../../assets/after.png";

const Virtual = () => {
  return (
    <div className="virtual">
      <div className="left">
        <span>Virtual Try-On</span>
        <span>Never Buy the wrong Shade Again!</span>
        <span>Try Now!</span>

        <img src={Shade} alt="" />
      </div>

      <div className="right">
        <div className="wrapper">
          <ReactCompareImage leftImage={Before} rightImage={After} />
        </div>
      </div>
    </div>
  );
};

export default Virtual;
