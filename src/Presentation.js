import React from "react";
import './_presentation.sass';
import phone01Img from './img/7 (1).svg';
import background01Img from './img/Ellipse 33.svg';

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
                <div className='col-12 screen col-md-6'>
                    <div className='imgBox'><img className='imgBox-screenImg'  src={phone01Img} alt="phone screen"/></div>
                </div>
                <div className='col-12 col-md-6 align-self-center'>
                    <div className='textP'>
                        <div className='count row'>01</div>
                        <div className='row justify-content-center textP-block'>Приложение позволяет создавать и вести свой профиль, публиковать
                            в нем цели,
                            разделять их на этапы и рассказывать о них подписчикам и единомышленникам
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};
export default Presentation;