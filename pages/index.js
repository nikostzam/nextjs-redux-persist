import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../store/post/postActions";
import Link from "next/link";

function Index() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      <ul>
        {posts &&
          posts.map((post) => {
            return (
              <Link href="/post/[id]" as={`/post/${post.id}`} key={post.id}>
                <li>{post.title}</li>
              </Link>
            );
          })}
      </ul>
    </>
  );
}

export default Index;
