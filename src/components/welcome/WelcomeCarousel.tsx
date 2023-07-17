import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './WelcomeCarousel.css'

export const WelcomeCarousel = () => {
  return (
    <Carousel className='carousel' autoPlay showIndicators={false} showStatus={false} interval={2000} showThumbs={false} infiniteLoop showArrows={false}>
        <div className='background-image image1'>
        </div>
        <div className='background-image image2'>
        </div>
        <div className='background-image image3'>
        </div>
        <div className='background-image image4'>
        </div>
        <div className='background-image image5'>
        </div>

    </Carousel>
  )
}
