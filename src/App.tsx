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
  const postsPerPage = 2;

  // Fetch posts once on mount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data: Post[]) => setPosts(data))
      .catch(console.error);
  }, []);

  // Calculate total pages based on posts length
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Get current page posts
  const currentPosts = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Posts</h1>

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
    </div>
  );
}
