import React, { useEffect } from "react";
import HeroSection from "../Components/HeroSection";
import Categories from "../Components/Categories";
import MetaData from "../Components/MetaData";
import AllProducts from "../Components/AllProducts";
import { getProducts } from "../Actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Components/layout/Footer/Footer";
import Products from "../function/product";
import Loading from "../Components/layout/Loading/Loading";
import Nav from "../Components/Nav";
import Nav2 from "../Components/layout/Nav/Nav2";
import { ParallaxScroll } from "../Components/Celebrity";
import {StickyScrollRevamp} from "../Components/StickyScroll";

const Home = () => {
  const dispatch = useDispatch();

  const { loading, error, products, productCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="w-full" style={{ height: "max-content" }}>
          <Nav2 />
          <MetaData title="Fashniii" />
          <HeroSection />
          <Categories />
          <StickyScrollRevamp />
          <ParallaxScroll />
          {/* <AllProducts/> */}
          <div className="w-[95%] mx-auto py-8">
            <h2 className="heading my-1"> Popular Products</h2>
            <div className="Products flex flex-wrap">
              {products &&
                products.map((product) => <Products product={product} />)}
            </div>
          </div>

          <Footer />
        </div>
      )}
    </>
  );
};

// const Content = styled.div`
// padding-top: 2rem;
//   height: 50rem;
//   width: 100vw;
//   /* background-color: yellow; */
//   /* position: relative; */
// `
export default Home;
