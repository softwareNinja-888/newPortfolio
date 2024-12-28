import React, { useState } from 'react';

import menu from '/menuWhite.webp'
import logo from '/logo.svg'

import { HamburgerMenu } from './Menu';
import { Button } from './Button';

// import * as React from "react";
import { motion } from "framer-motion";

export function Header(){
    const [menuOpen, setMenuOpen] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: 0.3, // Delay before children animations start
            staggerChildren: 0.6, // Delay between each child animation
          },
        },
      };
      
      const itemVariants = {
        hidden: { y: "100%", opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
      };

    return (
        <header className="flex flex-col justify-between items-center p-4 w-screen gap-10">
            <div className="flex justify-between gap-64 items-center py-5">
                <img src={logo} className="w-12"/>
                <img  src={menu} onClick={() => setMenuOpen(!menuOpen)} className="w-5" />
                {/* Full-Screen Menu */}
                {menuOpen && (
                  <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                )}
            </div>
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col items-center justify-center gap-3 text-fontColor">
                <motion.div variants={itemVariants} className="flex items-center justify-center text-4xl font-poppins flex-wrap text-center mb-4">
                    Building Web Applications That Drive Results
                </motion.div>
                 <motion.div variants={itemVariants} className="text-sm leading-7 text-center mb-10 font-roboto">
                     I transform your ideas into interactive web realities, focusing on usability and performance.
                 </motion.div>
                <motion.button variants={itemVariants}>
                    <Button text={`Let's Talk`} width='w-36'/>
                </motion.button>
            </motion.div>
        </header>

    );
}




// export function MySection() {
//   return (
//     <motion.div
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//       style={{ /* Your section styles */ }}
//     >
//       <motion.h1 variants={itemVariants}>Building Web Applications</motion.h1>
//       <motion.p variants={itemVariants}>I transform design concepts...</motion.p>
//       <motion.button variants={itemVariants}>Let's Talk</motion.button>
//     </motion.div>
//   );
// }



