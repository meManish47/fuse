import { useRef, useState } from "react";
import { useBlogs } from "../BlogContext";
import { useAuth } from "../AuthContext";
import toast from "react-hot-toast";
import type { Blog } from "../BlogContext";
import { FiEdit3 } from "react-icons/fi";

type Props = {
  blog: Blog;
};

export const UpdateBlogButton = ({ blog }: Props) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const { updateBlog } = useBlogs();
  const { user } = useAuth();

  const [title, setTitle] = useState(blog.title);
  const [content, setContent] = useState(blog.content);
  const [imageUrl, setImageUrl] = useState(blog.imageUrl);

  if (!user || user.id !== blog.user.id) return null;

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    modalRef.current?.showModal();
  };

  const closeModal = () => modalRef.current?.close();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    updateBlog({
      ...blog,
      title,
      content,
      imageUrl,
      now: Date.now(),
    });

    toast.success("Blog updated!", { duration: 1000 });
    closeModal();
  };

  return (
    <>
      <button
        onClick={openModal}
        className=" text-xs px-2 py-1 rounded hover:scale-110 transition duration-200 cursor-pointer"
      >
        <FiEdit3 size={16} />
      </button>

      <dialog ref={modalRef} className="modal " >
        <div className="modal-box border-2 max-w-2xl bg-[#F5F7FB] text-[#333333] rounded-none">
          <h2 className="text-2xl font-semibold mb-6">Edit Blog</h2>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-[#333333] bg-transparent px-4 py-2 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Image URL
              </label>
              <input
                type="url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full border border-[#333333] bg-transparent px-4 py-2 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Content</label>
              <textarea
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full h-36 border border-[#333333] bg-transparent px-4 py-2 resize-none focus:outline-none"
              />
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <button
                type="button"
                onClick={closeModal}
                className="border border-[#333333] px-6 py-2 hover:bg-[#333333] hover:text-white transition"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleSubmit}
                className="bg-[#333333] text-white px-6 py-2 hover:opacity-90 transition"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};
