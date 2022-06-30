import React from 'react'
import Icon1 from '../../images/falcon9.jpg';
import Icon2 from '../../images/buildFacility.webp';
import Icon3 from '../../images/startBase.jpg';

import {ServicesContainer, ServicesH1,ServicesWrapper,ServicesCard,ServicesIcon,ServicesH2,ServicesP } from './ServicesElements'


const Services = () => {
  return (
    <ServicesContainer id="services">
    <ServicesH1>Our Services</ServicesH1>
    <ServicesWrapper>
        <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2>FALCON 9</ServicesH2>
            <ServicesP>Falcon 9 is a partially reusable medium-lift launch vehicle that is produced by SpaceX.</ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon2}/>
            <ServicesH2>BUILD FACILITY</ServicesH2>
            <ServicesP>SpaceX designs and builds its reusable rockets at its headquarters in Hawthorne, California.</ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon3}/>
            <ServicesH2>STARBASE</ServicesH2>
            <ServicesP>SpaceX is honored to launch from Kennedy Space Center’s historic Launch Complex 39A.</ServicesP>
        </ServicesCard>
    </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services