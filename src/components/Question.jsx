import React from 'react'

const Question = () => {
  return (
    <section className='question-section'>
        <div className='container'>
            <h3 className='question__title'>Остались вопросы?</h3>
            <form className='question-form'>
                <input className='question-form__input' type='text' placeholder='Имя'/>
                <input className='question-form__input' type='text' placeholder='Почта'/>
                <input className='question-form__input' type='text' placeholder='Телефон'/>
                <input className='question-form__input' type='text' placeholder='Тема вопроса'/>
                <textarea className='question-form__input_last' type='text' placeholder='Сообщение'/>
                <button className='question-form__btn'>Оставить заявку</button>
            </form>
        </div>
    </section>
  )
}

export default Question