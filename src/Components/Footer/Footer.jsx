import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            We can create something amazing together, 
            let’s do it.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:jaikrishnavr@outlook.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
          </div>
          <ul className={css.menu}>
            <li><a href="#experties">Services</a></li>
            <li><a href="#Aboutme">About me</a></li>
            <li><a href="#Portfolio">Portfolio</a></li>
          </ul>
        </div> 
      </motion.div>
    </motion.section>
  );
};

export default Footer;
