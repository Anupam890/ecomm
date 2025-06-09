import React, { useState } from "react";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    available: false,
  });

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
      setFormData((prev) => ({ ...prev, imageUrl: "" }));
    }
  };

  const addProducts = (e) => {
    e.preventDefault();
    console.log("Product Data:", formData);
    console.log("Uploaded image file:", imageFile);
    alert("Product added (check console)");
    setFormData({
      name: "",
      description: "",
      category: "",
      price: "",
      imageUrl: "",
      available: false,
    });
    setImageFile(null);
    setImagePreview(null);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-5xl font-bold text-center mb-10">Add New Product</h2>

      <form onSubmit={addProducts} className="space-y-6">
        <div>
          <label className="block mb-1 font-medium" htmlFor="name">
            Product Name
          </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            required
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter product name"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter product description"
            rows={4}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select category</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium" htmlFor="price">
            Price (₹)
          </label>
          <input
            id="price"
            name="price"
            type="number"
            min="0"
            step="0.01"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter price"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium" htmlFor="imageUpload">
            Upload Product Image
          </label>

          <label
            htmlFor="imageUpload"
            className="flex flex-col items-center justify-center w-full h-40 px-4 transition bg-white border-2 border-dashed rounded-md cursor-pointer hover:bg-gray-50"
          >
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Product Preview"
                className="object-contain h-full"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-gray-500">
                <svg
                  className="w-10 h-10 mb-2 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5V19a2 2 0 002 2h14a2 2 0 002-2v-2.5M16 12l-4-4m0 0l-4 4m4-4v12"
                  />
                </svg>
                <span className="text-sm">Click or drag to upload</span>
              </div>
            )}
            <input
              id="imageUpload"
              name="imageUpload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <input
            id="available"
            name="available"
            type="checkbox"
            checked={formData.available}
            onChange={handleChange}
            className="h-5 w-5"
          />
          <label htmlFor="available" className="font-medium">
            Available in stock
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-gray-800 cursor-pointer text-white py-3 rounded-md font-semibold hover:bg-black transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
