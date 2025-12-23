import { useBlogs } from "../BlogContext";
import { BlogCard } from "./blogCard";

export default function ShowAllBlogs() {
  const { blogs } = useBlogs();

  if (blogs.length === 0) {
    return (
      <p className="text-[#333333] font-dmsans text-lg sm:mt-0 mt-16 ">
        No blogs available. Create one!
      </p>
    );
  }

  return (
    <div className="w-full flex flex-wrap gap-8 sm:mt-0 mt-16 ">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
