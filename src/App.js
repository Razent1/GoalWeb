import React from 'react';
import logo from './logo.svg';
import './style.sass';
import './App.css';
import img from './img/noroot (1).png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faMoneyBill} from '@fortawesome/free-solid-svg-icons';
import {faCrown} from '@fortawesome/free-solid-svg-icons';
import {faStarOfDavid} from '@fortawesome/free-solid-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faTelegram} from '@fortawesome/free-brands-svg-icons';
import Fade from 'react-reveal/Fade';


function App() {
    const star = <FontAwesomeIcon icon={faStar} size="lg"/>;
    const money = <FontAwesomeIcon icon={faMoneyBill} size="lg"/>;
    const crown = <FontAwesomeIcon icon={faCrown} size="lg"/>;
    const starDavide = <FontAwesomeIcon icon={faStarOfDavid} size="lg"/>;
    const instagram = <FontAwesomeIcon icon={faInstagram} size="lg"/>;
    const telegram = <FontAwesomeIcon icon={faTelegram} size="lg"/>
    return (
        <main className='container'>
            <div className='row justify-content-center'>
                <div className="col mCol ">
                    <Fade top>
                        <div className="row justify-content-center"><img src={img} alt=""/></div>
                    </Fade>
                    <section className='block'>
                        <div className="row title-main justify-content-center">Привет!</div>
                        <div className="row text justify-content-center">Если ты читаешь этот текст, то мы уверены, что
                            ты —
                            очень
                            крутой профессионал в своей области. Это значит, что у тебя есть возможность принять участие
                            в
                            интереснейшем проекте! Расскажем обо всём по порядку.

                        </div>
                    </section>
                    <section className='block'>
                        <div className="row title justify-content-center">О каком проекте идёт речь?</div>
                        <div className="row text justify-content-center"><span
                            style={{fontWeight: 'bold'}}>Суть проекта</span> заключается в создании площадки,
                            на которой люди смогут ставить перед собой цели и достигать их, а также помогать другим
                            людям с их целями и учиться друг у друга. Кроме того, мы хотим раз и навсегда решить
                            проблему с «выгоранием» и утратой мотивации.

                            Мы искренне верим в идею, что человек способен преодолеть почти любые преграды на пути к
                            своей цели, а подавляющее число неудач — результат ошибки на этапе планирования.
                        </div>
                        <div className="row text justify-content-center">
                            <span style={{fontWeight: 'bold'}}>Почему возникают проблемы?</span> <br/>
                            Результаты опросов показывают, что большая часть людей на самом деле не умеет работать с
                            целями. Кажется, что это довольно просто — представил себе картинку того, к чему стремишься,
                            и пол дела уже сделано, ведь так?..
                            В реальности история совершенно другая — люди боятся ставить перед собой цели.
                            Это происходит по разным причинам: <br/>
                            1. Уже есть опыт работы с целями, но всё закончилось «провалом». <br/>
                            2. Нет чёткого понимания, как это делается, а неизвестность пугает. <br/>
                            3. Не хватает поддержки
                        </div>
                        <div className="row text justify-content-center"><span
                            style={{fontWeight: 'bold'}}>Наша задача </span> — научить каждого человека ставить перед
                            собой
                            глобальные цели и идти к ним. Разумеется, мы не можем постучаться в дверь к каждому
                            человеку,
                            чтобы
                            рассказать ему об этом. К счастью, это и не требуется.
                            Мы можем взять на вооружение то, что сами умеем делать лучше всего — разработку
                            интернет-приложений,
                            их продвижение и поддержку.
                        </div>
                        <div className="row text justify-content-center"><span
                            style={{fontWeight: 'bold'}}>Суть проекта</span> заключается в создании площадки, на которой
                            люди смогут ставить перед собой цели и достигать их, помогать другим людям и учиться друг у
                            друга.
                        </div>
                    </section>
                        <section className='block ' >
                            <div className="row title justify-content-center">Кого мы ищем?</div>
                            <div className="row text justify-content-center"> Дизайнеры, UI/UX-инженеры.</div>

                            <div className="row text justify-content-center"> Разработчики, которые уже умеют
                                программировать на Python (backend), ReactNative / Flutter
                                (frontend) или очень хотят этому научиться.
                            </div>
                        </section>
                    <section className='block'>
                        <div className="row title justify-content-center">Условия</div>
                        <div className='row text justify-content-center'>
                            <div className='d-flex flex-row'>
                                <div className='d-flex flex-row align-self-center'
                                     style={{marginRight: '40px'}}>{star}</div>
                                <div>Обещаем, что будет интересно. Безумно интересно!</div>
                            </div>
                        </div>
                        <div className='row text justify-content-center'>
                            <div className='d-flex flex-row'>
                                <div className='d-flex flex-row align-self-center'
                                     style={{marginRight: '40px'}}>
                                    <div className='wrapper-icon'>{crown} </div>
                                </div>
                                <div>Обещаем, что ты получишь кайф от работы над чем-то своим.</div>
                            </div>
                        </div>
                        <div className='row text justify-content-center'>
                            <div className='d-flex flex-row'>
                                <div className='flex-row align-self-start' style={{marginRight: '40px'}}>
                                    <div className='wrapper-icon'>{money} </div>
                                </div>
                                <div>Обещаем, что денег сначала не будет, а потом... возможно тоже не будет.</div>
                            </div>
                        </div>
                        <div className='row text justify-content-start'>
                            <div className='d-flex flex-row'>
                                <div className='d-flex flex-row align-self-start'
                                     style={{marginRight: '40px', marginTop: '10px'}}>
                                    <div
                                        className='wrapper-icon d-flex flex-row justify-content-end'>{starDavide} </div>
                                </div>
                                <div>Обещаем, что ты сможешь гордиться тем, что ты участвовал в подобном
                                    проекте, и тебе будет, о чём рассказать на очередном собеседовании.
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='block'>
                        <div className='row title justify-content-center'>Я в деле!</div>
                        <div className='row text justify-content-center'>
                            Отлично, рады слышать!
                        </div>
                        <div className='row text justify-content-center'>
                            Напиши о своём желании <a className='link' href="#contacts">кому-то из нас</a>.
                        </div>
                    </section>
                    <section className="block">
                        <div className='row title justify-content-center'>Позови друга!</div>
                        <div className='row text justify-content-center'>
                            Даже если тебе кажется, что у тебя не найдётся времени на то, чтобы присоединиться к
                            проекту, ты
                            всё равно можешь помочь.
                        </div>
                        <div className='row text justify-content-center'>
                            Отправь эту ссылку другу, которому может быть интересно принять участие в проекте.
                        </div>
                        <div className='row text justify-content-center'>
                            Спасибо за уделённое время!
                        </div>
                    </section>
                    <section className='block'>
                        <div className="row title justify-content-center" id='contacts'>Контакты</div>
                        <div className="row text-contacts justify-content-center" style={{paddingBottom: '20px'}}>
                            <div className='row justify-content-center contacts'><a
                                href="https://www.instagram.com/scaletius/" target='_blank'><img
                                src="https://img.icons8.com/fluent/48/000000/instagram-new.png"/></a> <a
                                href="https://t.me/clopo" target='_blank'> <img
                                src="https://img.icons8.com/fluent/48/000000/telegram-app.png"/> </a> <a
                                href="mailto:is_k.skaletskiy@mpt.ru " target='_blank'><img
                                src="https://img.icons8.com/material-two-tone/48/000000/email.png"/></a></div>

                        </div>
                        {/*<div className="row text-contacts justify-content-center">*/}
                        {/*    <div><span>{telegram}</span> <span>{instagram}</span> <span className='name'>Илья </span>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="row text-contacts justify-content-center">*/}
                        {/*    <div><span>{telegram}</span> <span>{instagram}</span> <span className='name'>Никита </span>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="row text-contacts justify-content-center">*/}
                        {/*    <div><span>{telegram}</span> <span>{instagram}</span> <span className='name'>Артемий </span>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </section>
                </div>
            </div>
        </main>
    )

}

export default App;
