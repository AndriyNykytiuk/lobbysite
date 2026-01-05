import React from 'react'
import '../css/fistPage.css'
import team from '../pict/team.png'
const FirstPage = () => {
  return (
    <div className='first__page'>

            <div className='first__page__title' >

                <div className="main__title">
                    <h1>обʼєднані  <br/> <span className='slim-word'>заради </span>змін</h1>
                </div>
                <div className='main__button'>
                  <a href="#"> Подати заявку на членство </a>
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
                                етичну культуру лобіювання
                                та адвокації в Україні
                            </p>
                        </div>
                        <div className="block__top-right">
                            <p>
                                Будуємо <span>найбільшу в Україні
                                    спільноту</span> професійних лобістів, відкриваючи доступ до знань,
                                звʼязків та експертизи.
                            </p>
                            </div>
                    </div>
                    <div className="block__bottom">
                        <div className="block__bottom-left">
                            <img src={team} alt="Image"/>
                        </div>
                        <div className="block__bottom-right">
                            
                        </div>
                    </div>
              </div>


    </div>
  )
}       

export default FirstPage
