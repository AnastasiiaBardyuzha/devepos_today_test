import React from 'react';
import { NextPage } from 'next';
import axios from 'axios';

import { Layout } from '../components/MyLayout';
import { PostsListComponent } from '../components/PostsList/PostsList';

interface Props {
  posts: Post[];
}

const Index: NextPage<Props> = ({ posts }) => (
  <Layout>
    <PostsListComponent posts={posts} />
  </Layout>
);

Index.getInitialProps = async () => {
  const res = await axios('https://simple-blog-api.crew.red/posts');
  const data = await res.data;

  return {
    posts: [...data].reverse(),
  };
};

export default Index;
