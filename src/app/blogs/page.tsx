"use client";
import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";
import { Blogs } from "@/Types/types";
import React from "react";

const AllBlogs = () => {
  // const res = await fetch("http://localhost:5000/blogs", {
  //   cache: "no-store",
  // // });
  // const blogs = await res.json();

  const { data: blogs, isLoading } = useGetBlogsQuery("");

  return (
    <div className=" my-5 p-2 md:w-[65%] mx-auto">
      <h1 className="text-center text-4xl my-2">
        All Blogs of <span className="text-accent">Blogiz</span>
      </h1>
      <p className="text-center text-xl text-gray-500 w-1/2 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="grid md:grid-cols-3 my-5 gap-5">
        {blogs?.map((blog: Blogs) => (
          <BlogCard key={blog.id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
