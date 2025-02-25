"use client";

import { urlFor } from "@/lib/sanityClient";
import { HeroSectionType } from "@/types/HeroSection";
import { getHeroSection } from "@/utilities/sanity-utilities";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";


const HeroSection: React.FC = () => {
  const [heroSectionData, setHeroSectionData] =
    useState<HeroSectionType | null>(null);
    const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getHeroSection();
        setHeroSectionData(data);
        console.log(data)
        const count = Number(data?.visitorsCount) || 0;
        animateVisitorCount(count);
      } catch (error) {
        console.error("Error fetching header data:", error);
      }
    };

    fetchData();
  }, []);

  const animateVisitorCount = (targetValue: number) => {
    let start = 0;
    const duration = 4000; // 4 seconds
    const increment = Math.ceil(targetValue / (duration / 50)); // Update every 50ms
    const interval = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        start = targetValue;
        clearInterval(interval);
      }
      setVisitorCount(start);
    }, 50);
  };

  // Format heroTitle with line breaks after 2nd and 4th word
  const formatHeroTitle = (text: string | undefined) => {
    if (!text) return "";
    const words = text.split(" ");
    return `${words.slice(0, 2).join(" ")}<br />${words
      .slice(2, 4)
      .join(" ")}<br />${words.slice(4).join(" ")}`;
  };

  // Format heroSmallTitle with line breaks after every 15 words
  const formatHeroSmallTitle = (text: string | undefined) => {
    if (!text) return "";
    const words = text.split(" ");
    return words.reduce((acc, word, index) => {
      return acc + (index > 0 && index % 15 === 0 ? "<br />" : " ") + word;
    }, "");
  };

  return (
    <section className="relative bg-[#F7F6F6] pt-[180px] md:pt-[220px] lg:pt-[211px] pb-[60px] xs:pb-[80px] sm:pb-[120px] md:pb-[150px] lg:pb-[200px] xl:pb-[228px]">
      <div className=" relative flex flex-col items-center justify-center text-center w-full">

        {heroSectionData?.leftPanel?.asset?._ref && (
          <Image
            alt="Left Panel"
            width={241}
            height={554}
            className="absolute   transform -translate-y-1/2 max-w-[241px] lg:block hidden left-[5%] top-[70%] "
            src={urlFor(heroSectionData.leftPanel.asset._ref)}
          />
        )}

         {/* Visitor Count Display */}
         <Link
          href="/"
          className="flex items-center gap-3 bg-gray-200 rounded-full py-1 px-2 shadow-sm"
        >
          <span className="bg-[#3DFF6E] text-black font-bold text-sm px-3 py-1 rounded-full">
            {visitorCount.toLocaleString()} {/* Format number with commas */} 
          </span>
          <span className="flex gap-2 align-middle">
          <span className="text-black font-medium text-sm ">
            Monthly visitors read our blog! 🎉 
          </span>
          <MdKeyboardArrowRight className="text-xl"/>
          </span>
        </Link>

        {/* Hero Title */}
        <h1
          className="text-[#1D1D20] text-[42px] lg:text-[65px] font-semibold leading-tight mt-4"
          dangerouslySetInnerHTML={{
            __html: formatHeroTitle(heroSectionData?.heroTitle),
          }}
        ></h1>

        {/* Hero Subtitle */}
        <p
          className="text-theme-slateGray text-base leading-[28px] mt-4"
          dangerouslySetInnerHTML={{
            __html: formatHeroSmallTitle(heroSectionData?.heroSmallTitle),
          }}
        ></p>
      </div>

      {/* Right Panel Image */}
      {heroSectionData?.rigthPanel?.asset?._ref && (
        <Image
          alt="Right Panel"
          width={241}
          height={554}
          className="absolute transform -translate-y-1/2 max-w-[241px] lg:block hidden right-[5%] top-[55%]"
          src={urlFor(heroSectionData.rigthPanel.asset._ref)}
        />
      )}

      {/* Visitors Count Link */}
    </section>
  );
};

export default HeroSection;
