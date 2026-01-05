import React from 'react'
import people from '../pict/people.svg'
import arrow from '../pict/Arrow_3.svg'
import '../css/whoweare.css'
import { Link } from 'react-router-dom'

const WhoWeAre = () => {
  return (
    <div className='who-we-are__article'>


        <h2>Хто ми</h2>
                    <p>Українську Асоціацію Лобіювання засновано 2025 року. <span>Це перше українське об’єднання </span>
            такого профілю. Своєю місією ми бачимо зміцнення етичних стандартів та 
            професіоналізму у сфері лобіювання.</p>
                    <p>Своєю місією ми бачимо зміцнення етичних стандартів та професіоналізму у сфері 
            лобіювання. Ми утверджуємо відкритий діалог і прозорий вплив на рішення як ключові 
            інструменти розбудови в Україні демократичного суспільства.</p>
                    <p>Ми утверджуємо відкритий діалог і прозорий вплив на рішення як ключові інструменти 
            розбудови в Україні демократичного суспільства. Продовження інформації хто ми
            Тут далі також ще текст.</p>
        
        <div className="who-we-are__article-bottom">
            <Link to="/about"><img className="arrow" src={arrow} alt="arrow" /></Link>
            <img className='people' src={people} alt="Image"/>
        </div>


    </div>
  )
}

export default WhoWeAre
