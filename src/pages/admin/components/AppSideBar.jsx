import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Package,
  Plus,
  Store,
  X,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    url: "dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Customers",
    url: "customers",
    icon: Users,
  },
  {
    title: "Orders",
    url: "orders",
    icon: ShoppingCart,
  },
  {
    title: "Products",
    url: "products",
    icon: Package,
  },
  {
    title: "Add Product",
    url: "product/add",
    icon: Plus,
  },
];

const AppSidebar = ({ onClose }) => {
  const location = useLocation();

  return (
    <div className="h-screen w-64 bg-white shadow-lg border-r">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Store className="h-8 w-8 text-blue-600" />
            <h2 className="text-xl font-bold text-gray-900">Admin Panel</h2>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden p-1 rounded hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      <nav className="p-4">
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-500 mb-3">Main Menu</h3>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.url;
            return (
              <Link
                key={item.title}
                to={item.url}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-blue-50 text-blue-700 border-l-4 border-blue-700"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.title}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default AppSidebar;
