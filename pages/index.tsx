import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import axios from 'axios';
import styled from 'styled-components';

import { Layout } from '../components/MyLayout';

interface Props {
  posts: Post[];
}

const PostBody = styled.p`
    font-weight: 400;
    font-size: 14px;
    font-family: poppins, sans-serif;
`;

const PostsList = styled.ul`
    padding: 30px 0 0;
    width: 100%;
    margin: auto;
    margin-top: 30px;
    box-shadow: 1px -2px 15px 9px rgba(207,207,207,1);
`;

const PostItem = styled.li`
  max-width: 90%;
  margin: auto;
  display: block;
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid #cecece;
  overflow: hidden;
`;

const PostLink = styled.a`
    text-decoration: none;
    outline: none;
    font-weight: 600;
    font-size: 18px;
    font-family: poppins, sans-serif;
    cursor: pointer;
`;


const Index: NextPage<Props> = ({ posts }) => {
  return (
    <Layout>
      <PostsList>
        {posts.map(post => (
          <PostItem key={post.id}>
            <Link href="/post/[id]" as={`/post/${post.id}`}>
              <PostLink>
                {post.title}
              </PostLink>
            </Link>
            <PostBody>
              {post.body}
            </PostBody>
          </PostItem>
        ))}
      </PostsList>
    </Layout>
  );
};

Index.getInitialProps = async () => {
  const res = await axios('https://simple-blog-api.crew.red/posts');
  const data = await res.data;

  return {
    posts: [...data].reverse(),
  };
};

export default Index;
