import React, { useState } from 'react'
import logo from '../pict/Logo.svg'
import '../css/header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <div className="header__container">
                <div className="header__logo">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>

                <div className={`header__burger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>

                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className={`header__nav ${isOpen ? 'active' : ''}`}>
                    <ul>

                        <li className="header__about-us">
                            <Link to="/about" onClick={() => setIsOpen(false)}>Про нас</Link>
                            <div className="header__about-us__dropdown">
                                <ul>
                                    <li><Link to="/about/who-we-are" className="header__about-us__dropdown__item" onClick={() => setIsOpen(false)}>Хто ми?</Link></li>
                                    <li><Link to="/about/membership" className="header__about-us__dropdown__item" onClick={() => setIsOpen(false)}>Члени правління</Link></li>
                                    <li><Link to="/about/Organisationmembers" className="header__about-us__dropdown__item" onClick={() => setIsOpen(false)}>Члени організації</Link></li>
                                    <li><Link to="/about/ethic-police" className="header__about-us__dropdown__item" onClick={() => setIsOpen(false)}>Кодекс етики</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li className="header__nav__membership"><a href="#" onClick={() => setIsOpen(false)}>Членство</a></li>
                        <li className="header__nav__actual"><a href="#" onClick={() => setIsOpen(false)}>Актуальне</a></li>
                        <li className="header__nav__resources"><a href="#" onClick={() => setIsOpen(false)}>Ресурси</a></li>
                    </ul>

                    <div className="header__lang">
                        <button type="submit" className="button">UA</button>
                        /
                        <button type="submit" className="button">EN</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
