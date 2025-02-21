'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getHeader } from '@/utilities/sanity-utilities';
import { Header } from '@/types/Header';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerData, setHeaderData] = useState<Header | null>(null);

  useEffect(() => {
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

  console.log("header data:", headerData); 

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: '/blogs', text: 'Blogs' },
    { href: '/categories', text: 'Categories' },
    { href: '/resources', text: 'Resources' },
    { href: '/stories', text: 'Stories' },
  ];

  return (
    <header className="w-full left-0 top-0 right-0 z-[1000] pt-8 pb-5 border border-transparent fixed bg-transparent">
      {/* Desktop Navigation */}
      <div className="top-0 left-0 right-0 hidden lg:flex">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image
                alt="Logo"
                fetchPriority="high"
                width={700}
                height={300}
                className="max-w-[175px] w-full"
                src={'/'}
              />
            </Link>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      className="text-theme-primary text-lg font-medium hover:opacity-50 opacity-100"
                    >
                      {link.text}
                    </Link>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="text-black text-base font-semibold bg-theme-green px-8 py-[10px] md:px-10 md:py-[12px] rounded-62 inline-flex items-center justify-center border border-transparent hover:bg-transparent hover:border-theme-primary hover:text-theme-primary"
              >
                <span>Contact</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex lg:hidden w-full">
        <div className="container">
          <div className="flex items-center justify-between w-full">
            <Link href="/">
              <Image
                alt="Logo"
                fetchPriority="high"
                width={700}
                height={299}
                className="max-w-[140px] w-full"
                src={'/'}
              />
            </Link>
            <button onClick={toggleMobileMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="33"
                viewBox="0 0 34 33"
                fill="none"
                className="cursor-pointer"
              >
                <path
                  d="M4.32031 26.125V23.375H29.0703V26.125H4.32031ZM4.32031 17.875V15.125H29.0703V17.875H4.32031ZM4.32031 9.625V6.875H29.0703V9.625H4.32031Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`w-screen fixed top-0 right-0 h-full bg-black text-white p-6 transition-transform duration-300 z-[999] py-36 px-12 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
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
              className="w-[28px] h-[28px] cursor-pointer"
            >
              <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z" />
            </svg>
          </button>
          <div className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-4xl font-semibold"
              >
                {link.text}
              </Link>
            ))}
            <div>
              <Link
                href="/privacy-policy"
                className="text-4xl font-semibold capitalize"
              >
                privacy policy
              </Link>
            </div>
          </div>
          <div className="mt-12">
            <Link
              href="/contact"
              className="text-black text-base font-semibold bg-theme-green px-8 py-[10px] md:px-10 md:py-[12px] rounded-62 inline-flex items-center justify-center border border-transparent hover:bg-transparent hover:border-theme-primary hover:text-theme-primary"
            >
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;