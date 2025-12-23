import { useParams } from "react-router-dom";
import Header from "./components/Header";

type Blog = {
  title: string;
  content: string;
  imageUrl: string;
  now: number;
  id: number;
};

export default function BlogDetail() {
  const { id } = useParams();
  const blogs = JSON.parse(localStorage.getItem("blogs") || "[]");
  const blog = blogs.find((b: Blog) => b.id === Number(id));
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#C5D8D4] px-32 py-16">
        <section className="relative h-[70vh] w-full overflow-hidden rounded-2xl shadow-lg mb-12">
          <img
            src={
              blog.imageUrl ||
              "https://placehold.co/1200x800/333333/white?text=No+Image"
            }
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-gray-900/90 via-gray-900/60 to-transparent">
            <div className="p-8 max-w-4xl">
              <time className="block text-sm text-white/80 mb-2">
                {new Date(blog.now).toLocaleDateString()}
              </time>

              <h1 className="text-4xl font-dmsans font-semibold text-white leading-tight">
                {blog.title}
              </h1>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto">
          <article className="bg-white/70 backdrop-blur rounded-xl p-8 shadow-sm">
            <p className="font-dmsans text-[#333333] text-lg leading-relaxed whitespace-pre-line">
              {blog.content}
            </p>
          </article>
        </section>
      </main>
    </>
  );
}
