import React from 'react'
import { createPortal } from 'react-dom'
import Yrii from '../pict/lobbyPict/MaksDjygun.webp'
import linkedin from '../pict/linkedin.svg'
import fb from '../pict/facebook.svg'
import insta from '../pict/insta.svg'
import '../css/memberitem.css'

const Memberitem = ({ img, name, position, role, description }) => {
    const [showText, setShowText] = React.useState(false);
    const clickText = () => {
        setShowText(!showText);
    }
    const closeText = (e) => {
        e.stopPropagation();
        setShowText(false);
    }
    return (
        <div className='memberitem' onClick={clickText}>
            <div className='memberitem__img-wrapper'>
                <img className='memberitem__img' src={img} alt="" />
            </div>
            <div>
                <h3 className='memberitem__name'>
                    {name}
                </h3>
                <p className='memberitem__position'>
                    {position}
                </p>
                <p className='memberitem__role'>
                    {role}
                </p>
                <p className='memberitem__description'>
                    {description}
                </p>
            </div>
            {showText && <div className='modalblock' onClick={closeText}>
                <div className='modalblock__content'>
                    <button className="close-btn" onClick={closeText}>+</button>        
                    <div className='modalblock__img'>
                        <img src={img} alt="" />
                    </div>
                    <div className='modalblock__text'>
                        <h3>{name}</h3>
                        <p>{position}</p>
                        <p>{role}</p>
                        <p>{description}</p>
                        <div className='modalblock__social-links'>
                            <a href=""><img src={linkedin} alt="Image" /></a>
                            <a href=""><img src={fb} alt="Image" /></a>
                            <a href=""><img src={insta} alt="Image" /></a>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Memberitem
