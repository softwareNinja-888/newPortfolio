import React, { useState } from 'react';

import menu from '/menuWhite.webp'
import logo from '/logo.svg'

import { HamburgerMenu } from './Menu';
export function Header(){
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="flex flex-col justify-between items-center p-4 ">
            <div className="flex justify-between gap-48 items-center py-5">
                <img src={logo} className="w-10"/>
                <img  src={menu} onClick={() => setMenuOpen(!menuOpen)} className="w-5" />
                {/* Full-Screen Menu */}
                {menuOpen && (
                  <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                )}
            </div>
            <div className=""></div>
        </header>

    );
}



