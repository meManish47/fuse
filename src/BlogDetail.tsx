import { useParams } from "react-router-dom";
import type { Blog } from "./BlogContext";
import Header from "./components/Header";

export default function BlogDetail() {
  const { id } = useParams();
  const blogs = JSON.parse(localStorage.getItem("blogs") || "[]");
  const blog = blogs.find((b: Blog) => b.id === Number(id));

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#C5D8D4] px-4 sm:px-8 lg:px-32 py-8 sm:py-12 lg:py-16">
        <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] w-full overflow-hidden rounded-xl lg:rounded-2xl shadow-lg mb-8 sm:mb-12">
          <img
            src={
              blog.imageUrl ||
              "https://placehold.co/1200x800/333333/white?text=No+Image"
            }
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-gray-900/90 via-gray-900/60 to-transparent">
            <div className="p-4 sm:p-6 lg:p-8  w-full">
              <time className="block text-xs sm:text-sm text-white/80 mb-2">
                {new Date(blog.now).toLocaleDateString()}
              </time>

              <div className="flex items-baseline justify-between gap-4 w-full ">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-dmsans font-semibold text-white leading-tight">
                  {blog.title}
                </h1>

                <span className="flex items-center gap-2 text-white/90 shrink-0">
                  <span className="h-8 w-8 rounded-full bg-[#333333] flex items-center justify-center text-sm font-medium">
                    {blog.user.name.charAt(0).toUpperCase()}
                  </span>
                  <span className="text-sm max-w-30 truncate">
                    {blog.user.name}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto">
          <article className="bg-white/70 backdrop-blur rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm">
            <p className="font-dmsans text-[#333333] text-base sm:text-lg leading-relaxed whitespace-pre-line">
              {blog.content}
            </p>
          </article>
        </section>
      </main>
    </>
  );
}
