import React from 'react';
import Maks from '../pict/lobbyPict/MaksDjygun.webp'
import Anna from '../pict/lobbyPict/AnnaLachehina.webp'
import Yurii from '../pict/lobbyPict/YriiRylav.webp'
import Malich from '../pict/lobbyPict/YuliaMalich.webp'
import Taras from '../pict/lobbyPict/TarasShevchenko.webp'
import Inna from "../pict/Inna.webp"

import '../css/membership.css'
const Membership = () => {
    return (
        <div>
            <div className='membership-wrapper'>
                <h2 className='title__membership'>
                    Члени <span>правління</span>
                </h2>
                <div className='upper'>
                    <div className="item__card">
                        <div className="item__card__container">
                            <div className="item__card-img">
                                <img className="pict" src={Anna} alt="" />
                            </div>
                            <div className="item__card-content">
                                <div className="item__text">
                                    <h3>Анна Лачихіна</h3>
                                    <p>Голова правління Української асоціації лобіювання.
                                        Співвласниця міжнародної компанії з урядових звʼязків та стратегічних комунікацій Good Politics.
                                        Екс-радниця Міністра фінансів України та голови комітету з міжнародної торгівлі Палати Громад Канади.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item__card">
                        <div className="item__card__container">
                            <div className="item__card-img">
                                < img className="pict" src={Maks} alt="" />
                            </div>
                            <div className="item__card-content">
                                <div className="item__text">
                                    <h3>Максим Джигун</h3>
                                    <p >Член правління Української асоціації лобіювання.
                                        Партнер міжнародної компанії з урядових звʼязків та стратегічних
                                        комунікацій Good Politics. Публічний експерт українських та міжнародних медіа із питань
                                        зовнішньої політики.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item__card">
                        <div className="item__card__container">
                            <div className="item__card-img">
                                < img className="pict" src={Inna} alt="" />
                            </div>
                            <div className="item__card-content">
                                <div className="item__text">
                                    <h3>Інна Бойчук</h3>
                                    <p >Членкиня правління Української асоціації лобіювання. Директорка зі стратегічних комунікацій та взаємодії зі стейкхолдерами міжнародної мережі магазинів Аврора. Співголова комітету з ритейлу та е-комерції Американської торговельної промислової палати в Україні.
                                        With many more lines...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='membership-content'>
                    <div className="item__card">
                        <div className="item__card__container">
                            <div className="item__card-img">
                                <img className="pict" src={Malich} alt="" />
                            </div>
                            <div className="item__card-content">
                                <div className="item__text">
                                    <h3>Юлія Маліч</h3>
                                    <p>Членкиня правління Української асоціації лобіювання.
                                        Експертка з публічної політики та керівниця напряму публічної політики для України та Західно-Центральної Азії у компанії «Bolt» з грудня 2021 року.
                                        Працює з платформною економікою, сферою державного регулювання та взаємодією зі стейкхолдерами, з 2024 року навчається в Оксфорді.
                                        Володіє англійською та німецькою мовами.

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item__card">
                        <div className="item__card__container">
                            <div className="item__card-img">
                                < img className="pict" src={Taras} alt="" />
                            </div>
                            <div className="item__card-content">
                                <div className="item__text">
                                    <h3>Тарас Шевченко</h3>
                                    <p >Член правління Української асоціації лобіювання.
                                        Фахівець із публічної політики, займається взаємодією з органами влади(GR).
                                        З квітня 2021 року очолює напрям взаємодії з органами влади у Glovo в Східній Європі та Центральній Азії. Також є співвласником Largo Solutions Group, де працює з консалтингом у сфері GR, регуляторної політики та стратегічних комунікацій.
                                        Має досвід роботи парламентським радником і юридичним консультантом.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item__card">
                        <div className="item__card__container-yurii">
                            <div className="item__card-img">
                                <img className="pict-yurii" src={Yurii} alt="" />
                            </div>
                            <div className="item__card-content">
                                <div className="item__text">
                                    <h3>Юрій Рилач</h3>
                                    <p>Член правління Української асоціації лобіювання.
                                        Керівник відділу з корпоративних та регуляторних питань ВАТ Україна.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Membership;
