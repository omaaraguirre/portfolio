import { useState } from 'react'
import { Switch, Tooltip, Zoom } from '@mui/material'
import { Html, Css, Javascript, Php, Sql, MongoDB, React, Express, Nodejs, Tailwindcss, Git } from '../helpers/icons'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Techs = () => {
  const [showAll, setShowAll] = useState(false)

  const techs = [
    { name: 'HTML', icon: <Html /> },
    { name: 'CSS', icon: <Css /> },
    { name: 'Tailwind CSS', icon: <Tailwindcss /> },
    { name: 'PHP', icon: <Php /> },
    { name: 'JavaScript', icon: <Javascript /> },
    { name: 'React', icon: <React /> },
    { name: 'Express', icon: <Express /> },
    { name: 'SQL', icon: <Sql /> },
    { name: 'MongoDB', icon: <MongoDB /> },
    { name: 'Git', icon: <Git /> },
    { name: 'Nodejs', icon: <Nodejs /> }
  ]

  const sliderSettings = {
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1500,
    arrows: false,
    swipeToSlide: true,
    cssEase: 'linear',
    easing: 'linear',
    slidesToScroll: 1,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  }

  const techsRender = techs.map(({ name, icon }) => (
    <Tooltip
      key={name}
      title={name}
      arrow
      TransitionComponent={Zoom}
      className='cursor-pointer'
    >
      <div data-aos='zoom-out-up'>
        {icon}
        <span className='sr-only'>{`${name} logo`}</span>
      </div>
    </Tooltip>
  ))

  return (
    <section className='font-montserrat flex flex-col py-14 bg-zinc-900'>
      <div className='relative w-11/12 max-w-5xl mx-auto'>
        <div className='flex items-center absolute top-24 min-[500px]:top-16 right-5 transition-all duration-500'>
          <span className='font-ubuntu text-white/70 mr-2'>Show All</span>
          <Switch color='error' onChange={(e) => setShowAll(e.target.checked)} />
        </div>
        <h2 className='flex flex-col text-3xl md:text-4xl text-center font-bold  text-zinc-200 mb-20 transition-all duration-500'>
          <span className='text-white/70 uppercase text-xs md:text-sm'>These are</span>
          Technologies I've worked with
        </h2>
        {
          showAll
            ? (
              <div className='w-11/12 max-w-5xl mx-auto grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-16'>
                {techsRender}
              </div>
              )
            : (
              <Slider {...sliderSettings} className='w-11/12 max-w-5xl mx-auto'>
                {techsRender}
              </Slider>
              )
        }
      </div>
    </section>
  )
}
export default Techs
