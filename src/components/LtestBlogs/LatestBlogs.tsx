import { Blogs } from "@/Types/types";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";

const LatestBlogs = ({ blogs }: { blogs: Blogs[] }) => {
  return (
    <div className=" my-5 p-2 md:w-[65%] mx-auto">
      <h1 className="text-center text-4xl my-2">
        Ltest Blogs of <span className="text-accent">Blogiz</span>
      </h1>
      <p className="text-center text-xl text-gray-500 w-1/2 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="grid md:grid-cols-2 my-5 gap-5">
        {blogs.slice(0, 2).map((blog) => (
          <LatestBlogCard key={blog.id} blog={blog}></LatestBlogCard>
        ))}
      </div>
      <div className="grid md:grid-cols-3  my-5  gap-5">
        {blogs.slice(2, 5).map((blog) => (
          <BlogCard key={blog.id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
