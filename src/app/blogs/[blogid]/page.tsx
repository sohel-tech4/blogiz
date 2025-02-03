import BlogDetails from "@/components/ui/BlogDetails";
import { Blogs } from "@/Types/types";

interface BlogId {
  params: {
    blogid: string;
  };
}

//Dekha jai onek gulo data fetch korte hoi sekhetre prothom 3 ta data jeno user dhokar sathe sathe dekhte pai

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();
  return blogs.slice(0, 3).map((blog: Blogs) => {
    blogid: blog.id;
  });
};

const BlogDetailsPage = async ({ params }: BlogId) => {
  const res = await fetch(`http://localhost:5000/blogs/${params.blogid}`);
  const blog = await res.json();
  console.log(blog);
  return (
    <div className="my-10">
      <BlogDetails blog={blog}></BlogDetails>
    </div>
  );
};

export default BlogDetailsPage;
