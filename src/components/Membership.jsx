import React from 'react';
import Maks from '../pict/Maks.jpeg'
import Anna from '../pict/Anna_Lachehina.jpeg'
import '../css/membership.css'
const Membership = () => {
    return (
        <div>
            <div className='membership-wrapper'>
                <h2>
                    Члени <strong>правління</strong>
                </h2>
                <div className='membership-content'>
 
                        <div className="item__card">
                            <div className="item__card__container">
                                <div className="item__card-img">
                                    < img className="pict" src={Maks} alt="" />
                                </div>
                                <div className="item__card-content">
                                    <div className="item__text">
                                             <h3>Максим</h3>
                                            <p >член правління Української асоціації лобіювання. 
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
                                    <img className="pict" src={Anna} alt="" />
                                </div>
                                <div className="item__card-content">
                                    <div className="item__text">
                                    <h3>Анна</h3>
                                    <p>голова правління Української асоціації лобіювання. 
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
                                    <img className="pict" src={Anna} alt="" />
                                </div>
                                <div className="item__card-content">
                                    <div className="item__text">
                                        <h3>Юлія</h3>
                                        <p>членкиня правління Української асоціації лобіювання. 
                                            Експертка з публічної політики та керівниця напряму публічної політики для України та Західно-Центральної Азії у компанії «Bolt» з грудня 2021 року. 
                                            Працює з платформною економікою, сферою державного регулювання та взаємодією зі стейкхолдерами, з 2024 року навчається в Оксфорді. 
                                            Володіє англійською та німецькою мовами.
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
