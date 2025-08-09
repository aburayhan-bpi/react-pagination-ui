import { useEffect, useState } from "react";
import Pagination from "./components/Pagination";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false); // <---- loading state here

  const postsPerPage = 2;

  useEffect(() => {
    setLoading(true); // start loading
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data: Post[]) => setPosts(data))
      .catch(console.error)
      .finally(() => setLoading(false)); // done loading
  }, []);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const currentPosts = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Posts</h1>

      {loading ? (
        <div className="flex justify-center items-center h-48">
          {/* Simple spinner */}
          <svg
            className="animate-spin h-10 w-10 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
        </div>
      ) : (
        <>
          <ul className="space-y-4 mb-6">
            {currentPosts.map((post) => (
              <li
                key={post.id}
                className="p-4 border border-gray-900 rounded-md bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <h2 className="text-lg font-semibold text-gray-800">
                  {post.title}
                </h2>
                <p className="text-gray-600 mt-1">{post.body}</p>
              </li>
            ))}
          </ul>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </>
      )}
    </div>
  );
}
