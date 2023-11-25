import React from 'react'
import main1 from '../assets/main.png'


const Calculator = ({classBlur}) => {
  return (
    <section className={`calculator-section ${classBlur}`} id='calculator'>
        <div className='container'>
            <div className='calculator-wrapper'>
                <div className='calculator-left'>
                    <div>
                        <h2 className='calculator-left__title'>
                            Без проблемная доставка купленных вещей из США, Европы и Азии в Россию
                        </h2>
                        <p className='calculator-left__text'>
                            Сэкономьте на покупках и наслаждайтесь мировыми брендами — наш
                            сервис позволяет вам легко и удобно заказывать товары со 
                            всего мира и получать их в России
                        </p>
                    </div>
                    <img className='calculator-left__img' src={main1} alt='box' loading='lazy'/>
                </div>
                <div className={`calculator-right `}>
                    <form className='calculator-right__form'>
                        <h3 className='calculator-right__title'>Калькулятор доставки</h3>
                        <p className='calculator-right__text'>
                            Посчитайте, сколько будет стоить перевозка покупки из-за рубежа
                        </p>
                        <div className='calculator-right-wrapper'>
                            <input className='calculator-right__input_name' type='text' placeholder='Имя'/>
                            <input className='calculator-right__input_mail' type='text' placeholder='Почта'/>
                            <input className='calculator-right__input_phone' type='number' placeholder='Телефон'/>
                            <input className='calculator-right__input_area' type='number' placeholder='Общая площадь, м²'/>
                            <input className='calculator-right__input_weight' type='number' placeholder='Вес, кг'/>
                            <input className='calculator-right__input_country' type='text' placeholder='Страна покупки'/>
                            <input className='calculator-right__input_city' type='text' placeholder='Город покупки'/>
                            <input className='calculator-right__input_delivery' type='text' placeholder='Область доставки'/>
                            <input className='calculator-right__input_delivery-city' type='text' placeholder='Город доставки'/>
                            <button className='calculator-right__btn'>Заказать расчёт</button>
                        </div>
                    </form>
                </div>
            </div>      
        </div>
    </section>
  )
}

export default Calculator