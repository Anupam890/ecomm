import React, { useState } from "react";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    imageUrl: "",
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
          <input
            id="imageUpload"
            name="imageUpload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-700"
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="mt-4 w-48 h-48 object-cover rounded-md border"
            />
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium" htmlFor="imageUrl">
            Or Enter Image URL
          </label>
          <input
            id="imageUrl"
            name="imageUrl"
            type="url"
            value={formData.imageUrl}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter image URL"
          />
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
