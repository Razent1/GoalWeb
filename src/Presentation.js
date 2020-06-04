import React from "react";
import './_presentation.sass';
import phone01Img from './img/7.png';
import phone02Img from './img/7 (2).png';
import backgroundImg from './img/Ellipse 34.svg';
import phone03Img from './img/7(3).png';
import phone04Img from './img/7 (4).png';

const Presentation = () => {
    return (
        <div className='presentation-block'>
            <div className='row justify-content-center main-title'>
                <span style={{color: '#13CD88'}}>Goal</span><span>App</span>
            </div>
            <div className='row justify-content-center under-title'>
                Set your goals and go to victory!
            </div>
            <div className='row'>
                <div className='col-12 screen col-md-5' style={{padding: '0'}}>
                    <div className='imgBox'><img className='imgBox-screenImg' src={phone01Img} alt="phone screen"/>
                    </div>
                </div>
                <div className='col-12 col-md-7 align-self-center'>
                    <div className='textP'>
                        <div className='count row'>01</div>
                        <div className='row justify-content-center textP-block'>Приложение позволяет создавать и вести
                            свой профиль, публиковать
                            в нем цели,
                            разделять их на этапы и рассказывать о них подписчикам и единомышленникам
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 mobile" style={{padding: 0}}>
                        <div className="imgBox-mobile"><img className='imgBox-mobile-screenImg02' src={phone02Img}
                                                            alt="phone screen"/>
                            <img className='imgBox-mobile-backgroundImg' src={backgroundImg} alt="B"/></div>
                    </div>
                    <div className="col-12 col-md-7 align-self-center" >
                        <div className="textP P2">
                            <div className="count d-flex flex-row">02</div>
                            <div className="d-flex flex-row justify-content-center textP-block">Каждая цель может быть
                                разделена на
                                любое количество этапов. Каждый этап может быть подробно описан. Система социального
                                взаимодействия повзоляет комментировать каждый из этапов и ставить лайки
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-5 nonmobile">
                        <div className="imgBox-02"><img className='imgBox-02-screenImg02' src={phone02Img}
                                                        alt="phone screen"/>
                            <img className='imgBox-02-backgroundImg' src={backgroundImg} alt="s"/></div>
                    </div>
                </div>
                <div className='col-12 screen col-md-5 block03' style={{padding: '0'}}>
                    <div className='imgBox'><img className='imgBox-screenImg03' src={phone03Img} alt="phone screen"/>
                    </div>
                </div>

                <div className='col-12 col-md-7 align-self-center'>
                    <div className='textP P3'>
                        <div className='count row'>03</div>
                        <div className='row justify-content-center textP-block'>Каждый этап публично выставленной цели
                            можно прочитать и прокомментировать. В приложение так же присутствует возможность писать
                            личные сообщения, и искать единомышленников по категориям и геолокации
                        </div>
                    </div>
                </div>

                <div className='col-12 screen col-md-5 block04 mobile'>
                    <div className='imgBox'><img className='imgBox-screenImg04' src={phone04Img} alt="phone screen"/>
                    </div>
                </div>
                <div className='col-12 col-md-7 align-self-center'>
                    <div className='textP P4'>
                        <div className='count row'>04</div>
                        <div className='row justify-content-center textP-block'>Удобный текстовый редактор позволит
                            быстро писать и редактировать большие объемвы текста, а так же распознавать голосовой ввод и
                            добавлять к тексту изображения
                        </div>
                    </div>
                </div>
                <div className='col-12 screen col-md-5 block04 nonmobile'>
                    <div className='imgBox'><img className='imgBox-screenImg04' src={phone04Img} alt="phone screen"/>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Presentation;
