import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { BrowserRouter, Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className='navbar'>
               <div className='navbar-container'>
                   <BrowserRouter>
                    <Link to='/' className='navbar-logo'>
                        TRVL <i className='fab fa-typo3'/>
                    </Link>
                   </BrowserRouter>
               </div>
            </nav> 
        </>
    )
}

export default Navbar
