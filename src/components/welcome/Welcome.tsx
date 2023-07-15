import React from 'react'
import './Welcome.css'
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import { WelcomeCarousel } from './WelcomeCarousel';
import logo from '../../assets/qt=q_95.webp'; // with import

export const Welcome = () => {
  return (
    <div className='welcome'>
        <WelcomeCarousel />
    

        <div className='content'> 
                <img src={logo}/>
                <p className='content-p'>"El hallazgo afortunado de un buen libro puede cambiar el destino de un alma". Marcel Prévost</p>
                <a href="/home">                
                  <Button colorScheme='orange' variant='solid'>
                          Sobre Nosotros
                  </Button>
                </a>

        </div>
    </div>
  )
}
