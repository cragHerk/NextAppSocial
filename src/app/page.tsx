import Link from "next/link";

export default function Home() {
  const posts = [
    {
      id: 1,
      title: "Post 1",
      content: "This is the content of post 1.",
      author: "John Doe",
    },
    {
      id: 2,
      title: "Post 2",
      content: "This is the content of post 2.",
      author: "Jane Doe",
    },
    // add more posts as needed
  ];

  return (
    <main className="min-h-screen flex flex-col p-24 bg-indigo-950 opacity-90">
      <div className="z-10 w-full items-center justify-center flex-col font-mono text-sm lg:flex">
        <h1 className="text-2xl">Najnowsze posty</h1>
        <ul className="mt-8 space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="bg-white p-4 rounded-md shadow-md">
              <Link href={`/posts/${post.id}`} legacyBehavior>
                <a className="text-xl font-bold text-indigo-950 hover:underline">
                  {post.title}
                </a>
              </Link>
              <p className="mt-2">{post.content}</p>
              <p className="mt-2 text-gray-500">Posted by {post.author}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
