import LoadingCard from "@/components/ui/LoadingCard";
import { Blogs } from "@/Types/types";
import React from "react";

const BlogsloadingPage = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();

  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        {blogs.map((blog: Blogs) => (
          <LoadingCard key={blog.id}></LoadingCard>
        ))}
      </div>
    </div>
  );
};

export default BlogsloadingPage;
