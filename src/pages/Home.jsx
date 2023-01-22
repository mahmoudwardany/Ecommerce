
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbars from "../components/Navbars";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import SlideItems from "../components/SlideItems";
const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbars />
      <SlideItems />
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;