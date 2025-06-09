import React from 'react';

const Cart = () => {
  // Dummy cart data
  const cartItems = [
    {
      id: 1,
      name: 'Winter Jacket',
      price: 1999,
      quantity: 1,
      image: 'https://via.placeholder.com/100',
    },
    {
      id: 2,
      name: 'Stylish Sneakers',
      price: 1299,
      quantity: 2,
      image: 'https://via.placeholder.com/100',
    },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white shadow p-4 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 rounded object-cover" />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-500">₹{item.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-gray-700">Qty: {item.quantity}</p>
                <p className="text-lg font-bold">₹{item.price * item.quantity}</p>
              </div>
            </div>
          ))}

          <div className="flex justify-end items-center border-t pt-6 mt-6">
            <h3 className="text-xl font-bold">Total: ₹{total}</h3>
          </div>

          <div className="flex justify-end">
            <button className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
