import React, { useState } from 'react'
import css from './Header.module.scss'

import {BiMenuAltRight} from 'react-icons/bi'
import { FaWhatsapp } from 'react-icons/fa'
import {motion} from 'framer-motion'
import { getMenuStyles, headerVariants } from '../../utils/motion'
import useHeaderShadow from '../../hooks/useHeaderShadow'

const Header = () => {  

    const [menuOpened, setMenuOpened] = useState(false);
    const headerShadow = useHeaderShadow()

    const phoneNumber = "8270581184"; // Replace this with your actual mobile number
 

  return (
    <motion.div
    initial="hidden"
    whileInView="show"
    variants={headerVariants}
    viewport={{once: false, amount: 0.25}}
    className={`bg-primary paddings ${css.wrapper}`
}
    style={{boxShadow: headerShadow}}
    >
        <div className={`flexCenter innerWidth ${css.container}`}>
            <div className={css.name}>
                Jk
            </div>


            <ul 
            style={getMenuStyles(menuOpened)}
            className={`flexCenter ${css.menu}`}>
                <li><a href="#experties">Services</a></li>
                <li><a href="#Aboutme">About me</a></li>
                <li><a href="#Portfolio">Portfolio</a></li>
              {/*  <li><a href="#people">Testimonial</a></li>*/}
                <li className={`flexCenter ${css.phone}`}>
                    
                <a href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=hi Jai krishna, I need a website for my personal need.`} target="_blank" rel="noopener noreferrer">
        <FaWhatsapp  size="40px" />
      </a>
                </li>
            </ul>

{/* for medium and small screens */}
            <div className={css.menuIcon} 
            onClick={() => setMenuOpened((prev) => !prev)}
            >
                <BiMenuAltRight size={30}/>
            </div>
        </div>
    </motion.div>
  )
}

export default Header