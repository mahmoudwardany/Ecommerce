import silde1 from '../assets/1.webp'
import silde2 from '../assets/2.webp'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const SlideItems = () => {
  return (
    <>
     <div className='row g-0 my-5'>
        <div className='col-md-12'>
        <OwlCarousel className='owl-theme' autoplay={true} autoplayTimeout={3000} loop items={1}>

            <img src={silde1} height={727} className='w-100'alt=''/>
            <img src={silde2} height={600} className='w-100'alt=''/>
            </OwlCarousel>
        </div>
</div>
    </>
  )
}

export default SlideItems