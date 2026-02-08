import React from 'react'
import '../css/membercard.css'
import info from '../pict/infoVect.svg'
import linkedin from '../pict/linkedin.svg'
import fb from '../pict/facebook.svg'
import insta from '../pict/insta.svg'


const Membercard = ({ img, name, title, article1, article2, position, role, description }) => {
    const [showText, setShowText] = React.useState(false);
    const clickText = () => {
        setShowText(!showText);
    }
    const closeText = () => {
        setShowText(false);
    }

    return (
        <div className="item__card-member">
            <div className="item__card-container">
                <div  className="item__card-img">
                    <img className="item-pict" src={img} alt="" />
                   
                </div>
                 <img className="item-info" onClick={clickText} src={info} alt="" />
                <div className='item__name-container'>
                     <h4 className='item__name'>{name}</h4>
                </div>
                   
            </div>
            {showText && (
                <div className="modal-backdrop" onClick={closeText}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className='modal-img'>
                            <img src={img} alt="" />
                        </div>
                        <div className='modal-text'>
                            <h3>{title}</h3>
                            <p>{article1}</p>
                            <p>{article2}</p>
                            <div className='modal-social-links'>
                                <a href=""><img src={linkedin} alt="Image"/></a>
                                <a href=""><img src={fb} alt="Image"/></a>
                                <a href=""><img src={insta} alt="Image"/></a>
                            </div>
                        </div>
                      
                        <button className="close-btn" onClick={closeText}>+</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Membercard
