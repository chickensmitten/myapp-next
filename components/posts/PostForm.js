import PostApi from '@/pages/api/posts';
import { useRouter } from 'next/router';
import { useState } from 'react';

const PostForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredContent, setEnteredContent] = useState('');
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    const body = {
      title: enteredTitle,
      content: enteredContent
    }
    const {data} = await new PostApi().create(body);
    console.log(data)
    router.push("/posts")
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Create New Posts</p>
      <label>Title</label>
      <input
        name="title"
        value={enteredTitle}
        onChange={(event) => setEnteredTitle(event.target.value)}
      />
      <br></br>
      <label>Content</label>
      <input
        name="content"
        value={enteredContent}
        onChange={(event) => setEnteredContent(event.target.value)}
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default PostForm;
