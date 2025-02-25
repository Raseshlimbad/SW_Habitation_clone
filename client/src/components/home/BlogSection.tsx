"use client";

import React, { useEffect, useState } from "react";
import { getBlogSectionFix } from "@/utilities/sanity-utilities"; // Adjust the import path if needed
import { BlogType } from "@/types/Blog";
import Image from "next/image";
import { urlFor } from "@/lib/sanityClient";
import { PortableTextBlock, PortableTextSpan } from "@sanity/types";
import Link from "next/link";

const BlogSection = () => {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      const blogData = await getBlogSectionFix();
      setBlogs(blogData);
      setLoading(false);
    }

    fetchBlogs();
  }, []);

  console.log("Blogs", blogs);

  if (loading) {
    return <div className="text-center p-6">Loading blogs...</div>;
  }

  if (blogs.length === 0) {
    return <div className="text-center p-6">No blogs found.</div>;
  }

  const getPlainText = (blocks: PortableTextBlock[]) => {
    return blocks
      ?.map((block) =>
        "children" in block
          ? (block.children as PortableTextSpan[])
              .map((child) => child.text)
              .join(" ")
          : ""
      )
      .join(" ");
  };
  return (
    <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto p-4">
      {/* Left Side - Featured Post */}
      <div className="md:w-1/2 border-r border-gray-200 pr-8">
        <div className="mb-2 text-gray-600">
          {new Date(blogs[0]?.publishedAt).toLocaleDateString()} -{" "}
          {blogs[0].readingTime} min read
        </div>

        <div className="flex items-start mb-4">
          {blogs[0]?.blogThumbnail?.asset?._ref && (
            <Image
              src={urlFor(blogs[0]?.blogThumbnail?.asset?._ref)}
              alt={blogs[0]?.title}
              width={98}
              height={98}
              className="rounded-md mr-4"
            />
          )}

          <h2 className="text-4xl font-bold mb-4 hover:text-gray-500 transition-colors">
            <Link href={`/blog/${blogs[0].slug.current}`}>{blogs[0].title}</Link>
          </h2>
        </div>

        {/* <p className="text-gray-700 mb-4">
          {blogs[0].content?.slice(0, 150)}...
        </p> */}

        <p className="text-gray-700 mb-4">
          {getPlainText(blogs[0].content).slice(0, 150)}...
        </p>

        <div className="flex items-center">
          {blogs[0]?.authorImage?.asset?._ref && (
            <Image
              src={urlFor(blogs[0]?.authorImage?.asset?._ref)}
              width={40}
              height={40}
              alt={blogs[0]?.author}
              className="w-8 h-8 rounded-full mr-2"
            />
          )}
          <span className="text-gray-600">By {blogs[0]?.author}</span>
        </div>
      </div>

      {/* Right Side - Other Posts */}
      <div className="md:w-1/2">
        {blogs.slice(1).map((post) => (
          <div key={post._id} className="mb-12">
            <div className="mb-2 text-gray-600">
              {new Date(post?.publishedAt).toLocaleDateString()} -{" "}
              {post?.readingTime} min read
            </div>

            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-bold mb-4 hover:text-gray-500 transition-colors">
                <Link href={`/blog/${post.slug.current}`}>{post.title}</Link>
              </h3>

              {post?.blogThumbnail?.asset?._ref && (
                <Image
                  src={urlFor(post?.blogThumbnail?.asset?._ref)}
                  alt={post?.title}
                  width={52}
                  height={52}
                  className="rounded-md ml-4"
                />
              )}
            </div>

            <div className="flex items-center">
            {post?.authorImage?.asset?._ref && (

              <Image
                src={urlFor(post?.authorImage?.asset?._ref)}
                alt={post?.author}
                width={40}
                height={40}
                className="rounded-full mr-2"
              />
            )}
              <span className="text-gray-600">By {post.author}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
