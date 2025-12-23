import Header from "./components/Header";

export default function About() {
  return (
    <div className="h-screen overflow-hidden ">
      <Header />
      <main className="min-h-screen bg-[#C5D8D4] px-6 sm:px-12 lg:px-32 py-8">
        <section className="max-w-4xl mb-16">
          <h1 className="text-4xl font-dmsans font-semibold text-[#333333] mb-4">
            About Fuse
          </h1>
          <p className="text-lg text-[#333333] font-dmsans leading-relaxed">
            Fuse is a space for thoughtful writing — a place where ideas,
            creativity, and everyday experiences come together through words.
          </p>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="overflow-hidden rounded-xl shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Writing workspace"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl font-dmsans font-semibold text-[#333333] mb-4">
              Why Fuse Exists
            </h2>
            <p className="text-[#333333] font-dmsans leading-relaxed mb-4">
              In a fast-moving digital world, meaningful ideas often get lost in
              noise. Fuse was created to slow things down — to give writers and
              readers a calm space to think, reflect, and share.
            </p>
            <p className="text-[#333333] font-dmsans leading-relaxed">
              Whether it’s a short reflection, a creative thought, or a detailed
              story, Fuse values clarity, honesty, and intention in writing.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
