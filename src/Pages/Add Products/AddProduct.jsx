import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { FileUpload } from "../../Components/ui/FileUpload";
import supabase from "../../utils/supabaseClient";
import Leader from "../../Components/Leader";

const ProductAddPage = () => {
  const [product, setProduct] = useState({
    name: "",
    brandName: "",
    description: "",
    price: "",
    rating: 0,
    stock: 1,
    category: [""],
    images: [],
    reviews: [],
    user: "user",
  });
  const [isLoading, setIsLoading] = useState(false);
  let imageUrl;
  // Handle changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // Handle changes in category inputs
  const handleCategoryChange = (index, value) => {
    const updatedCategories = [...product.category];
    updatedCategories[index] = value;
    setProduct({ ...product, category: updatedCategories });
  };

  // Add a new category input field
  const handleAddCategory = () => {
    setProduct({ ...product, category: [...product.category, ""] });
  };

  // Handle image upload to Supabase and return the URL
  const handleImageUpload = async (file) => {
    try {
      const { data, error } = await supabase.storage
        .from("OG")
        .upload(`images/${Date.now()}_${file.name}`, file, {
          contentType: file.type,
        });

      if (error) throw new Error(error.message);

      const { data: imageUrlData, error: urlError } = supabase.storage
        .from("OG")
        .getPublicUrl(data.path);

      if (urlError) throw new Error(urlError.message);

      // return imageUrlData.publicURL;
      imageUrl=imageUrlData.publicURL;
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Upload images and get URLs
      const imageUrls = await Promise.all(
        product.images.map((file) => handleImageUpload(file))
      );

      // Update product object with image URLs
      const updatedProduct = {
        ...product,
        images: imageUrls.filter((url) => url !== null),
      };

      // Send product data to the backend
      const response = await axios.post(
        "https://fashniii-backend.onrender.com/api/v1/product/new",
        updatedProduct
      );
      console.log("Product added:", response.data);
    } catch (error) {
      console.error("Error adding product:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <Leader />;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white shadow-lg rounded-lg p-6"
      >
        <h1 className="text-2xl font-semibold mb-4">
          Add New Pet for Adoption
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <FileUpload
              onChange={(files) => setProduct({ ...product, images:files })}
            />
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Pet Breed
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={product.name}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="brandName"
                className="block text-sm font-medium text-gray-700"
              >
                Institution/Individual Name
              </label>
              <input
                type="text"
                name="brandName"
                id="brandName"
                value={product.brandName}
                onChange={handleChange}
                className="p-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                value={product.description}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                rows="4"
                required
              />
            </div>
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                value={product.price}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Category
              </label>
              {product.category.map((cat, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <input
                    type="text"
                    value={cat}
                    onChange={(e) =>
                      handleCategoryChange(index, e.target.value)
                    }
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                  {index === product.category.length - 1 && (
                    <button
                      type="button"
                      onClick={handleAddCategory}
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      Add More
                    </button>
                  )}
                </div>
              ))}
            </div>
            <div>
              <label
                htmlFor="user"
                className="block text-sm font-medium text-gray-700"
              >
                User
              </label>
              <input
                type="text"
                name="user"
                id="user"
                value={product.user}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Product
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ProductAddPage;
