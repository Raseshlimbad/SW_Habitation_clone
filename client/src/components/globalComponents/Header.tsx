
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getHeader } from "@/utilities/sanity-utilities";
import { HeaderType } from "@/types/Header";
import { urlFor } from "@/lib/sanityClient";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerData, setHeaderData] = useState<HeaderType | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true); // Prevents hydration mismatch

    const fetchData = async () => {
      try {
        const data = await getHeader();
        setHeaderData(data);
      } catch (error) {
        console.error("Error fetching header data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  if (!mounted) return null; // Prevents rendering until mounted

  return (
    // <header className="w-full fixed top-0 left-0 right-0 z-[1000] pt-8 pb-5 bg-transparent border-transparent">

    <header
    className={`w-full fixed top-0 left-0 right-0 z-[1000] pt-8 pb-5 transition-all duration-300 ${
      isScrolled
        ? "bg-white border-0 border-b-2 border-gray-200"
        : "bg-transparent border-transparent"
    }`}>
      <div className="md:px-44 px-5">
        <nav className="flex items-center justify-between">
          {/* Logo - Same for both mobile and desktop */}
          <Link href="/" className=" ">
            {headerData?.logo?.asset?._ref ? (
              <Image
                alt="Logo"
                fetchPriority="high"
                width={175}
                height={70}
                className="w-full max-w-[140px] lg:max-w-[175px]"
                src={urlFor(headerData.logo.asset._ref)}
              />
            ) : (
              <p>Loading Logo...</p>
            )}
          </Link>

          {/* Desktop navItems */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-8">
              {headerData?.navItems?.map((link) => (
                <Link
                  key={link.path}
                  href={`/${link.path}`}
                  className="text-theme-primary text-lg font-medium hover:opacity-50 opacity-100"
                >
                  {link.label}
                </Link>
              ))}
            </div>
              <Link
                key={headerData?.ctaButton[0].label}
                href={`/${headerData?.ctaButton[0].path}`}
                className="text-black text-base font-semibold bg-[#3DFF6E] px-8 py-[10px] md:px-10 md:py-[12px] rounded-full inline-flex items-center justify-center border border-gray-700 border-opacity-0 hover:border-opacity-100 hover:bg-transparent hover:text-gray-700"
              >
                {headerData?.ctaButton[0].label}
              </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden pr-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="33"
              viewBox="0 0 34 33"
              fill="none"
            >
              <path
                d="M4.32031 26.125V23.375H29.0703V26.125H4.32031ZM4.32031 17.875V15.125H29.0703V17.875H4.32031ZM4.32031 9.625V6.875H29.0703V9.625H4.32031Z"
                fill="black"
              />
            </svg>
          </button>

          {/* Mobile Menu Overlay */}
          <div
            className={`fixed inset-0 bg-black text-white p-6 transition-transform duration-300 z-[999] py-36 px-12 lg:hidden ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              className="absolute top-14 right-6"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#fff"
                className="w-7 h-7"
              >
                <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z" />
              </svg>
            </button>
            
            <div className="flex flex-col gap-8">
              {headerData?.navItems?.map((link) => (
                <Link
                  key={link.path}
                  href={`/${link.path}`}
                  className="text-4xl font-semibold"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={`/${headerData?.ctaButton[1].path}`}
                className="text-4xl font-semibold capitalize"
              >
                {headerData?.ctaButton[1].label}
              </Link>
            </div>
            
            <div className="mt-12">
              <Link
                href={`/${headerData?.ctaButton[0].path}`}
                className="text-black text-base font-semibold bg-[#3DFF6E] px-8 py-[10px] md:px-10 md:py-[12px] rounded-full inline-flex items-center justify-center border border-transparent hover:bg-transparent hover:border-theme-primary hover:text-theme-primary"
              >
                {headerData?.ctaButton[0].label}
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;


