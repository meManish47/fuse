import { useBlogs } from "../BlogContext";
import { BlogCard } from "./blogCard";

export default function ShowAllBlogs() {
  const { blogs } = useBlogs();

  if (blogs.length === 0) {
    return (
      <p className="text-[#333333] font-dmsans text-lg">
        No blogs available. Create one!
      </p>
    );
  }

  return (
    <div className="w-full flex flex-wrap gap-8">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
