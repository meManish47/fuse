import { createContext, useContext, useEffect, useState } from "react";
import type { User } from "./AuthContext";

export type Blog = {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  now: number;
  user: User;
};

type BlogContextType = {
  blogs: Blog[];
  addBlog: (blog: Blog) => void;
  deleteBlog: (id: number) => void;
  updateBlog: (updatedBlog: Blog) => void;
};

const BlogContext = createContext<BlogContextType | null>(null);

export const BlogProvider = ({ children }: { children: React.ReactNode }) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs") || "[]");
    setBlogs(storedBlogs);
    setLoading(false);
    setHasHydrated(true);
  }, []);

  useEffect(() => {
    if (!hasHydrated) return;
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs, hasHydrated]);

  const addBlog = (blog: Blog) => {
    setBlogs((prev) => [blog, ...prev]);
  };

  const deleteBlog = (id: number) => {
    setBlogs((prev) => prev.filter((blog) => blog.id !== id));
  };

  const updateBlog = (updatedBlog: Blog) => {
    setBlogs((prev) =>
      prev.map((blog) =>
        blog.id === updatedBlog.id ? updatedBlog : blog
      )
    );
  };

  return (
    <BlogContext.Provider
      value={{ blogs, addBlog, deleteBlog, updateBlog }}
    >
      {!loading && children}
    </BlogContext.Provider>
  );
};

export const useBlogs = () => {
  const ctx = useContext(BlogContext);
  if (!ctx) throw new Error("useBlogs must be used inside BlogProvider");
  return ctx;
};
