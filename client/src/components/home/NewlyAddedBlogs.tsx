'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getNewlyAddedBlogs } from "@/utilities/sanity-utilities";
import { BlogType } from "@/types/Blog";
import { urlFor } from "@/lib/sanityClient";

const NewlyAddedBlogs: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogType[]>([]);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await getNewlyAddedBlogs();
        setBlogPosts(response.slice(0, 10)); // Limit to 10 blogs
      } catch (error) {
        console.error("Error fetching newly added blogs:", error);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Newly Added Blogs</h2>

      {blogPosts.length > 0 ? (
        blogPosts.map((post, index) => (
          <React.Fragment key={post._id}>
            <div className="mb-8">
              <div className="text-gray-600 mb-2">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                - {post.readingTime}
              </div>

              <h3 className="text-2xl font-bold mb-4 hover:text-gray-500 transition-colors">
                <Link href={`/blog/${post.slug.current}`}>{post.title}</Link>
              </h3>

              <div className="flex items-center">
                {post.authorImage?.asset?._ref ? (
                  <Image
                    src={urlFor(post.authorImage.asset._ref)}
                    alt={post.author}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                ) : (
                  <div className="bg-gray-800 text-white w-8 h-8 flex items-center justify-center rounded-full mr-2">
                    {post.author.charAt(0)}
                  </div>
                )}
                <span className="text-gray-600">By {post.author}</span>
              </div>
            </div>

            {index < blogPosts.length - 1 && (
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
          <button className="text-black text2xl  font-semibold bg-[#3DFF6E] px-8 py-[10px] md:px-10 md:py-[12px] rounded-full inline-flex items-center justify-center border border-transparent hover:bg-transparent hover:border-gray-700 hover:text-theme-primary">
            Show all posts
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NewlyAddedBlogs;
