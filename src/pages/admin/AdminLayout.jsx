import { Menu, X, MessageSquare, Bell } from "lucide-react";
import AppSidebar from "./components/AppSideBar";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsMobile(true);
        setSidebarOpen(false);
      } else {
        setIsMobile(false);
        setSidebarOpen(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex w-full min-h-screen overflow-hidden">
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            exit={{ x: -250 }}
            transition={{ duration: 0.3 }}
            className="fixed lg:relative z-20 h-full w-64 bg-white shadow"
          >
            <AppSidebar onClose={() => setSidebarOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <main
        className={`flex-1 bg-gray-50 transition-all duration-300 overflow-hidden flex flex-col ${
          sidebarOpen && !isMobile ? "" : "ml-0"
        }`}
      >
        <div className="flex items-center justify-between p-6 bg-white shadow-sm">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg bg-white shadow-sm border hover:bg-gray-50 transition-colors"
            aria-label="Toggle Sidebar"
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <div className="flex items-center space-x-6">
            <button
              aria-label="Messages"
              className="relative text-gray-600 hover:text-gray-900"
            >
              <MessageSquare size={24} />
              <span className="absolute -top-1 -right-2 text-xs bg-red-500 text-white rounded-full px-1">
                3
              </span>
            </button>

            <button
              aria-label="Notifications"
              className="relative text-gray-600 hover:text-gray-900"
            >
              <Bell size={24} />
              <span className="absolute -top-1 -right-2 text-xs bg-red-500 text-white rounded-full px-1">
                5
              </span>
            </button>

            <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-white font-semibold cursor-pointer">
              AM
            </div>
          </div>
        </div>

        <div className="h-[calc(100vh-100px)] overflow-y-auto p-3 scrollbar-thin">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
