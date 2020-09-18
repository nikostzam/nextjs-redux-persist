import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPost } from "../../store/post/postActions";
import { useRouter } from "next/router";

function Post() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.post);

  const { id } = router.query;

  useEffect(() => {
    dispatch(fetchPost(id));
  }, []);

  return (
    <>
      <ul>
        <li>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </li>
      </ul>
    </>
  );
}

export default Post;
