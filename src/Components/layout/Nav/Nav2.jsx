import React from "react";
import { CiShop, CiHeart, CiUser, CiShoppingCart } from "react-icons/ci";
import { motion } from "framer-motion";
import SearchBox from "../SearchBox/SearchBox";
import "./nav.css";
import { useParams, useLocation, Link } from "react-router-dom";

const Nav2 = ({ show }) => {
  const params = useParams();
  console.log(params.page);

  const location = useLocation();
  console.log(location);

  // class="{'home-page': $route.path === '/', 'other-page': $route.path !== '/'}"
  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          ease: "easeOut",
        }}
        className={`navDiv ${
          location.pathname === "/" ? "home-page" : "other-page"
        }`}
      >
        <ul className="ulStyle ">
          <li className="navLi2 navheading font-nunito">
            {/* <CiShop className='text-3xl' /> */}
            <p className="text-base font-nunito">
              <Link to="/">Home</Link>
            </p>
          </li>
          <li className="navLi2 navheading">
            {/* <CiHeart className='text-3xl'/> */}
            <p className="text-base">
              <Link to="/products">Products</Link>
            </p>
          </li>
          <li className="navLi2 navheading">
            {/* <CiUser className='text-3xl'/> */}
            <p className="text-base">
              <Link to="/login">Login</Link>
            </p>
          </li>
          <li className="navLi2 navheading">
            {/* <CiShoppingCart className='text-3xl' /> */}
            <p className="text-base">
              <Link to="/contact">Bot</Link>
            </p>
          </li>

          {/* <li className='navLi2 navheading'> */}

          {/* </li> */}
        </ul>

        <div className="relative right-[35rem]">
          <SearchBox />
        </div>
      </motion.div>
    </>
  );
};

export default Nav2;

// {position:"absolute",right:0,top:0,zIndex:1000}
