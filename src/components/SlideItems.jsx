import imgSlide1 from '../assets/1.webp'
import imgSlide2 from '../assets/2.webp'
import { Carousel } from 'react-bootstrap'

const SlideItems = () => {
  return (
    <>

<Carousel >
      <Carousel.Item interval={1500}>
        <img
          className="d-block h-50 col-sm-6 col-md-12"
          src={imgSlide1}
          alt="First slide"
        />
    
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block h-50 col-sm-6 col-md-12"
          src={imgSlide2}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default SlideItems