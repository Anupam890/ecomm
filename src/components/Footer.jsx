import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-3">UniqBuy</h2>
          <p className="text-sm text-gray-400 mb-4">
            Your one-stop destination for quality fashion and clothing.
          </p>
          <div className="flex space-x-4 text-gray-400">
            <a href="#">
              <FaFacebookF className="hover:text-white" />
            </a>
            <a href="#">
              <FaTwitter className="hover:text-white" />
            </a>
            <a href="#">
              <FaInstagram className="hover:text-white" />
            </a>
            <a href="#">
              <FaEnvelope className="hover:text-white" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="cursor-pointer">Men's Clothing</li>
            <li className="cursor-pointer">Women's Clothing</li>
            <li className="cursor-pointer">Shopping Cart</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Customer Service</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="cursor-pointer">Contact Us</li>
            <li className="cursor-pointer">Shipping Info</li>
            <li className="cursor-pointer">Returns</li>
            <li className="cursor-pointer">FAQ</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="cursor-pointer">Privacy Policy</li>
            <li className="cursor-pointer">Terms & Conditions</li>
            <li className="cursor-pointer">Cookie Policy</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} UniqBuy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
