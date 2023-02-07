
import Link from 'next/link';

const PostItem = ({post}) =>
  <div>
    <div className="post-preview clickable">
      <Link href={`/posts/${post._id}`} as={`/posts/${post._id}`}>
        <h2 className="post-title">
          {post.title}
        </h2>
        <h3 className="post-content">
          {post.content}
        </h3>
      </Link>
    </div>
  </div>

export default PostItem;