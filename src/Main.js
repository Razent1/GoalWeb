import React from "react";
import img from "./img/noroot (1).png";
import instagramIcon from "./img/icons8-instagram.svg";
import telegramIcon from "./img/icons8-телеграмма-app.svg";
import gmailIcon from "./img/icons8-gmail.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCrown, faMoneyBill, faStar, faStarOfDavid} from "@fortawesome/free-solid-svg-icons";

const star = <FontAwesomeIcon icon={faStar} size="lg"/>;
const money = <FontAwesomeIcon icon={faMoneyBill} size="lg"/>;
const crown = <FontAwesomeIcon icon={faCrown} size="lg"/>;
const starDavide = <FontAwesomeIcon icon={faStarOfDavid} size="lg"/>;

const Main = () => {
    return (
        <div>
            <div className="row justify-content-center"><img src={img} alt="hiring"/></div>
            <section className='info-block'>
                <div className="row title-main justify-content-center">Привет!</div>
                <div className="row text last-element justify-content-center">Если ты читаешь этот текст, то мы уверены,
                    что ты — очень крутой профессионал в своей области. Это значит, что у тебя есть возможность принять
                    участие в интереснейшем проекте! Расскажем обо всём по порядку.
                </div>
            </section>
            <section className='info-block'>
                <div className='title'>О каком проекте идёт речь?</div>
                <div className="row text justify-content-center"><span
                    style={{fontWeight: 'bold'}}>Суть проекта</span> заключается в создании площадки, на которой люди
                    смогут ставить перед собой цели и достигать их, а также помогать другим людям с их целями и учиться
                    друг у друга. Кроме того, мы хотим раз и навсегда решить проблему с «выгоранием» и утратой
                    мотивации.


                    <div className="row text justify-content-center">Мы искренне верим в идею, что человек способен
                        преодолеть почти любые преграды на пути к своей цели, а подавляющее число неудач — результат
                        ошибки на этапе планирования. </div>
                </div>
                <div className="row text justify-content-center">
                    <span style={{fontWeight: 'bold'}}>Почему возникают проблемы?</span> <br/>
                    Результаты опросов показывают, что большая часть людей на самом деле не умеет работать с целями.
                    Кажется, что это довольно просто — представил себе картинку того, к чему стремишься, и полдела уже
                    сделано, ведь так?..
                    В реальности история совершенно другая — люди боятся ставить перед собой цели.
                    Это происходит по разным причинам: <br/>
                    1. Уже есть опыт работы с целями, но всё закончилось «провалом». <br/>
                    2. Нет чёткого понимания, как это делается, а неизвестность пугает. <br/>
                    3. Не хватает поддержки
                </div>
                <div className="row text last-element justify-content-center"><span
                    style={{fontWeight: 'bold'}}>Наша задача </span> — научить каждого человека ставить перед собой
                    глобальные цели и идти к ним, не боясь ошибаться. Разумеется, мы не можем постучаться в дверь к
                    каждому человеку, чтобы рассказать ему об этом. К счастью, это и не требуется.
                    Мы можем взять на вооружение то, что сами умеем делать лучше всего — разработку интернет-приложений,
                    их продвижение и поддержку. <br/>
                    Мы можем взять на вооружение то, что сами умеем делать лучше всего — разработку интернет-приложений,
                    их продвижение и поддержку.
                </div>
            </section>
            <section className='info-block'>
                <div className="title">Кого мы ищем?</div>
                <div className="row text justify-content-center"> Дизайнеры, UI/UX-инженеры.</div>

                <div className="row text last-element justify-content-center"> Разработчики, которые уже умеют
                    программировать на Python (backend), ReactNative / Flutter
                    (frontend) или очень хотят этому научиться.
                </div>
            </section>
            <section className='info-block'>
                <div className="title">Условия</div>
                <div className='row text justify-content-center'>
                    <div className='d-flex flex-row'>
                        <div className='d-flex flex-row align-self-start'
                             style={{marginRight: '40px'}}>{star}</div>
                        <div>Обещаем, что будет интересно. Безумно интересно!</div>
                    </div>
                </div>
                <div className='row text justify-content-center'>
                    <div className='d-flex flex-row'>
                        <div className='d-flex flex-row align-self-start'
                             style={{marginRight: '40px'}}>
                            <div className='wrapper-icon'>{crown} </div>
                        </div>
                        <div>Обещаем, что ты получишь кайф от работы над чем-то своим.</div>
                    </div>
                </div>
                <div className='row text justify-content-center'>
                    <div className='d-flex flex-row'>
                        <div className='flex-row align-self-start'
                             style={{marginRight: '40px'}}>
                            <div className='wrapper-icon'>{money} </div>
                        </div>
                        <div>Обещаем, что денег сначала не будет, а потом... возможно тоже не будет. Но мы верим, что
                            будут!
                        </div>
                    </div>
                </div>
                <div className='row text last-element justify-content-start'>
                    <div className='d-flex flex-row'>
                        <div className='d-flex flex-row align-self-start'
                             style={{marginRight: '40px', marginTop: '10px'}}>
                            <div
                                className='wrapper-icon d-flex flex-row justify-content-center'
                                style={{paddingLeft: '5px'}}>{starDavide} </div>
                        </div>
                        <div>Обещаем, что ты сможешь гордиться тем, что ты участвовал в подобном
                            проекте, и тебе будет, о чём рассказать на очередном собеседовании.
                        </div>
                    </div>
                </div>
            </section>
            <section className='info-block'>
                <div className='title'>Я в деле!</div>
                <div className='row text justify-content-center'>
                    Отлично, рады слышать!
                </div>
                <div className='row text last-element justify-content-center'>
                    Напиши <a className='link' href="#contacts">нам</a>.
                </div>
            </section>
            <section className='info-block'>
                <div className='title '>Позови друга!</div>
                <div className='row text justify-content-center'>
                    Даже если тебе кажется, что у тебя не найдётся времени на то, чтобы присоединиться к
                    проекту, ты
                    всё равно можешь помочь.
                </div>
                <div className='row text justify-content-center'>
                    Отправь эту ссылку другу, которому может быть интересно принять участие в проекте.
                </div>
                <div className='row text last-element justify-content-center'>
                    Спасибо за уделённое время!
                </div>
            </section>
            <div className="title">Контакты</div>
            <div className="row text-contacts justify-content-center" style={{paddingBottom: '20px'}}>
                <div className='row justify-content-center contacts'><a
                    href="https://www.instagram.com/scaletius/" target='_blank'><img
                    src={instagramIcon}/></a> <a
                    href="https://t.me/clopo" style={{outline: 'none'}} id='contacts' target='_blank'> <img
                    src={telegramIcon}/> </a> <a
                    href="mailto:skaletsky.work@gmail.com " target='_blank'><img
                    src={gmailIcon}/></a></div>
            </div>
        </div>
    )
};
export default Main;
