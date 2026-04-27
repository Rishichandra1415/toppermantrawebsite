"use client";

import { useAppSelector } from "@/store/hooks";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { isSidebarOpen } = useAppSelector((state) => state.ui);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pt-24">
      <Navbar />

      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
