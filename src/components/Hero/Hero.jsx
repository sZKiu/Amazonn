import React from "react";
import HeroImg from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

function Hero() {

  const transition = {duration:3, type: "spring"}

  return (
    <div className="container_hero">
      <div className="h_sides">
        <div className="h_sides-div">
          <span>Skin</span>
          <span>Protection</span>
          <span>Cream</span>
        </div>

        <div className="text2">
          <span>Trendy collection</span>
          <span>
            Seedily say has ssuitable disposal and boy. Exercise joy man
            chirejoiced.
          </span>
        </div>
      </div>

      <div className="wrapper">
        <motion.div 
        initial={{bottom: "2rem"}}
        whileInView={{bottom: "0rem"}}
        transition={transition}
        className="blueCircle"
        ></motion.div>

        <motion.img
        transition={transition}
        initial={{bottom: "2rem"}}
        whileInView={{bottom: "0rem"}}
        src={HeroImg} alt="" width={600} />
        <motion.div 
        transition={transition}
        initial={{right: "4%"}}
        whileInView={{right: "2%"}}
        className="cart2">
          <RiShoppingBagFill />

          <div className="signup">
            <span>Best Singup Offers</span>

            <div>
              <BsArrowRight />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="h_sides">
        <div className="traffic">
          <span>1.5m</span>
          <span>Monthly Traffic</span>
        </div>

        <div className="customers">
          <span>100k</span>
          <span>Happy Customers</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
