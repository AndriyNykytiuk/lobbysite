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
                        <li className="header__nav__plan"> <a href="#" onClick={() => setIsOpen(false)}>План 2026</a></li>
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
                        <li className="header__nav__membership"><Link to="/MembershipTicket" onClick={() => setIsOpen(false)}>Членство</Link></li>
                        <li className="header__nav__actual"><Link to='Actual' onClick={() => setIsOpen(false)}>Актуальне</Link>
                            <div className="header__actual__dropdown">
                                <ul>
                                    <li><Link to="/calendar" className="header__actual__dropdown__item" onClick={() => setIsOpen(false)}>Календар подій</Link></li>
                                    <li><Link to="/actual" className="header__actual__dropdown__item" onClick={() => setIsOpen(false)}>Новини</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li className="header__nav__resources"><a href="#" onClick={() => setIsOpen(false)}>Ресурси</a></li>

                    </ul>
                    <div className="header__about-us__dropdown">
                        <ul>
                            <li><Link to="/about/who-we-are" className="header__about-us__dropdown__item" onClick={() => setIsOpen(false)}>Хто ми?</Link></li>
                            <li><Link to="/about/membership" className="header__about-us__dropdown__item" onClick={() => setIsOpen(false)}>Члени правління</Link></li>
                            <li><Link to="/about/Organisationmembers" className="header__about-us__dropdown__item" onClick={() => setIsOpen(false)}>Члени організації</Link></li>
                            <li><Link to="/about/ethic-police" className="header__about-us__dropdown__item" onClick={() => setIsOpen(false)}>Кодекс етики</Link></li>
                        </ul>
                    </div>
                    <div className="header__lang">
                        <button type="submit" className="button">UA</button>
                        <span>/</span>
                        <button type="submit" className="button">EN</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
