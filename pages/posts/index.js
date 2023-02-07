import PostItem from '@/components/posts/PostItem';
import Link from 'next/link';
import { Fragment } from 'react';
import PostApi from '../api/posts';

function AllPostsPage({ posts }) {
  return (
    <Fragment>
      <h1>Get All Posts</h1>
      <p>List of all Posts below</p>
      {posts.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
      <Link href="/posts/new">
        Create New Post
      </Link>
    </Fragment>
  );
}

export async function getStaticProps() {
  const { data } = await new PostApi().getAll();
  const posts = data.data.data;

  return {
    props: { posts },
    revalidate: 1800,
  };
}

export default AllPostsPage;
