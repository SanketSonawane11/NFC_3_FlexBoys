import React from 'react';
import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import { motion } from 'framer-motion';

const Products = ({ product }) => {
    const randomDecimal = Math.random();
    const discountPrice = Math.round(product.price * randomDecimal);
    const discountPercentage = Math.round((discountPrice / product.price) * 100);

    const options = {
        edit: false,
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 16 : 18,
        value: product.rating,
        isHalf: true,
    };

    console.log(product);

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white shadow-md rounded-lg overflow-hidden w-[18rem] h-[24rem] m-4 cursor-pointer hover:shadow-lg"
        >
            <Link to={`/product/${product._id}`} className="block h-full">
                <div className="relative w-full h-[60%] overflow-hidden">
                    <img
                        src={product.images[0].url}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                </div>
                <div className="p-4 flex flex-col h-[40%]">
                    <p className="text-xs text-gray-500 mb-1">{product.brandName}</p>
                    <h6 className="text-lg font-semibold truncate mb-2">{product.name}</h6>
                    <div className="flex items-center mb-2">
                        <h5 className="text-xl font-bold text-green-600">Rs. {product.price}</h5>
                    </div>
                    <div className="flex items-center gap- mt-auto">
                        Ratings:
                        <ReactStars {...options} />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default Products;
