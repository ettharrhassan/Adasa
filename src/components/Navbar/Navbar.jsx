import React, { useState } from "react";
import Logo from "../../assets/logo-GdqARQRt.png";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

const mobileLinkClass = ({ isActive }) =>
  `px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 border ${
    isActive
      ? "bg-orange-500/10 text-orange-500 border-orange-500/30"
      : "text-neutral-400 border-transparent hover:bg-orange-500/10 hover:text-orange-500 hover:border-orange-500/30"
  }`;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300">
                <img
                  src={Logo}
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col">
                <span className="text-xl font-bold bg-linear-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                  عدسة
                </span>

                <span className="text-xs text-orange-400/80 hidden sm:block tracking-wide">
                  عالم التصوير الفوتوغرافي
                </span>
              </div>
            </Link>

            <div className="hidden md:flex items-center">
              <div className="flex items-center bg-[#161616] rounded-full p-1.5 border border-[#262626]">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `px-5 py-2 rounded-full transition-colors ${
                      isActive
                        ? "bg-orange-500 text-white"
                        : "text-gray-300 hover:text-white"
                    }`
                  }>
                  الرئيسية
                </NavLink>

                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    `px-5 py-2 rounded-full transition-colors ${
                      isActive
                        ? "bg-orange-500 text-white"
                        : "text-gray-300 hover:text-white"
                    }`
                  }>
                  المدونة
                </NavLink>

                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `px-5 py-2 rounded-full transition-colors ${
                      isActive
                        ? "bg-orange-500 text-white"
                        : "text-gray-300 hover:text-white"
                    }`
                  }>
                  من نحن
                </NavLink>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <button className="p-3 text-neutral-500 hover:text-orange-500 hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]">
                <i className="fa-solid fa-magnifying-glass w-5 h-5"></i>
              </button>

              <Link className="btn-primary text-sm" to="/blog">
                ابدأ القراءة
              </Link>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 text-neutral-400 hover:text-white hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]"
              aria-label="فتح القائمة"
              aria-expanded={isMenuOpen}>
              <i
                className={`fa-solid ${
                  isMenuOpen ? "fa-xmark" : "fa-bars"
                } w-6 h-6`}></i>
            </button>
          </div>

          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isMenuOpen ? "max-h-96 pb-4" : "max-h-0"
            }`}>
            <div className="bg-[#161616] backdrop-blur-xl rounded-2xl p-4 border border-[#262626]">
              <div className="flex flex-col space-y-1">
                <NavLink
                  to="/"
                  end
                  onClick={() => setIsMenuOpen(false)}
                  className={mobileLinkClass}>
                  الرئيسية
                </NavLink>

                <NavLink
                  to="/blog"
                  onClick={() => setIsMenuOpen(false)}
                  className={mobileLinkClass}>
                  المدونة
                </NavLink>

                <NavLink
                  to="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className={mobileLinkClass}>
                  من نحن
                </NavLink>

                <Link
                  className="btn-primary text-sm text-center mt-2"
                  to="/blog"
                  onClick={() => setIsMenuOpen(false)}>
                  ابدأ القراءة
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;