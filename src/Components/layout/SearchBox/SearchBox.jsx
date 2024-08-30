import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./searchBox.css";
import { PlaceholdersAndVanishInput } from "../../ui/Vanish-Input";

const SearchBox = () => {
  const [keyword, setKeyword] = useState();
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
    } else {
      navigate("/products");
    }
  };

  const placeholders = [
    "Bella - Labrador Retriever",
    "Max - German Shepherd",
    "Charlie - Golden Retriever",
    "Lucy - Beagle",
    "Daisy - Bulldog",
    "Milo - Poodle",
    "Bailey - Boxer",
    "Coco - Dachshund",
    "Luna - Siberian Husky",
    "Rocky - Rottweiler",
    "Zoe - Shih Tzu",
    "Buddy - Australian Shepherd",
  ];

  const handleChange = (e) => setKeyword(e.target.value);

  return (
    <div className="h-[40rem] flex flex-col justify-center  items-center px-4">
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        Ask Aceternity UI Anything
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={submitHandler}
      />
    </div>
  );
};

export default SearchBox;
