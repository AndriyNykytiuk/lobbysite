import React from 'react'
import Yrii from '../pict/lobbyPict/MaksDjygun.webp'
import '../css/memberitem.css'

const Memberitem = ({ img, name, position, role, description }) => {
    return (
        <div className='memberitem'>
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




        </div>
    )
}

export default Memberitem
