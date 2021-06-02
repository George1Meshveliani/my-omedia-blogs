import UserComponents from '../components/UserComponents';
import PostComponents from '../components/PostComponents';
import CommentsComponents from '../components/CommentsComponents';

// import PostComponents from '../components/PostComponents';
const Post = () => {
    return (
            <div>
              <UserComponents />
              <PostComponents />
              <CommentsComponents />
            </div>
        )
}

export default Post;