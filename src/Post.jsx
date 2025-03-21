import React, { useState } from "react";

const Post = () => {
  async function getPost() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      console.log(data);

      const randomPost = data[Math.floor(Math.random() * data.length)];
      console.log(randomPost);

      setPost(randomPost);
    } catch (error) {
      console.log("Can't load data because of ", error);
    }
  }

  const [post, setPost] = useState(null);

  return (
    <>
      <section className="mt-20">
        {post && (
          <section className="post-card border-2 w-80 p-4 rounded-lg border-red-500 m-auto mt-8 text-center ">
            <p className="post-id italic font-bold">{ post.id}</p>
            <p className="post-title font-bold  text-md mb-2">{post.title}</p>
            <p className="text-xl">{post.body}</p>
          </section>
        )}
        <section className="text-center">
          <button
            onClick={getPost}
            className="px-4 py-2 bg-blue-500 text-white rounded mt-8"
          >
            Generate
          </button>
        </section>
      </section>
    </>
  );
};

export default Post;
