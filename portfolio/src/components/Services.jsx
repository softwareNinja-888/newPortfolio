import ui from '/ui.png'
import dev from '/dev.png'
import responsive from '/responsive.png'

import { motion } from "framer-motion";
import { useInView } from 'framer-motion';
import React from 'react';
import { ServiceCard } from './helper/ServiceCard';


// import 
export function Services(){

   const ref = React.useRef(null);
   const isInView = useInView(ref, { once: true });

   const responsiveText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
   const developmentText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'

    return (
        <>

            <motion.div ref={ref} initial={{x:"-100%", opacity:0}} animate={isInView ? {x:0, opacity:1} : {}} transition={{duration:1.5, ease: 'easeOut'}}>
                <div className="text-fontColor text-3xl text-center font-poppins mt-20 underline">Services</div>
                <div className="flex mt-16 font-roboto">
                    <ServiceCard img={responsive} name='Responsive Design' text={responsiveText}/>
                    <ServiceCard img={dev} name='Development' text={developmentText}/>
                   
                </div>
            </motion.div>
    
        </>    
    )
}