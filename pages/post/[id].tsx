import React from 'react';
import { NextPage, NextPageContext } from 'next';
import axios from 'axios';

import { PostComponent } from '../../components/PostComponent/PostComponent';

interface Props {
  post: Post;
}

const Post: NextPage<Props> = ({ post }) => (
  <PostComponent post={post} />
);

Post.getInitialProps = async (context: NextPageContext) => {
  const { id } = context.query;
  const postWithComments = await axios.get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`);
  const post = postWithComments.data;

  return {
    post,
  };
};

export default Post;
