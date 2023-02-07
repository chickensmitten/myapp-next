import PostForm from "@/components/posts/postForm";
import { Fragment } from "react";

function PostNewPage() {
  return (
    <Fragment>
      <h1>New Post</h1>
      <PostForm />
    </Fragment>
  )
}

export default PostNewPage;
