import React from 'react'
import './Sponsors.scss'
import Title from '../../../components/title/Title'
import img1 from '../../../assets/img/spons1.svg'
import img2 from '../../../assets/img/spons2.svg'
import img3 from '../../../assets/img/spons3.svg'
import img4 from '../../../assets/img/spons4.svg'

function Sponsors() {
  return (
    <section className='home_sponsors'>
      <Title title1="Наши клиенты" title2="Партнеры"/>
      <div className="home_sponsors_holder">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
      </div>
    </section>
  )
}

export default Sponsors
