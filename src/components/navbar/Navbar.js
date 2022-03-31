import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'

import { Link } from 'react-scroll'

import './NavbarStyles.css'

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'}>
                <h2>SrbAvanture.</h2>
            </div>
            <ul className="nav-menu">
                <Link to='home' smooth={true} duration={500} ><li>Pocetna</li></Link>
                <Link to='destinations' smooth={true} duration={500} ><li>Destinacije</li></Link>
                <Link to='carousel' smooth={true} duration={500} ><li>Putovanja</li></Link>
                <Link to='search' smooth={true} duration={500} ><li>Zakazivanje</li></Link>
                <Link to='views' smooth={true} duration={500} ><li>Izleti</li></Link>
            </ul>
            <div className="nav-icons">
                <BiSearch className='icon' style={{ marginRight: '1rem' }} />
                <BsPerson className='icon' />
            </div>
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}

            </div>

            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                    <Link to='home' smooth={true} duration={500} ><li>Pocetna</li></Link>
                    <Link to='destinations' smooth={true} duration={500} ><li>Destinacije</li></Link>
                    <Link to='views' smooth={true} duration={500} ><li>Izleti</li></Link>
                    <Link to='search' smooth={true} duration={500} ><li>Zakazivanje</li></Link>
                    <Link to='carousel' smooth={true} duration={500} ><li>Putovanja</li></Link>
                </ul>
                <div className="mobile-menu-bottom">
                    <div className="menu-icons">
                        <button>PRETRAGA</button>
                        <button>MOJ NALOG</button>
                    </div>
                    <div className="social-icons">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar;
