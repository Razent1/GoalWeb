import React, {useState} from 'react';
import './style.sass';
import './App.css';

import img from './img/noroot (1).png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faMoneyBill} from '@fortawesome/free-solid-svg-icons';
import {faCrown} from '@fortawesome/free-solid-svg-icons';
import {faStarOfDavid} from '@fortawesome/free-solid-svg-icons';
import instagramIcon from './img/icons8-instagram.svg';
import telegramIcon from './img/icons8-телеграмма-app.svg';
import gmailIcon from './img/icons8-gmail.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Main from "./Main";
import Presentation from "./Presentation";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Link} from "react-router-dom";

AOS.init();

function App() {
    const star = <FontAwesomeIcon icon={faStar} size="lg"/>;
    const money = <FontAwesomeIcon icon={faMoneyBill} size="lg"/>;
    const crown = <FontAwesomeIcon icon={faCrown} size="lg"/>;
    const starDavide = <FontAwesomeIcon icon={faStarOfDavid} size="lg"/>;
    // const headerPoint = <div className='row point'></div>;
    const [point, setPoint] = useState(true);
    const styleLineMain = {fontWeight: 'bold'};
    const styleLinePres = {fontWeight: 'bold', color: '#13CD88'};
    return (
        <main className='container'>
            <div className='row justify-content-center'>

                <div className={`col ${point? 'mCol' : 'pCol'}`}>
                    <div className="d-flex flex-row header justify-content-center">
                        <div className={`col-${point? 7 : 5} cursor main-header`}>
                            <div onClick={() => setPoint(true)}
                                 style={point ? styleLineMain : {fontWeight: "300"}}>We Are Hiring
                            </div>
                        </div>
                        <div className={`cursor ${point? '' : 'mobile-titles'}`}>
                            <div onClick={() => setPoint(false)}
                                 style={point ? {fontWeight: "300"} : styleLinePres}>  <div>Презетация </div>
                            </div>
                        </div>
                    </div>
                    {point ? <Main/>: <Presentation/>}
                </div>
            </div>
        </main>
    )

}

export default App;
