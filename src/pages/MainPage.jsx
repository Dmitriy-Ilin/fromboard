import React, { useState } from 'react'
import Header from '../components/Header'
import Calculator from '../components/Calculator'
import Advantages from '../components/Advantages'
import Guarantee from '../components/Guarantee'
import Reviews from '../components/Reviews'
import Question from '../components/Question'
import Footer from '../components/Footer'

const MainPage = () => {
  const [classBlur, setClassBlur] = useState('');

  const handleBurgerClick = () => {
    classBlur === 'blur' ? setClassBlur('') : setClassBlur('blur')
  }

  return (
    <div>
      <Header handleBurgerClick={handleBurgerClick}/>
      <Calculator handleBurgerClick={handleBurgerClick}/>
      <Advantages handleBurgerClick={handleBurgerClick}/>
      <Guarantee handleBurgerClick={handleBurgerClick}/>
      <Reviews handleBurgerClick={handleBurgerClick}/>
      <Question handleBurgerClick={handleBurgerClick}/>
      <Footer handleBurgerClick={handleBurgerClick}/>
    </div>
  )
}

export default MainPage