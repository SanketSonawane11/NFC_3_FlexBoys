import React from 'react'
import Logo from './layout/Logo'
import Nav from './Nav'
// import CyanBlob from "../assets/CyanBlob"
// import OrangeBlob from "../assets/OrangeBlob"
// import Model from "../assets/Model"
// import styled from 'styled-components'
import HeroContent from './HeroContent'

const HeroSection = () => {
  return (
    <>
    <div className='heroSection'>
      <Logo/>
      <HeroContent/>
      <Nav/>
    </div>

  
    </>
    
  )
}



export default HeroSection