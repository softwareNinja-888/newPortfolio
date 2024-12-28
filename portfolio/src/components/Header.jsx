import React, { useState } from 'react';

import menu from '/menuWhite.webp'
import logo from '/logo.svg'

import { HamburgerMenu } from './Menu';
import { Button } from './Button';
export function Header(){
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="flex flex-col justify-between items-center p-4 w-screen">
            <div className="flex justify-between gap-64 items-center py-5">
                <img src={logo} className="w-10"/>
                <img  src={menu} onClick={() => setMenuOpen(!menuOpen)} className="w-5" />
                {/* Full-Screen Menu */}
                {menuOpen && (
                  <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                )}
            </div>
            <div className="flex flex-col items-center justify-center gap-3 text-fontColor ">
                <div className="font-geist text-sm">Real life projects</div>
                <div className="flex items-center justify-center text-2xl font-geist flex-wrap">Turning your vision into Reality</div>
                <Button text='Get in touch' width='w-36'/>
            </div>
        </header>

    );
}



