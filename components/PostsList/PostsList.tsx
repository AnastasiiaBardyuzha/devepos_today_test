import React, { FC } from 'react';
import Link from 'next/link';
import {
  PostsList,
  PostItem,
  PostLink,
  PostBody,
} from './styles';

interface Props {
  posts: Post[];
}

export const PostsListComponent: FC<Props> = ({ posts }) => (
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
);
