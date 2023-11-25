import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { reviews } from '../mockData';
import 'swiper/css';
import 'swiper/css/navigation';
import left from '../assets/left.png'
import right from '../assets/right.png'
import quotes from '../assets/Quotes1.png'


const Reviews = () => {
  const swiperRef = useRef(); 

  return (
    <section className='reviews-section' id='reviews'>
        <div className='container'>
            <h3 className='reviews__title'>Отзывы</h3>
            <div className='reviews'>
                <button onClick={() => swiperRef.current?.slidePrev()} className='reviews__left' >
                    <img className='reviews__img' src={left}/>
                </button>
                <Swiper 
                    slidesPerView={1}
                    spaceBetween={24}         
                    breakpoints={{
                        1300: {
                            slidesPerView: 2,
                        },
                    }}
                    modules={[Navigation]} 
                    loop={true}
                    className="mySwiper"
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >   
                    <div className='reviews-wrapper'>   
                        {reviews.map((review) => 
                            <SwiperSlide key={review.id}>
                                <div className='reviews-item'>
                                    <strong className='reviews-item__text'>{review.text}</strong>
                                    <div className='reviews-item-container'>
                                        <p className='reviews-item__author'>{review.name}</p>
                                        <img className='reviews-item__quotes' src={quotes} alt='quotes' loading='lazy'/>
                                    </div>   
                                </div>
                            </SwiperSlide>
                        )}
                    </div>
                </Swiper>
                <button onClick={() => swiperRef.current?.slideNext()} className='reviews__right ' >
                    <img className='reviews__img' src={right}/>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Reviews