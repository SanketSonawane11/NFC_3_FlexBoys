// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import './productDetail.css';
// import { useSelector, useDispatch } from 'react-redux';
// import { getProductDetail } from '../../../Actions/productAction';
// import Loading from '../Loading/Loading';
// import ReactStars from "react-rating-stars-component";
// import Btn from '../Btn';
// import Products from '../../../function/product';
// import { getProducts } from '../../../Actions/productAction';
// // import Nav2 from '../Components/layout/Nav/Nav2';

// const ProductDetail = ({ }) => {
//   const params = useParams();
//   console.log(params);
//   const dispatch = useDispatch();
//   const { product, loading } = useSelector((state) => state.productDetail);

//   const options = {
//     edit: false,
//     activeColor: "tomato",
//     size: window.innerWidth < 600 ? 16 : 18,
//     value: product.rating,
//     isHalf: true,
//   }

//   const { error, products, productCount } = useSelector(
//     (state) => state.products
//   );

//   useEffect(() => {
//     dispatch(getProducts());
//   }, [dispatch]);

//   // data.product={"product":{"images":[{}]}}

//   // console.log(data)
//   useEffect(() => {
//     dispatch(getProductDetail(params.id));
//   }, [dispatch, params.id]);

//   // const [productImage,setProductImage] = useState(product.images[0].url)

//   return (
//     <>
//      {/* <Nav2/> */}
//       {loading ? (
//         <Loading />
//       ) : (
//         <div className="productDetail">
//           <div className="productHero">
//             <div className="productPreview">
//               <div className="previewOptions">
//                 {product.images &&
//                   product.images.map((element, index) => (
//                     <img src={element.url} key={element._id} alt={index} />
//                   ))}
//               </div>
//               <div className="productImg">
//                 {product.images &&
//                   // product.images.map((element, index) => (
//                   <img src={product.images[0].url} alt="product" />
//                 }
//                 {/* // ))} */}
//               </div>
//             </div>
//             <div className="productInfo">
//               <div className="detail-box-1">
//                 <h1 className='heading'>{product.name}</h1>
//                 <p>Refernce Number : {product._id}</p>
//               </div>
//               <div className="detail-box-2">
//                 {/* <h1>({product.numOfReviews} Reviews)</h1> */}
//                 <h1 className='heading'>₹{product.price}</h1>
//               </div>
//               <div className="detail-box-3">
//                 <div className="detail-3-1 flex" style={{ alignItems: "center" }}>
//                   {/* <button>-</button>
//                   <input type="number" value={1} style={{ width: "4rem", height: "2rem", background: "#fff", borderRadius: ".5rem", margin: ".25rem", padding: ".25rem" }} />
//                   <button>+</button> */}
//                 </div>
//                 <Btn text="Adopt Me!!" color="bg-black text-white" />
//                 {/* <p className={product.stock < 1 ? 'redText' : 'greenText'}>
//                   Status :{" "}
//                   {product.stock < 1 ? 'Out of Stock' : 'InStock'}
//                 </p> */}
//               </div>
//               <div className="detail-box-4">
//                 <div className="detail-box-4-1">
//                   {/* <ReactStars {...options} /> */}
//                 </div>
//                 <p className='subHeading'>Description:</p><p>{product.description}</p>
//               </div>
//             </div>
//           </div>
//         </div>

//       )}
//       <div className="Products flex flex-wrap pl-12">
//         {products && products.map((product) => <Products product={product} />)}
//       </div>
//     </>
//   );
// };

// export default ProductDetail;

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetail, getProducts } from "../../../Actions/productAction";
import Loading from "../Loading/Loading";
import ReactStars from "react-rating-stars-component";
import Btn from "../Btn";
import Products from "../../../function/product";

const ProductDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const { product, loading } = useSelector((state) => state.productDetail);
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductDetail(params.id));
    dispatch(getProducts());
  }, [dispatch, params.id]);

  const options = {
    edit: false,
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 16 : 18,
    value: product.rating,
    isHalf: true,
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="container mx-auto py-10 px-4">
          <div className="flex min-h-[20rem] border-2 flex-col lg:flex-row">
            {/* Product Images */}
            <div className="lg:w-1/2 m-8 lg:mb-0">
              <div className="flex flex-col space-y-4">
                <div className="w-full h-[100%] overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={product.images && product.images[0].url}
                    alt={product.name}
                    className="w-full h-[100%] object-contain"
                  />
                </div>
                <div className="flex space-x-4">
                  {product.images &&
                    product.images
                      .slice(1)
                      .map((element, index) => (
                        <img
                          key={index}
                          src={element.url}
                          alt={`product-${index}`}
                          className="w-24 h-24 object-cover rounded-lg shadow-md"
                        />
                      ))}
                </div>
              </div>
            </div>

            {/* Product Information */}
            <div className="lg:w-1/2 m-8 lg:pl-12">
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-gray-500 mb-2">
                Reference Number: {product._id}
              </p>
              <h2 className="text-2xl font-semibold text-green-600 mb-6">
                ₹{product.price}
              </h2>

              <div className="flex items-center mb-6">
                <ReactStars {...options} />
              </div>

              <p className="text-lg font-medium mb-4">Description:</p>
              <p className="text-gray-700 mb-6">{product.description}</p>

              <Btn
                text="Adopt Me!!"
                color="bg-black text-white"
                className="py-3 px-6"
              />
            </div>
          </div>
        </div>
      )}

      {/* Related Products */}
      <div className="container mx-auto mt-10 px-4">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="flex flex-wrap -mx-4">
          {products &&
            products.map((product) => (
              <div
                key={product._id}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8"
              >
                <Products product={product} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
