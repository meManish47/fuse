import { createContext, useContext, useEffect, useState } from "react";

export type Blog = {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  now: number;
};

type BlogContextType = {
  blogs: Blog[];
  addBlog: (blog: Blog) => void;
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

  return (
    <BlogContext.Provider value={{ blogs, addBlog }}>
      {!loading && children}
    </BlogContext.Provider>
  );
};

export const useBlogs = () => {
  const ctx = useContext(BlogContext);
  if (!ctx) throw new Error("useBlogs must be used inside BlogProvider");
  return ctx;
};
