import React from 'react'
import Products from '../function/product'
import { motion } from 'framer-motion'

const product = {
    name:"T-shirt",
    // images:[{url:"https://images.pexels.com/photos/1232459/pexels-photo-1232459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}],
    images:[{url:"https://images.pexels.com/photos/9489155/pexels-photo-9489155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}],
    price:"₹3000",
    _id:"hellowJi"

}
const AllProducts = () => {
  return (
    <div className='w-[95%] mx-auto my-4 '>
      <h2 className='heading my-4'>All Products</h2>

        
    </div>
  )
}

export default AllProducts