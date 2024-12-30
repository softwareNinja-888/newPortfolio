import ui from '/ui.png'
import dev from '/dev.png'
import reponsive from '/responsive.png'

import { useInView } from 'framer-motion';
import React from 'react';

import {ProjectDiv} from './ProjectDiv'

export function Projects(){
    return (
        <>

            <div>
                <div className="text-fontColor text-3xl text-center font-poppins mt-20 underline">My Projects</div>
                <div className="flex flex-row flex-wrap justify-around w-screen">
                    <ProjectDiv/>
                    <ProjectDiv/>
                    <ProjectDiv/>
                    <ProjectDiv/>
                </div>
              
            </div>
    
        </>    
    )
}