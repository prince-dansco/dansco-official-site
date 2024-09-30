"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBarCom = () => {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();

  const handleClick = () => {
    setToggle(!toggle);
  };

  const activeLinkClass =
    "text-orange-500 border-b-2 border-orange-500 px-5 py-2 rounded-md transition-colors duration-100";
  const linkClass =
    "hover:bg-gray-100 hover:text-orange-500 px-5 py-2 rounded-md transition-colors duration-100";

  return (
    <nav className="shadow-lg sticky top-0 z-50 bg-transparent">
      <div className="flex items-center justify-between px-6 py-4 md:px-[80px] text-xl">
        <div className="md:text-2xl text-2xl font-bold">
          <h1>
            <Link href="/">Dj Dansco</Link>
          </h1>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link
            href="/"
            className={pathname === "/" ? activeLinkClass : linkClass}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={pathname === "/about" ? activeLinkClass : linkClass}
          >
            About
          </Link>
          <Link
            href="/gallery"
            className={pathname === "/gallery" ? activeLinkClass : linkClass}
          >
            Gallery
          </Link>

          <Link
            href="/blog"
            className={pathname === "/blog" ? activeLinkClass : linkClass}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={pathname === "/contact" ? activeLinkClass : linkClass}
          >
            Contact
          </Link>
        </div>
        <button
          onClick={handleClick}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {toggle ? <FaTimes size={30} /> : <FaBars size={30} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {toggle && (
        <div className="md:hidden bg-gray-600">
          <ul className="flex z-50 flex-col gap-6 font-medium items-center absolute top-[70px] shadow-lg left-0 backdrop-blur w-full justify-center py-4 text-2xl">
            <li>
              <Link
                href="/"
                className={pathname === "/" ? activeLinkClass : linkClass}
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={pathname === "/about" ? activeLinkClass : linkClass}
                onClick={handleClick}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className={
                  pathname === "/gallery" ? activeLinkClass : linkClass
                }
                onClick={handleClick}
              >
                Gallery
              </Link>
            </li>
            <li></li>
            <li>
              <Link
                href="/blog"
                className={pathname === "/blog" ? activeLinkClass : linkClass}
                onClick={handleClick}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={
                  pathname === "/contact" ? activeLinkClass : linkClass
                }
                onClick={handleClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBarCom;
