// 'use client'

// import React, { useState } from 'react';

// interface BlogPost {
//   date: string;
//   readTime: string;
//   title: string;
//   author: string;
//   icon: string;
//   link: string;
// }

// const HeroBlogs: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<'latest' | 'popular'>('latest');
//   const [searchQuery, setSearchQuery] = useState<string>('');

//   const latestBlogs: BlogPost[] = [
//     {
//       date: "February 25, 2025",
//       readTime: "4min read",
//       title: "Why Next.js Is Ideal for Headless CMS Integration ?",
//       author: "SW Habitation",
//       icon: "NEXT",
//       link: "#nextjs-headless-cms"
//     },
//     {
//       date: "February 20, 2025",
//       readTime: "3min read",
//       title: "Squido: A Beginner's Guide to the HTML Website Generator",
//       author: "SW Habitation",
//       icon: "S",
//       link: "#squido-guide"
//     },
//     {
//       date: "February 16, 2025",
//       readTime: "3min read",
//       title: "How to add Adobe Fonts in Next.js ?",
//       author: "SW Habitation",
//       icon: "NEXT",
//       link: "#nextjs-adobe-fonts"
//     }
//   ];

//   const popularBlogs: BlogPost[] = [
//     {
//       date: "February 20, 2025",
//       readTime: "3min read",
//       title: "Squido: A Beginner's Guide to the HTML Website Generator",
//       author: "SW Habitation",
//       icon: "S",
//       link: "#squido-guide"
//     },
//     {
//       date: "February 25, 2025",
//       readTime: "4min read",
//       title: "Why Next.js Is Ideal for Headless CMS Integration ?",
//       author: "SW Habitation",
//       icon: "NEXT",
//       link: "#nextjs-headless-cms"
//     },
//     {
//       date: "January 29, 2024",
//       readTime: "3min read",
//       title: "How to install Astro? -A Step By Step Installation Guide for Beginners",
//       author: "SW Habitation",
//       icon: "A",
//       link: "#astro-installation"
//     }
//   ];

//   // Get active blogs based on tab
//   const activeBlogs = activeTab === 'latest' ? latestBlogs : popularBlogs;

//   // Filter blogs based on search query
//   const filteredBlogs = searchQuery
//     ? activeBlogs.filter(blog =>
//         blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         blog.author.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     : activeBlogs;

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8 mt-48">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
//         <div className="flex space-x-2 mb-4 md:mb-0">
//           <button
//             className={`px-6 py-2 rounded-full text-base font-medium transition-colors ${
//               activeTab === 'latest'
//                 ? 'bg-[#3DFF6E] text-gray-900'
//                 : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//             }`}
//             onClick={() => setActiveTab('latest')}
//           >
//             Latest
//           </button>
//           <button
//             className={`px-6 py-2 rounded-full text-base font-medium transition-colors ${
//               activeTab === 'popular'
//                 ? 'bg-[#3DFF6E] text-gray-900'
//                 : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//             }`}
//             onClick={() => setActiveTab('popular')}
//           >
//             Popular
//           </button>
//         </div>

//         <div className="w-full md:w-auto">
//           <div className="relative">
//             <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
//               <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </div>
//             <input
//               type="text"
//               className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#3DFF6E] focus:border-transparent"
//               placeholder="Search"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Left Featured Post */}
//         {filteredBlogs.length > 0 && (
//           <div className="border-r border-gray-200 pr-4">
//             <div className="text-gray-600 mb-4">
//               {filteredBlogs[0].date} - {filteredBlogs[0].readTime}
//             </div>

//             <div className="mb-4">
//               <div className="bg-gray-800 text-white w-16 h-16 flex items-center justify-center text-xl font-bold rounded-md mb-4">
//                 {filteredBlogs[0].icon}
//               </div>

//               <h2 className="text-4xl font-bold mb-6 hover:text-gray-500 transition-colors">
//                 <a href={filteredBlogs[0].link}>{filteredBlogs[0].title}</a>
//               </h2>

//               <div className="flex items-center">
//                 <div className="bg-gray-800 text-white w-8 h-8 flex items-center justify-center rounded-full mr-2">
//                   H
//                 </div>
//                 <span className="text-gray-600">By {filteredBlogs[0].author}</span>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Right Side Posts */}
//         <div>
//           {filteredBlogs.slice(1, 3).map((blog, index) => (
//             <div key={index} className="mb-8">
//               <div className="text-gray-600 mb-2">
//                 {blog.date} - {blog.readTime}
//               </div>

//               <div className="flex justify-between items-start">
//                 <h3 className="text-2xl font-bold mb-4 hover:text-gray-500 transition-colors pr-4">
//                   <a href={blog.link}>{blog.title}</a>
//                 </h3>

//                 <div className="bg-gray-800 text-white w-12 h-12 flex items-center justify-center text-base font-bold rounded-md ml-2 flex-shrink-0">
//                   {blog.icon}
//                 </div>
//               </div>

//               <div className="flex items-center">
//                 <div className="bg-gray-800 text-white w-8 h-8 flex items-center justify-center rounded-full mr-2">
//                   H
//                 </div>
//                 <span className="text-gray-600">By {blog.author}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {filteredBlogs.length === 0 && (
//         <div className="text-center py-8">
//           <p className="text-gray-500 text-lg">No blogs found matching your search.</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HeroBlogs;

// ------------------------------------------------------------------------------------------------

"use client";

import React, { useState, useEffect } from "react";
import { getAllBlogs } from "@/utilities/sanity-utilities";
import { BlogType } from "@/types/Blog";
import MoreLatestPostsSection from "./MoreLatestPostsSection";
import { urlFor } from "@/lib/sanityClient";
import Image from "next/image";

interface FormattedBlogType {
  date: string;
  readTime: string;
  title: string;
  author: string;
  authorImage?: string;
  blogThumbnail?: string;
  icon: string;
  link: string;
}


const HeroBlogs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"latest" | "popular">("latest");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [blogs, setBlogs] = useState<FormattedBlogType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        setLoading(true);
        const fetchedBlogs = await getAllBlogs();
        const formattedBlogs: FormattedBlogType[] = fetchedBlogs.map(
          (blog: BlogType) => ({
            date: new Date(blog.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
            readTime: `${blog.readingTime} min read`,
            title: blog.title,
            author: blog.author,
            authorImage: blog.authorImage
              ? urlFor(blog?.authorImage?.asset?._ref)
              : undefined,
            blogThumbnail: blog.blogThumbnail
              ? urlFor(blog?.blogThumbnail?.asset?._ref)
              : undefined,
            icon: blog.slug.current.charAt(0).toUpperCase(),
            link: `/blogs/${blog.slug.current}`,
          })
        );
        setBlogs(formattedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  const latestBlogs = blogs.slice(0, 3);
  const popularBlogs = blogs.slice(3, 6);
  const activeBlogs = activeTab === "latest" ? latestBlogs : popularBlogs;

  const filteredBlogs = searchQuery
    ? activeBlogs.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          blog.author.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : activeBlogs;

  const displayedBlogs = filteredBlogs.slice(0, 3); // Blogs shown in HeroBlogs
  const remainingBlogs = blogs.filter(
    (blog) => !displayedBlogs.some((displayed) => displayed.link === blog.link)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-48">
      {/* Toggle Tabs and Search Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div className="flex space-x-2 mb-4 md:mb-0">
          <button
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              activeTab === "latest"
                ? "bg-[#3DFF6E] text-gray-900"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab("latest")}
          >
            Latest
          </button>
          <button
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              activeTab === "popular"
                ? "bg-[#3DFF6E] text-gray-900"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab("popular")}
          >
            Popular
          </button>
        </div>

        <input
          type="text"
          className="w-full md:w-auto px-4 py-2 border border-gray-200 rounded-full bg-gray-100 focus:ring-2 focus:ring-[#3DFF6E]"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Blog Listing */}
      {loading ? (
        <p className="text-center text-gray-500 py-8">Loading blogs...</p>
      ) : filteredBlogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Featured Post */}
          <div className="border-r border-gray-200 pr-4">
            {filteredBlogs[0]?.blogThumbnail && (
              <Image
                src={filteredBlogs[0]?.blogThumbnail || filteredBlogs[0]?.icon}
                alt="Blog Thumbnail"
                width={98}
                height={98}
                className=" rounded-lg mb-4"
              />
            )}
            <p className="text-gray-600">
              {filteredBlogs[0].date} - {filteredBlogs[0].readTime}
            </p>
            <h2 className="text-3xl font-bold mt-2 hover:text-gray-500 transition">
              <a href={filteredBlogs[0].link}>{filteredBlogs[0].title}</a>
            </h2>
            <div className="flex mt-4 align-middle">
              {filteredBlogs[0]?.authorImage && (
                <Image
                  src={filteredBlogs[0]?.authorImage || filteredBlogs[0]?.icon}
                  alt="Author Image"
                  width={32}
                  height={32}
                  className="rounded-lg mb-4"
                />
              )}
              <span className="text-gray-600 ml-2 py-1">
                By {filteredBlogs[0].author}
              </span>
            </div>
          </div>

          {/* Right Side Posts */}
          <div>
            {filteredBlogs.slice(1, 3).map((blog, index) => (
              <div key={index} className="mb-8">
                <p className="text-gray-600">
                  {blog.date} - {blog.readTime}
                </p>
                <div className="flex items-start justify-between">
                  {/* Blog Title and Author */}
                  <div>
                    <h3 className="text-xl font-bold hover:text-gray-500 transition">
                      <a href={blog.link}>{blog.title}</a>
                    </h3>
                    <div className="flex mt-4 align-middle">
                      {blog.authorImage && (
                        <Image
                          src={blog.authorImage || blog?.icon}
                          alt="Author Image"
                          width={32}
                          height={32}
                          className="object-cover rounded-lg mb-4"
                        />
                      )}
                      <span className="text-gray-600 ml-2 py-1">
                        By {blog.author}
                      </span>
                    </div>
                  </div>

                  {/* Move Thumbnail to the Right */}
                  {blog?.blogThumbnail && (
                    <Image
                      src={blog?.blogThumbnail || blog?.icon}
                      alt="Blog Thumbnail"
                      width={52}
                      height={52}
                      className="object-cover rounded-lg mb-4 ml-4"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500 py-8">No blogs found.</p>
      )}

      {/* More Latest Posts */}
      <MoreLatestPostsSection remainingBlogs={remainingBlogs} />
    </div>
  );
};

export default HeroBlogs;
