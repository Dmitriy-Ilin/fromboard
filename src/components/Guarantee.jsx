import React from 'react'
import sertificate1 from '../assets/sertificate1.png'
import sertificate2 from '../assets/sertificate2.png'
import sertificate3 from '../assets/sertificate3.png'
import sertificate4 from '../assets/sertificate4.png'


const Guarantee = () => {
  return (
    <section className='guarantee-section' id='guarantee'>
        <div className='container'>
            <h2 className='guarantee__title'>Гарантии качества</h2>
            <p className='guarantee__text'>
                Наши гарантии качества включают в себя полный спектр документов, 
                необходимых для ввоза и вывоза товаров, а также для успешного бизнеса на мировом рынке. 
                Мы предоставляем вам надёжность и уверенность
            </p>
            <div className='guarantee-wrapper'>
                <div className='guarantee-item'>
                    <img className='guarantee-item__img' src={sertificate2} alt='guarantee' loading='lazy'/>
                    <strong className='guarantee-item__text'>Свидетельство о регистрации в РФ</strong>
                </div>
                <div className='guarantee-item'>
                    <img className='guarantee-item__img' src={sertificate1} alt='guarantee' loading='lazy'/>
                    <strong className='guarantee-item__text'>Свидетельство о регистрации в США</strong>
                </div>
                <div className='guarantee-item'>
                    <img className='guarantee-item__img' src={sertificate4} alt='guarantee' loading='lazy'/>
                    <strong className='guarantee-item__text'>Свидетельство о регистрации в Китае</strong>
                </div>
                <div className='guarantee-item'>
                    <img className='guarantee-item__img' src={sertificate3} alt='guarantee' loading='lazy'/>
                    <strong className='guarantee-item__text'>Свидетельство о регистрации в Великобритании</strong>
                </div>
            </div>
            <button className='guarantee__btn'>Показать больше документов</button>
        </div>
    </section>
  )
}

export default Guarantee