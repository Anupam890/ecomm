import React from "react";
import mens from "../assets/men.png";
import women from "../assets/women.png";

const Collection = () => {
  const categories = [
    {
      title: "Mens Clothing",
      para: "Discover the latest trends",
      image: mens,
    },
    {
      title: "Womens Clothing",
      para: "Explore our exclusive collection",
      image: women,
    },
  ];

  return (
    <div>
      <div className="flex flex-col items-center justify-center py-10">
        <h1 className="text-4xl font-bold mb-4">Shop by Category</h1>
        <p className="text-lg text-gray-600">
          Explore our collection of amazing items!
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className=" cursor-pointer flex flex-col items-center bg-white shadow-md rounded-lg p-6 w-[300px]"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-48 h-48 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
            <p className="text-gray-500 text-center">{category.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
