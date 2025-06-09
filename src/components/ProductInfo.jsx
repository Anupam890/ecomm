import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../utils/data";

const ProductInfo = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  const [selectedSize, setSelectedSize] = useState("28");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div className="p-6 text-red-500">Product not found.</div>;
  }

  const handleQuantityChange = (type) => {
    if (type === "decrease" && quantity > 1) setQuantity(quantity - 1);
    if (type === "increase") setQuantity(quantity + 1);
  };

  const totalPrice = (product.price * quantity).toFixed(2);

  return (
    <div className="p-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="bg-gray-100 rounded-md h-[400px] flex items-center justify-center">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full object-contain"
        />
      </div>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-xl text-blue-600 font-semibold">₹{product.price}</p>

        <div>
          <h3 className="font-medium">Description</h3>
          <p className="text-gray-600">Premium denim jeans with a comfortable fit.</p>
        </div>

        <div>
          <h3 className="font-medium mb-2">Size</h3>
          <div className="flex gap-2">
            {["28", "30", "32", "34", "36"].map((size) => (
              <button
                key={size}
                className={`px-3 py-1 rounded border ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 mt-4">
          <span className="font-medium">Quantity</span>
          <button
            onClick={() => handleQuantityChange("decrease")}
            className="border px-3 py-1 rounded"
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => handleQuantityChange("increase")}
            className="border px-3 py-1 rounded"
          >
            +
          </button>
        </div>

        <div className="mt-6">
          <div className="flex justify-between mb-2">
            <span className="text-lg font-medium">Total:</span>
            <span className="text-lg font-semibold">₹{totalPrice}</span>
          </div>
          <button className="w-full bg-black text-white py-3 rounded hover:opacity-90 transition">
            Add to Cart
          </button>
          <p className="text-green-600 mt-2 text-sm">✓ In Stock - Ready to ship</p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
