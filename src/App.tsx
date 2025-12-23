import CreateBlogModal from "./components/CreateBlogModal";
import Header from "./components/Header";
import ShowAllBlogs from "./components/ShowAllBlogs";

function App() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <div className="min-h-screen w-screen flex flex-col px-2 sm:px-32 py-16 bg-[#C5D8D4] ">
        <div className="w-full h-24 flex justify-between  items-start">
          <div>
            <h1 className="flex items-center text-3xl text-[#333333] font-dmsans font-semibold mb-2">
              Blog
            </h1>
            <p className="text-[#333333] font-dmsans  text-base sm:font-semibold">
              Thoughtful writing on ideas, creativity, and everyday experiences
              worth sharing.
            </p>
          </div>
          <div>
            <CreateBlogModal />
          </div>
        </div>
        <ShowAllBlogs />
      </div>
    </main>
  );
}

export default App;
