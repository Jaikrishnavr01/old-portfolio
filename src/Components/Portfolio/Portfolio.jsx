import React from 'react'
import css from '../Portfolio/Portfolio.module.scss'
import { motion } from 'framer-motion'
import { fadeIn, staggerChildren } from '../../utils/motion'

const Portfolio = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView="show"
            variants={staggerChildren}
            viewport={{ once: false, amount: 0.25 }}
            className={`paddings ${css.wrapper}`}>

<a  className="anchor" id="Portfolio"></a>
            <div className={`innerWidth flexCenter ${css.container}`}>


                <div className={`flexCenter ${css.heading}`}>
                    <div>
                        <span className="primaryText">
                            My Lastest Works
                        </span>
                        <p style={{ marginTop: "10px" }}>
                            prefect solution for digital experience
                        </p>
                    </div>

                 { /* <span className='secondaryText'>
                        Explore more Works
    </span>*/ }

                </div>

                {/* images */}

                <div className={`flexCenter ${css.showCase}`}>

                    <a href="https://jaikrishna-hotelwebsite.netlify.app/">
                    <motion.img variants={fadeIn("up", "tween", .7, .6)} src="./hotel.png" alt="project" />
                    </a>


                    <a href="https://fooddeliversite.netlify.app/">
                    <motion.img variants={fadeIn("up", "tween", .7, .6)} src="./fooddel.png" alt="project" />
                    </a>
                    <a href="https://jaikrishna-gender.netlify.app/">
                    <motion.img variants={fadeIn("up", "tween", .7, .6)} src="./gender.png" alt="project" />
                    </a>
                    <a href="https://jaikrishna-appleclone.netlify.app/">
                    <motion.img variants={fadeIn("up", "tween", .7, .6)} src="./iphone.png" alt="project" />
                    </a>
                    

                    <a href='https://64c90296179dbb000801f0c9--jaikrishna-crm.netlify.app/'>
                    <motion.img variants={fadeIn("up", "tween", .5, .6)} src="./crm.png" alt="project" />
                    </a>

                    <a href="https://moviebookingwebsite.netlify.app/">
                    <motion.img variants={fadeIn("up", "tween", .7, .6)} src="./mba.png" alt="project" />
                    </a>
                    {/* 
                    <motion.img variants={fadeIn("up", "tween", .7, .6)} src="./showCase2.png" alt="project" />
                    <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./showCase3.png" alt="project" />
                    */}

                </div>

            </div>

        </motion.section>
    )
}

export default Portfolio