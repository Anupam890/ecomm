import React, { useState, useMemo } from "react";
import { products } from "../../utils/data";
import { useParams } from "react-router-dom";

const GlobalProducts = () => {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(category || "All");
  const [sortOption, setSortOption] = useState("name-asc");

  const categories = ["All", "Men", "Women"];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = selectedCategory === "All"
      ? products
      : products.filter(p => p.category === selectedCategory);

    switch (sortOption) {
      case "price-asc":
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case "name-desc":
        filtered = [...filtered].sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [selectedCategory, sortOption]);

  return (
    <div className="p-6">
      <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border p-2 rounded-md"
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border p-2 rounded-md"
        >
          <option value="name-asc">Sort by Name (A-Z)</option>
          <option value="name-desc">Sort by Name (Z-A)</option>
          <option value="price-asc">Sort by Price (Low to High)</option>
          <option value="price-desc">Sort by Price (High to Low)</option>
        </select>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAndSortedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-lg p-4 shadow hover:shadow-md transition"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">₹{product.price}</p>
            <p className="text-sm text-gray-500">{product.category}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default GlobalProducts;
