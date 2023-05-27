import "./Home.css";
import Footer from "../Footer/Footer";
import Carousel from "../Carousel/Carousel";
import TopProducts from "../TopProducts/TopProducts";
import TopCategory from "../TopCategory/TopCategory";
import FixedBanner from "../FixedBanner/FixedBanner";
// import QueryForm from "../QueryForm/QueryForm";
import Appbar from "../Header/Appbar";
import NewProduct from "../newProduct/NewProduct";

export default function Home() {
  return (
    <>
      <Appbar />
      <Carousel />
      <TopProducts />
      <FixedBanner />
      {/* <TopCategory /> */}
      <NewProduct />
      {/* <QueryForm /> */}
      <Footer />
    </>
  );
}
