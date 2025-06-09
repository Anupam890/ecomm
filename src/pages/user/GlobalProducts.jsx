import React, { useState, useEffect } from "react";
import { products } from "../../utils/data";
import { useParams, useNavigate } from "react-router-dom";

const GlobalProducts = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const categoryMap = {
    mens: "Men",
    womens: "Women",
    all: "All",
  };

  const normalizedCategory = categoryMap[category?.toLowerCase()] || "All";

  const [selectedCategory, setSelectedCategory] = useState(normalizedCategory);
  const [sortOption, setSortOption] = useState("name-asc");
  const [priceRange, setPriceRange] = useState([0, 10000]);

  // Local UI state for filters before applying
  const [tempCategory, setTempCategory] = useState(normalizedCategory);
  const [tempSortOption, setTempSortOption] = useState("name-asc");
  const [tempPriceRange, setTempPriceRange] = useState([0, 10000]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const categories = ["All", "Men", "Women"];

  useEffect(() => {
    setTempCategory(normalizedCategory);
    setSelectedCategory(normalizedCategory);
  }, [category]);

  useEffect(() => {
    applyFilter();
  }, [selectedCategory, sortOption, priceRange]);

  const applyFilter = () => {
    let filtered =
      selectedCategory === "All"
        ? products
        : products.filter((p) => p.category === selectedCategory);

    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

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

    setFilteredProducts(filtered);
  };

  const handleApply = () => {
    setSelectedCategory(tempCategory);
    setSortOption(tempSortOption);
    setPriceRange(tempPriceRange);
  };

  const handleClearAll = () => {
    setTempCategory("All");
    setTempSortOption("name-asc");
    setTempPriceRange([0, 10000]);
    setSelectedCategory("All");
    setSortOption("name-asc");
    setPriceRange([0, 10000]);
  };

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Sidebar */}
      <aside className="md:col-span-1 space-y-6">
        <div>
          <h2 className="font-semibold text-lg mb-2">Filter by Category</h2>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  className={`text-left w-full p-2 rounded-md ${
                    tempCategory === cat
                      ? "bg-blue-100"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => setTempCategory(cat)}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Filter by Price</h2>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={tempPriceRange[0]}
              onChange={(e) =>
                setTempPriceRange([+e.target.value, tempPriceRange[1]])
              }
              className="border p-1 w-20 rounded"
              placeholder="Min"
            />
            <span>-</span>
            <input
              type="number"
              value={tempPriceRange[1]}
              onChange={(e) =>
                setTempPriceRange([tempPriceRange[0], +e.target.value])
              }
              className="border p-1 w-20 rounded"
              placeholder="Max"
            />
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Sort Products</h2>
          <select
            value={tempSortOption}
            onChange={(e) => setTempSortOption(e.target.value)}
            className="w-full border p-2 rounded-md"
          >
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
          </select>
        </div>

        <div>
          <button
            onClick={handleApply}
            className="mt-4 w-full bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-black transition"
          >
            Apply Filter
          </button>
          <button
            onClick={handleClearAll}
            className="mt-4 w-full bg-gray-400 text-black px-4 py-2 rounded-md transition"
          >
            Clear All
          </button>
        </div>
      </aside>

      {/* Products Section */}
      <main className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            No products found for the selected filters.
          </p>
        )}

        {filteredProducts.map((product) => (
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
            <button
              onClick={() => navigate(`/product/${product.id}`)}
              className="mt-4 cursor-pointer w-full bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-black transition"
            >
              View Product
            </button>
          </div>
        ))}
      </main>
    </div>
  );
};

export default GlobalProducts;
