import { FiTrash2 } from "react-icons/fi";
import { useAuth } from "../AuthContext";
import { useBlogs } from "../BlogContext";
import type { Blog } from "../BlogContext";

type Props = {
  blog: Blog;
};

export const DeleteBlogButton = ({ blog }: Props) => {
  const { user } = useAuth();
  const { deleteBlog } = useBlogs();

  if (!user || user.id !== blog.user.id) return null;

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (confirm("Are you sure you want to delete this blog?")) {
      deleteBlog(blog.id);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="text-red-500/90  text-xs px-2 py-1 rounded hover:scale-110 transition duration-200 cursor-pointer"
    >
      <FiTrash2 size={16} />
    </button>
  );
};
