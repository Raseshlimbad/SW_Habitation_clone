"use client";

import { FooterType } from "@/types/Footer";
import { getFooter } from "@/utilities/sanity-utilities";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [footerData, setFooterData] = useState<FooterType | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const fetchData = async () => {
      try {
        const data = await getFooter();
        setFooterData(data);
      } catch (error) {
        console.error("Error fetching footer data:", error);
      }
    };

    fetchData();
  }, []);

  // console.log(footerData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted email:", email);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!mounted) {
    return null;
  }

  return (
    <footer className="bg-black relative">
      <div className="container">
        <div className="pt-14 sm:pt-16 md:pt-20 pb-11">
          <div className="flex flex-col justify-center items-center">
            <div className="[&>h2]:text-white [&>h2]:font-medium [&>h2]:text-[32px] sm:[&>h2]:text-[38px] md:[&>h2]:text-[40px] lg:[&>h2]:text-42px w-full mx-auto [&>h2]:text-center [&>h2>br]:hidden xs:[&>h2>br]:inline-block [&>h2]:leading-[120%]">
              <h2 id="join-our-newsletter-and-get-daily-updates">
                Join our Newsletter &<br /> get daily updates.
              </h2>
            </div>

            <div>
              <div className="flex flex-col xl:flex-row justify-center xl:justify-between relative font-poppins">
                <div className="mail-msg pt-6 w-full">
                  <form
                    onSubmit={handleSubmit}
                    className="w-full relative flex flex-col sm:flex-row items-center gap-4 sm:gap-2"
                  >
                    <div className="flex flex-col items-center">
                      <input
                        name="email"
                        type="email"
                        placeholder={footerData?.emailInputPlaceholder}
                        className="placeholder:font-semibold placeholder:text-base placeholder:text-white bg-transparent rounded-full border px-6 py-3 min-w-308px text-white focus-visible:outline-none placeholder:lowercase"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <div className="sm:absolute bottom-[-30px]"></div>
                    </div>
                    <button
                      className="text-black text-base font-semibold bg-[#3EFF6F] px-8 py-[10px] md:px-10 md:py-[12px] rounded-full inline-flex items-center justify-center border border-transparent cursor-pointer hover:bg-transparent hover:text-[#3EFF6F] hover:border-[#3EFF6F] transition-all"
                      type="submit"
                    >
                      {footerData?.submitButtonText || "Submit"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links with centered dots (horizontal on desktop, vertical on mobile) */}
          <div className="flex flex-col items-center justify-center mt-[70px] md:mt-[75px] lg:mt-85px">
            <div className="flex flex-col sm:flex-row items-center justify-center">
              {footerData?.socialLinks?.map((social, index) => (
                <React.Fragment key={social.label}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-lg sm:text-xl md:text-2xl font-medium hover:opacity-50 transition-opacity text-center"
                    href={social.url}
                  >
                    {social.label}
                  </a>
                  {index !== footerData.socialLinks.length - 1 && (
                    <>
                      {/* Desktop dot (horizontal) */}
                      <div className="hidden sm:flex items-center justify-center mx-4">
                        <div className="w-2 h-2 rounded-full bg-[#3EFF6F]" />
                      </div>
                      {/* Mobile dot (vertical) */}
                      <div className="flex sm:hidden items-center justify-center my-4">
                        <div className="w-2 h-2 rounded-full bg-[#3EFF6F]" />
                      </div>
                    </>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-10 xs:mt-12 sm:mt-14 md:mt-16 lg:mt-20 xl:mt-92px">
          {footerData?.footerLinksName?.map((links) => (
              <Link
                className="text-white text-base font-medium hover:opacity-50 transition-opacity"
                href={`/${links.path}`}
                key={`/${links.path}`}
              >
                {links.label}
              </Link>
          ))}
          </div>

          <button
            onClick={scrollToTop}
            className="absolute right-4 xs:right-6 sm:right-8 bottom-6 md:bottom-8 cursor-pointer"
            aria-label="Scroll to top"
          >
            <div className="w-[40px] h-[24px] xs:w-[60px] xs:h-[30px] md:w-[80px] md:h-[40px] lg:w-[104px] lg:h-[56px] rounded-full border border-[#3EFF6F] flex items-center justify-center hover:bg-[#3EFF6F] transition-all group">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:[&>path]:fill-black w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] lg:w-[24px] lg:h-[24px] transition-all"
              >
                <path
                  d="M11 20V7.825L5.4 13.425L4 12L12 4L20 12L18.6 13.425L13 7.825V20H11Z"
                  fill="#3EFF6F"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
