import React from 'react'

import '../css/whoweare.css'
import arrow from '../pict/Arrow_3.svg'
import people from '../pict/people.svg'
import { Link } from 'react-router-dom'

const WhoWeAre = () => {
  return (
    <div className='who-we-are__article'>


      <h2>Хто ми</h2>
      <p>Українська Асоціація Лобівюання була заснована у 2025-му році та є першим українським обʼєднанням такого профілю. </p>
      <p>Ми прагнемо створити середовище, де рішення на державному рівні приймаються через прозорий та конструктивний 
        діалог між владою, бізнесом і суспільством. </p>
      <p>Для досягнення цієї мети ми допомагаємо професіоналам у сфері GR та адвокації ставати успішними, 
        надаючи їм платформу для навчання, обміну досвідом та налагодження стратегічних контактів.</p>

      <div className="who-we-are__article-bottom">
        <Link to="/about"><img className="arrow" src={arrow} alt="arrow" /></Link>
        <img className='people' src={people} alt="Image" />
      </div>


    </div>
  )
}

export default WhoWeAre
