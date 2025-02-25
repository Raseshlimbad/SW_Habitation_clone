"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface remainingBlogType {
  date: string;
  readTime: string;
  title: string;
  authorImage?: string;
  blogThumbnail?: string;
  author: string;
  icon: string;
  link: string;
}

interface Props {
  remainingBlogs: remainingBlogType[];
}

const MoreLatestPostsSection: React.FC<Props> = ({ remainingBlogs }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 mt-48">
      <h2 className="text-3xl font-bold text-center mb-12">
        More Latest Blogs
      </h2>

      {remainingBlogs.length > 0 ? (
        remainingBlogs.slice(0, 10).map((post, index) => (
          <React.Fragment key={index}>
            <div className="mb-8">
              <div className="text-gray-600 mb-2">
                {post.date} - {post.readTime}
              </div>

              <h3 className="text-2xl font-bold mb-4 hover:text-gray-500 transition-colors">
                <Link href={post.link}>{post.title}</Link>
              </h3>

              <div className="flex items-center">
                <div className=" text-white w-8 h-8 flex items-center justify-center mr-2 mt-4">
                  {/* {post.icon} */}
                  {post.authorImage && (
                    <Image
                      src={post?.authorImage || post?.icon}
                      alt="Author Image"
                      width={32}
                      height={32}
                      className="object-cover rounded-lg mb-4"
                    />
                  )}
                </div>
                <span className="text-gray-600">By {post.author}</span>
              </div>
            </div>

            {index < remainingBlogs.length - 1 && (
              <hr className="border-t border-gray-200 my-12" />
            )}
          </React.Fragment>
        ))
      ) : (
        <p className="text-center text-gray-500">No blogs found.</p>
      )}

      {/* Show all posts button */}
      <div className="flex justify-center mt-32 border-t-2 py-10">
        <Link href="/blogs">
          <button className="text-black text2xl font-semibold bg-[#3DFF6E] px-8 py-[10px] md:px-10 md:py-[12px] rounded-full inline-flex items-center justify-center border border-transparent hover:bg-transparent hover:border-gray-700 hover:text-theme-primary">
            Load More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MoreLatestPostsSection;
