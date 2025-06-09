import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Global Imports
import Home from "./pages/Home";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Cart from "./components/Cart";
import HeroComponent from "./components/HeroComponent";
import { Toaster } from "react-hot-toast";
import GlobalProducts from "./pages/user/GlobalProducts";
//  Admin Components
import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/components/Dashboard";
import Customers from "./pages/admin/components/Customers";
import Products from "./pages/admin/components/Products";
import Orders from "./pages/admin/components/Orders";
import NotFound from "./pages/admin/components/NotFound";
import AddProduct from "./pages/admin/components/AddProduct";
import ProductInfo from "./components/ProductInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { index: true, element: <HeroComponent /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "cart", element: <Cart /> },
      {
        path: "category/:category",
        element: <GlobalProducts />,
      },{
        path:"product/:id",
        element:<ProductInfo/>
      }
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "dashboard", element: <Dashboard />, index: true },
      {
        path: "customers",
        element: <Customers />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "product/add",
        element: <AddProduct />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "#fff",
            color: "#000",
          },
        }}
      />
    </div>
  );
};

export default App;
