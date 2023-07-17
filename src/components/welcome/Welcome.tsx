
import { motion } from 'framer-motion';
import './Welcome.css'
import { Button } from '@chakra-ui/react';

import { WelcomeCarousel } from './WelcomeCarousel';
import logo from '../../assets/qt=q_95.webp'; // with import

export const Welcome = () => {
  return (
    <motion.div 
      className='welcome'
      initial={{width:0}}
      animate={{width:"100vw"}}
      exit={{x:window.innerWidth, transition: {duration:0.1}}}
    >
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
    </motion.div>
  )
}
