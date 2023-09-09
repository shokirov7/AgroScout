import React from 'react'
import './Home.scss'
import Hero from './hero/Hero'
import Proud from './proud/Proud'
import Offer from './offer/Offer'
import HomeService from './service/HomeService'
import HomeAbout from './about/HomeAbout'
import Area from './area/Area'
import Sponsors from './sponsors/Sponsors'
import HomeNews from './news/HomeNews'

function Home() {
  return (
    <div className='Home'>
      <Hero/>
      <Proud/>
      <Offer/>
      <HomeService/>
      <HomeAbout/>
      <Area/>
      <Sponsors/>
      <HomeNews/>
    </div>
  )
}

export default Home
