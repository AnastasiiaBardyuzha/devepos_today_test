import React, { FC, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import { Layout } from '../MyLayout';
import {
  PostWrapper,
  PostForm,
  PostTitle,
  NewPostTitle,
  NewPostContent,
  Label,
  AddPostButton,
} from './styles';

export const NewPost: FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleContent = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { value } = event.target;

    switch (event.target.name) {
      case 'title':
        setTitle(value.replace(/^\s/, ''));
        break;

      case 'content':
        setContent(value.replace(/^\s/, ''));
        break;

      default:
        break;
    }
  };

  const addPost = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await axios.post('https://simple-blog-api.crew.red/posts', { title, body: content });

    router.push('/');
    setTitle('');
    setContent('');
  };

  return (
    <Layout>
      <PostWrapper>
        <PostForm onSubmit={addPost}>
          <PostTitle>
            New Post
          </PostTitle>
          <Label
            htmlFor="postTitle"
          >
            Title
          </Label>
          <NewPostTitle
            type="text"
            placeholder="Write title"
            id="postTitle"
            required
            value={title}
            name="title"
            onChange={handleContent}
          />
          <Label
            htmlFor="postContent"
          >
            Post
          </Label>
          <NewPostContent
            placeholder="Write your post"
            id="postContent"
            required
            value={content}
            name="content"
            onChange={handleContent}
          />
          <AddPostButton
            type="submit"
          >
            Create Post
          </AddPostButton>
        </PostForm>
      </PostWrapper>
    </Layout>
  );
};
