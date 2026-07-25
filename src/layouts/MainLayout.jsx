// src/layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-ink focus:text-paper focus:px-4 focus:py-2 focus:rounded-md font-mono text-xs uppercase tracking-widest"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;