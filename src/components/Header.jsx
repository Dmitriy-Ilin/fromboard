import React, { useState } from 'react'
import logo from '../assets/logo.png'

const Header = ({handleBurgerClick}) => {
 const [menuActive, setMenuActive] = useState(false);

  return (
    <>
        <header className='header-section'>
            <div className='container'>
                <div className='header-wrapper'>
                    <div className='header-left'>
                        <img className='header-left__logo' src={logo} alt='logo' loading='lazy'/>
                        <h1 className='header-left__title'>FromBoard Delivery</h1>
                    </div>
                    <div className='header-right'>
                        <p className='header-right__currency'>
                            Доставляем товары из заграницы в Россию
                            <br className='header__transfer'/>
                            Стоимость от 550 рублей за заказ
                            <br className='header__transfer'/>
                            1 $ = 93 ₽ | 1 € = 99 ₽ | 1 ¥ = 13 ₽
                        </p>
                        <p className='header-right__phone'>
                            +7(800)12345-67
                            <span className='header-right__phone_call'>Звонки по России бесплатны</span>
                        </p>
                    </div>
                </div>
                <div className='header-wrapper header-wrapper_responsive'>
                        <ul className='header-links'>
                            <li className='header-links__items'>
                                <a className='header-links__link' href='#calculator'>Калькулятор</a>
                            </li>
                            <li className='header-links__items'>
                                <a className='header-links__link' href='#advantages'>О нас</a>
                            </li>
                            <li className='header-links__items'>
                                <a className='header-links__link' href='#guarantee'>Гарантии</a>
                            </li>
                            <li className='header-links__items'>
                                <a className='header-links__link' href='#reviews'>Отзывы</a>
                            </li>
                        </ul>
                    <button className='header__btn'>Оставить заявку</button>
                </div>
                <p className='header-right__currency_responsive'>
                    Доставляем товары <br />из заграницы в Россию
                    <span className='header__transfer'>
                        Стоимость от 550 рублей <br /> за заказ
                    </span>
                    <span className='header__transfer'>
                        1 $ = 93 ₽ | 1 € = 99 ₽ | 1 ¥ = 13 ₽
                    </span>
                </p>
            </div>
        </header>  
        <header className='header-section header-section_responsive'>
            <div className='container'>
                <div className='header-wrapper'>
                    <div className='header-left'>
                        <img className='header-left__logo' src={logo} alt='logo' loading='lazy'/>
                        <h1 className='header-left__title'>FromBoard Delivery</h1>
                    </div>
                    <div className='header-right'>
                        <p className='header-right__currency'>
                            Доставляем товары из заграницы в Россию
                            <br className='header__transfer'/>
                            Стоимость от 550 рублей за заказ
                            <br className='header__transfer'/>
                            1 $ = 93 ₽ | 1 € = 99 ₽ | 1 ¥ = 13 ₽
                        </p>
                        <p className='header-right__phone'>
                            +7(800)12345-67
                        </p>
                    </div>
                    <button className='header-right__btn_responsive' onClick={() => {
                        handleBurgerClick();
                        setMenuActive(!menuActive)
                    }}>
                        <span className='header-right__menu'></span>
                    </button>
                </div>
                {menuActive && (
                    <div className='responsive-menu'>
                    <div className='header-wrapper header-wrapper_responsive'>
                        <ul className='header-links'>
                            <li className='header-links__items'>
                                <a className='header-links__link' href='#calculator'>Калькулятор</a>
                            </li>
                            <li className='header-links__items'>
                                <a className='header-links__link' href='#advantages'>О нас</a>
                            </li>
                            <li className='header-links__items'>
                                <a className='header-links__link' href='#guarantee'>Гарантии</a>
                            </li>
                            <li className='header-links__items'>
                                <a className='header-links__link' href='#reviews'>Отзывы</a>
                            </li>
                        </ul>
                    <button className='header__btn'>Оставить заявку</button>
                </div>
                <p className='header-right__currency_responsive'>
                    Доставляем товары <br />из заграницы в Россию
                    <span className='header__transfer'>
                        Стоимость от 550 рублей <br /> за заказ
                    </span>
                    <span className='header__transfer'>
                        1 $ = 93 ₽ | 1 € = 99 ₽ | 1 ¥ = 13 ₽
                    </span>
                </p>
                    </div>
                )}
            </div>
        </header>
    </>
  )
}

export default Header