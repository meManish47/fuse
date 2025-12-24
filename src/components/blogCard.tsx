import { Link } from "react-router-dom";
import type { Blog } from "../BlogContext";
import { DeleteBlogButton } from "./DeleteBlogButton";
import { UpdateBlogButton } from "./UpdateBlogButton";

export const BlogCard = ({ blog }: { blog: Blog }) => {
  const user = blog.user;

  return (
    <div className="relative w-full sm:w-72">
      <Link
        to={`/blog/${blog.id}`}
        className="relative block overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg bg-gray-200 cursor-pointer"
      >
        <img
          alt=""
          src={
            blog.imageUrl ||
            "https://placehold.co/600x600/333333/white?text=No+Image"
          }
          className="absolute inset-0 h-full w-full object-cover hover:scale-102 transition duration-300"
        />

        <div className="relative bg-linear-to-t pointer-events-none from-gray-900/60 to-gray-900/20 pt-32 sm:pt-48 lg:pt-64">
          <div className="p-4 sm:p-6">
            <time className="block text-xs text-white/80 mb-2">
              {new Date(blog.now).toLocaleDateString()}
            </time>

            <div className="flex items-baseline justify-between gap-2">
              <h3 className="text-lg text-white leading-snug truncate">
                {blog.title}
              </h3>

              <span className="flex items-center gap-2 text-xs text-white/90 shrink-0">
                <span className="h-6 w-6 rounded-full bg-[#333333] flex items-center justify-center text-[10px] font-medium">
                  {user.name.charAt(0).toUpperCase()}
                </span>
                <span className="max-w-22.5 truncate">{user.name}</span>
              </span>
            </div>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
              {blog.content}
            </p>
          </div>
        </div>
      </Link>

      <div className="absolute top-2 right-2 z-50 flex gap-2">
        <UpdateBlogButton blog={blog} />
        <DeleteBlogButton blog={blog} />
      </div>
    </div>
  );
};
