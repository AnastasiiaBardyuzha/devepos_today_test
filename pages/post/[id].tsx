import React from 'react';
import { NextPage } from 'next';

import { PostComponent } from '../../components/PostComponent/PostComponent';

interface Props {
  post: Post;
}

const Post: NextPage<Props> = ({ post }) => (
  <PostComponent post={post} />
);

export default Post;
