import React from 'react'
import footer from '../assets/footer.png'
import quotes from '../assets/Quotes.png'


const Footer = () => {
  return (
    <footer className='footer-section'>
        <div className='container'>
            <div className='footer-item_responsive'>
                        <ul className='footer-item-links'>
                            <li className='footer-item__item'>
                                <a className='footer-item__link' href='#calculator'>Калькулятор</a>
                            </li>
                            <li className='footer-item__item'>
                                <a className='footer-item__link' href='#advantages'>О нас</a>
                            </li>
                            <li className='footer-item__item'>
                                <a className='footer-item__link' href='#guarantee'>Гарантии</a>
                            </li>
                            <li className='footer-item__item'>
                                <a className='footer-item__link' href='#reviews'>Отзывы</a>
                            </li>
                        </ul>
                </div>
            <div className='footer-wrapper'>
                <div className='footer-item'>
                    <div className='footer-item-container'>
                        <img className='footer-item__logo' src={footer} loading='lazy'/>
                        <p className='footer-item__title'>FromBoard Delivery</p>
                    </div>
                    <p className='footer-item__rights'>
                        2023 © Ни одно право не защищено, копируйте сколько влезет

                    </p>
                </div>
                <div className='footer-item'>
                    <ul className='footer-item-links'>
                        <li className='footer-item__item'>
                            <a className='footer-item__link' href='#calculator'>Калькулятор</a>
                        </li>
                        <li className='footer-item__item'>
                            <a className='footer-item__link' href='#advantages'>О нас</a>
                        </li>
                        <li className='footer-item__item'>
                            <a className='footer-item__link' href='#guarantee'>Гарантии</a>
                        </li>
                        <li className='footer-item__item'>
                            <a className='footer-item__link' href='#reviews'>Отзывы</a>
                        </li>
                    </ul>
                </div>
                <div className='footer-item'>
                    <p className='footer-item__phone'>+7(800)12345-67</p>
                    <p className='footer-item__free'>Звонки по России бесплатны</p>
                </div>
            </div>
            <div className='footer-footer'>
                <p className='footer-footer__text'>
                    НЕ ЯВЛЯЕТСЯ ПУБЛИЧНОЙ ОФЕРТОЙ. Просим обратить внимание 
                    на то, что цены носят информационный и ознакомительный характер, 
                    а значит ни в какой мере не являются публичной офертой, которая 
                    определена в ст. 437 ГК РФ. Вся информация на сайте может содержать 
                    неточности, орфографические и иные ошибки, она не является полной, 
                    окончательно и исчерпывающей
                </p>
                <p className='footer-footer__author'>Разработкой макета занимался StyleLifeWeb | Васильев Александр
                    <span className='footer-footer__author_me'>Вёрсткой занимался Дмитрий Ильин</span>
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer