import { useRef, useState } from "react";
import { useBlogs } from "../BlogContext";
import { useAuth, type User } from "../AuthContext";
import toast from "react-hot-toast";

export default function CreateBlogModal() {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const { addBlog, blogs } = useBlogs();
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const openModal = () => {
    if (!user) {
      toast.error("Please login first!", { duration: 1000 });
      return;
    }
    modalRef.current?.showModal();
  };
  const closeModal = () => modalRef.current?.close();
  const len = blogs.length;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    addBlog({
      user,
      id: len,
      title,
      content,
      imageUrl,
      now: Date.now(),
    });

    setTitle("");
    setContent("");
    setImageUrl("");
    closeModal();
  };

  return (
    <>
      <button
        onClick={openModal}
        className="group relative inline-block text-sm font-medium text-[#333333] cursor-pointer mt-2"
      >
        <span className="absolute inset-0 bg-[#333333] transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
        <span className="relative block border border-[#333333] bg-[#F5F7FB] px-4 w-max sm:px-8 py-2  sm:py-3">
          Create +
        </span>
      </button>

      <dialog ref={modalRef} className="modal">
        <div className="modal-box border-2 max-w-2xl bg-[#F5F7FB] text-[#333333] rounded-none">
          <h2 className="text-2xl font-semibold mb-6">Create New Blog</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter blog title"
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
                placeholder="https://image-link"
                className="w-full border border-[#333333] bg-transparent px-4 py-2 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Content</label>
              <textarea
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your blog content..."
                className="w-full h-36 border border-[#333333] bg-transparent px-4 py-2 resize-none focus:outline-none"
              />
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <button
                type="button"
                onClick={closeModal}
                className="border border-[#333333] px-6 py-2 hover:bg-[#333333] hover:text-white transition cursor-pointer"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="bg-[#333333] text-white px-6 py-2 hover:opacity-90 transition cursor-pointer"
              >
                Publish
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}
