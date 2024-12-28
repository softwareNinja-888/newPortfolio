import ui from '/ui.png'
import dev from '/dev.png'
import reponsive from '/responsive.png'

import { motion } from "framer-motion";
import { useInView } from 'framer-motion';
import React from 'react';


// import 
export function Services(){

   const ref = React.useRef(null);
   const isInView = useInView(ref, { once: true });

    return (
        <>

            <motion.div ref={ref} initial={{x:"-100%", opacity:0}} animate={isInView ? {x:0, opacity:1} : {}} transition={{duration:1.5, ease: 'easeOut'}}>
                <div className="text-fontColor text-3xl text-center font-poppins mt-16">Services</div>
                <div className="flex mt-16 font-roboto">
                    <div className=" w-52 flex flex-col gap-6 text-fontColor mx-6 ">
                        <img src={reponsive} alt="ui logo" className="w-12 h-12 self-center" />
                        <div className="">Responsive Design</div>
                        <div className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
                    </div>
                    <div className=" w-52 flex flex-col gap-6 text-fontColor mx-6 ">
                        <img src={dev} alt="ui logo" className="w-12 h-12 self-center" />
                        <div className="">Development </div>
                        <div className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
                    </div>
                </div>
            </motion.div>
    
        </>    
    )
}