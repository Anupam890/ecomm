import React from 'react';
import { Link } from 'react-router-dom';
import heroimage from '../assets/heroimage.png'
import Collection from './Collection';

const HeroComponent = () => {
  return (
   <>
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover Your Style with <span className="text-black">UniqBuy</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Trendy. Affordable. Uniquely you. Shop the latest fashion for men and women.
          </p>
          <div className="flex gap-4">
            <Link to="/mens">
              <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
                Shop Mens
              </button>
            </Link>
            <Link to="/womens">
              <button className="border border-black text-black px-6 py-2 rounded hover:bg-black hover:text-white transition">
                Shop Womens
              </button>
            </Link>
          </div>
        </div>

       
        <div className="flex-1">
          <img
            src={heroimage}
            alt="Fashion Banner"
            className=" rounded-xl"
          />
        </div>
      </div>
    </section>
    <section>
      <Collection/>
    </section>
   </>
  );
};

export default HeroComponent;
