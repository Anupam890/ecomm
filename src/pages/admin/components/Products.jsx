import React, { useState } from "react";
import { products } from "../../../utils/data";

const Products = () => {
  const [category, setCategory] = useState("");
  const [sortOption, setSortOption] = useState("");

  let filteredProducts = category
    ? products.filter((item) => item.category === category)
    : [...products];

  if (sortOption === "lowToHigh") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "highToLow") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === "available") {
    filteredProducts = filteredProducts.filter((item) => item.available);
  } else if (sortOption === "outOfStock") {
    filteredProducts = filteredProducts.filter((item) => !item.available);
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Filter by Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">All Categories</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="sort"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Sort by
          </label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Default</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
            <option value="available">Available</option>
            <option value="outOfStock">Out of Stock</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left py-3 px-4 border-b border-gray-300">Image</th>
              <th className="text-left py-3 px-4 border-b border-gray-300">Name</th>
              <th className="text-left py-3 px-4 border-b border-gray-300">Description</th>
              <th className="text-left py-3 px-4 border-b border-gray-300">Category</th>
              <th className="text-left py-3 px-4 border-b border-gray-300">Price (₹)</th>
              <th className="text-left py-3 px-4 border-b border-gray-300">Availability</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr
                key={product.productId}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="py-3 px-4 border-b border-gray-300">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                </td>
                <td className="py-3 px-4 border-b border-gray-300 font-semibold">
                  {product.name}
                </td>
                <td className="py-3 px-4 border-b border-gray-300 text-gray-600 max-w-xs">
                  {product.description}
                </td>
                <td className="py-3 px-4 border-b border-gray-300">{product.category}</td>
                <td className="py-3 px-4 border-b border-gray-300 font-bold">₹{product.price}</td>
                <td
                  className={`py-3 px-4 border-b border-gray-300 font-semibold ${
                    product.available ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {product.available ? "In Stock" : "Out of Stock"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
