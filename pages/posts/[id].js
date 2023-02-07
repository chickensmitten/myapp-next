import PostItem from '@/components/posts/PostItem';
import PostApi from '../api/posts';

const PostDetail = ({ post }) => {
  return <PostItem key={post._id} post={post} />;
};

export async function getStaticPaths() {
  const { data } = await new PostApi().getAll();
  const posts = data.data.data;
  const paths = posts.map(post => ({params: { id: post._id }}));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { data } = await new PostApi().getById(params.id);
  const post = data.data.data
  return { props: { post }, revalidate: 1 };
}

export default PostDetail;
