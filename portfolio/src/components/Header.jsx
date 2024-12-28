import React, { useState } from 'react';

import close from '/close.webp'
import menu from '/lightMenu.webp'

import { HamburgerMenu } from './Menu';
export function Header(){
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="flex justify-between items-center p-4 bg-white shadow-md">
            <div className="text-lg font-bold">T.B.L</div>
            <img  src={menu} onClick={() => setMenuOpen(!menuOpen)} className="w-5" />
        
            {/* Full-Screen Menu */}
            {menuOpen && (
              <HamburgerMenu/>
            )}
        </header>
    );
}

