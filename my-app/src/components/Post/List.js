import React from 'react';
import { Link } from 'react-router-dom';

import shortDescription from "../../utils/shortDescription";

const PostList = (props) => {
  const { posts } = props;

  return (
    <div>
      {posts.map(post => (
        <div key={post.id} className="mb-3">
          <h3>{post.title}</h3>
          <p>{shortDescription(post.body)}</p>
          <button onClick={() => props.onDelete(post.id)} className="btn btn-danger mr-2">Удалить</button>
          <Link to={`/posts/${post.id}`} className="btn btn-primary">Подробнее</Link>
        </div>
      ))}
    </div>
  );
}

export default PostList;