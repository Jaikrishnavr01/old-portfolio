import React from 'react';
import css from './Hero.module.scss';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { fadeIn, slideIn, staggerContainer } from '../../utils/motion';
import { BsFillEnvelopeOpenFill } from "react-icons/bs";

const Hero = () => {
    return (
        <section className={`paddings ${css.wrapper}`}>
            <motion.div
                initial="hidden"
                whileInView="show"
                variants={staggerContainer}
                viewport={{ once: false, amount: 0.25 }}

                className={`innerWidth ${css.container}`}>


                {/* upper elements */}
                <div className={css.upperElements}>
                    <motion.span

                        variants={fadeIn("right", "tween", 0.2, 1)}
                        className='primaryText'>
                        Hey There, <br /> I'm Jai krishna

                    </motion.span>
                    <motion.span

                        variants={fadeIn("left", "tween", 0.2, 1)} className='secondaryText'>
                        I design beautifull simple
                        <br />
                        things, And I love what i do

                    </motion.span>
                </div>

                {/* person image */}
                <motion.div
                    variants={fadeIn("up", "tween", 0.5, 1)} className={css.person}>
                    <motion.img
                        variants={slideIn("up", "tween", 0.2, 1)}
                        src="./personbg.png" alt="" />
                </motion.div>

                {/* email */}

                <a className={css.email} href='mailto:jaikrishnavr@outlook.com'  >
                    <BsFillEnvelopeOpenFill /> Get In Touch
                </a>


                {/* lower elements */}
                <div className={css.lowerElements}>
                    <motion.div variants={fadeIn("right", "tween", 0.2, 1)} className={css.experience}>
                        {/* <div className="primaryText">1</div> */}
                        <div className="secondaryText">
                            {/* <div>Year</div>
                <div>Experience</div> */}
                            <div className={css.iconContainer}>
                                <a href="https://www.linkedin.com/in/jaikrishnavr/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                                </a>
                                <a href="https://github.com/Jaikrishnavr01" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} size="2x" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("left", "tween", 0.2, 1)}
                        className={css.certificate}>
                        <img src="./certificate.png" alt='' />
                        <span>CERTIFIED PROFESSIONAL</span>
                        <span>WEB DEVELOPER</span>
                    </motion.div>
                </div>

            </motion.div>

        </section>
    )
}

export default Hero