import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import Loading from "../../Components/layout/Loading/Loading";
import Product from "../../function/product";
import { getProducts } from "../../Actions/productAction";
import { useParams } from "react-router-dom";
import { Pagination } from "@mui/material";
import Filter from "../../Components/layout/Filter/Filter";

const Products = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, products, error, productsCount, resultPerPage } =
    useSelector((state) => state.products);

  const params = useParams();
  const keyword = params.keyword;
  const [price, setPrice] = useState([0, 10000]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    dispatch(getProducts(keyword, currentPage, price));
  }, [dispatch, keyword, currentPage, price]);

  const handlePriceValue = (value) => {
    setPrice(value);
  };
  const handleCategoryValue = (value) => {
    setCategory(value);
  };

  const productVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="container mx-auto p-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <Filter
              priceValue={handlePriceValue}
              category={handleCategoryValue}
            />

            <div className="flex-1">
              <h1 className="text-3xl font-bold text-center mb-6">Products</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products &&
                  products.map((product) => (
                    <motion.div
                      key={product._id}
                      className="rounded-xl"
                      variants={productVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 0.5 }}
                    >
                      <Product product={product} />
                    </motion.div>
                  ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Pagination
              count={Math.ceil(productsCount / resultPerPage)}
              page={currentPage}
              onChange={(e, newPage) => setCurrentPage(newPage)}
              className="bg-white shadow rounded"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
