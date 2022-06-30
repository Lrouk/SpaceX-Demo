import React,{useState} from 'react'
import Video from '../../videos/space.mp4'
import { Button } from '../ButtonElements'
import {Herocontainer,HeroBg, VideoBg,HeroContent,HeroH1, HeroP,HeroBtnWrapper,ArrowForward,ArrowRight, Herop1 } from './HeroElements'

const HeroSection = () => {
  const[hover,setHover] = useState(false)

const onHover = () =>{
  setHover(!hover)
}
  return (
    <Herocontainer id="home">
    <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='space/mp4'/>
    </HeroBg>
    <HeroContent>
    <HeroH1>SpaceX</HeroH1>
    <HeroP>“You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars.”</HeroP>
        <Herop1>
        -Elon Musk
          </Herop1>            

    <HeroBtnWrapper>
      <Button to= "signup" omMouseEnter={onHover} onMouseLeave={onHover}
      primary="true" dark="true" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
      
    
        Get start{hover ? <ArrowForward/> : <ArrowRight/>}
      </Button>
    </HeroBtnWrapper>
     
    </HeroContent>
    </Herocontainer>
  )
}

export default HeroSection