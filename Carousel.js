import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather' 


const Carousel = ({children: slides, autoSlide=false, autoSlideInterval = 1000 }) => {
    const [curr, SetCurr] = useState(0)

    const prev = () => SetCurr ((curr) => (curr === 0 ? slides.length-1 : curr-1 ))

const next = () => SetCurr ((curr) => (curr === slides.length-1 ? 0 : curr + 1))

useEffect (()=> {
    if (!autoSlide) return
    const slideInterval=setInterval(next,autoSlideInterval)
    return()=>clearInterval(slideInterval)
},[])

  return (
    <>
    <div className='overflow-hidden'>
        <div className='flex transition-transform ease-out duration-100' style={{transform:`translateX(-${curr * 100}%)`}}>
            {slides}
        </div>
    </div>
    <div className='absolute inset-0 flex items-center justify-between p-4'>
        <button onClick={prev} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
            <ChevronLeft />
        </button>
        <button onClick={next} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
            <ChevronRight />
        </button>
    </div>
    </>
  )
}

export default Carousel