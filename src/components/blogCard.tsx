import { Link } from "react-router-dom";

export const BlogCard = ({
  blog,
}: {
  blog: { title: string; content: string; imageUrl: string; now: number ,id:number};
}) => {
  return (
    <Link className="relative overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg w-80  bg-gray-200 cursor-pointer" to={`/blog/${blog.id}`}>
      <img
        alt=""
        src={
          blog.imageUrl ||
          "https://placehold.co/600x600/333333/white?text=No+Image"
        }
        className="absolute inset-0 h-full w-full object-cover hover:scale-102 transition duration-300"
      />

      <div className="relative bg-linear-to-t pointer-events-none from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
        <div className="p-4 sm:p-6">
          <time dateTime="2022-10-10" className="block text-xs text-white/90">
            {new Date(blog.now).toLocaleDateString()}
          </time>

          <a href="#">
            <h3 className="mt-0.5 text-lg text-white">{blog.title}</h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
            {blog.content}
          </p>
        </div>
      </div>
    </Link>
  );
};
