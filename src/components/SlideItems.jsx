import silde1 from '../assets/portrait-handsome-smiling-stylish-young-man-model-dressed-jeans-clothes-fashion-man_158538-5030.webp'
import silde2 from '../assets/2.webp'
import slide3 from '../assets/1.webp'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const SlideItems = () => {
  return (
    <>
     <div className='row g-0 my-5'>
        <div className='col-md-9 col-sm-12 '>
        <OwlCarousel className='owl-theme' autoplay={true} autoplayTimeout={3000} loop items={1}>
           <img src={silde1} height={400} className='w-100 img1'alt=''/>
            <img src={silde2} height={400} className='w-100 img1'alt=''/>
            <img src={slide3} height={400} className='w-100 img1'alt=''/>
            </OwlCarousel>
        </div>
        <div className='col-md-3  slideImg'>
        <img src={silde2} height={200} className='w-100 img1'alt=''/>
            <img src={slide3} height={200} className='w-100 img1'alt=''/>
        </div>
</div>
    </>
  )
}

export default SlideItems