import React from 'react'
import '../css/fistPage.css'
import Team from '../pict/MasTteam.png'
import { Link } from "react-router-dom"
import Calendar from '../components/Calendar.jsx'
const FirstPage = () => {
    return (
        <div className='first__page'>

            <div className='first__page__title' >

                <div className="main__title">
                    <h1>Обʼєднані  <br /> <span className='slim-word-1'>заради </span>змін</h1>
                </div>
                <div className='main__button'>
                    <Link to="/MembershipTicket"> Подати заявку на членство </Link>
                </div>
            </div>
            <div className="main__block block">
                <div className="block__top">
                    <div className="block__top-left">
                        <h2>
                            Українська Асоціація Лобіювання --
                        </h2>
                        <p>
                            громадська організація, що розвиває
                            етичну культуру <span className='slim-word'>лобіювання </span>
                            та <span className='slim-word'>адвокації</span> в Україні
                        </p>
                    </div>
                    <div className="block__top-right">
                        <p>
                            Будуємо <span className='slim-word-2'>найбільшу в Україні
                                спільноту</span> професійних лобістів, <span className='slim-word-2'>відкриваючи доступ</span> до знань,
                            звʼязків та експертизи.
                        </p>
                    </div>
                </div>
                <div className="block__bottom">
                    <div className="block__bottom-left">
                        <div className="block__bottom-left__img">
                            <img src={Team} alt="Image" />
                        </div>
                        
                    </div>
                    <div className="block__bottom-right">
                        <Calendar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstPage
