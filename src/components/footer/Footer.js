import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import {AiOutlineGithub, AiOutlineLinkedin} from 'react-icons/ai'

function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <h3>SrbAvanture.</h3>
                    <div className="social">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <ul>
                            <li>O nama</li>
                            <li>Partneri</li>
                            <li>Karijere</li>
                            <li>Vesti</li>
                            <li>Reklamiranje</li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li>Kontakt</li>
                            <li>Uslovi korišćenja</li>
                            <li>Putne polise</li>
                            <li>Privatnost</li>
                            <li>Plaćanje</li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <br/>
                <h4 className="bskmrkvc">Bosko Markovic, 2022 ©</h4>
                <div className = "ikonice-futer">
                    <a href="https://github.com/bskmrkvc" className="ikonica">
                        <AiOutlineGithub className="ikonica"/>
                    </a> 
                    <a href="https://www.linkedin.com/in/bosko-markovic-0884a5163/" className="ikonica">
                        <AiOutlineLinkedin className="ikonica"/>     
                    </a> 
                </div>
            </div>
        </div>
    )
}

export default Footer
