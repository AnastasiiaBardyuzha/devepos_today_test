import React, { useState } from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import axios from 'axios';
import { useRouter } from 'next/router';

import { Layout } from '../../components/MyLayout';

const PostWrapper = styled.div`
    margin: 0 auto;
    max-width: 500px;
`;

const PostForm = styled.form`
    width: 100%;
`;

const PostTitle = styled.h3`
    font-weight: 600;
    font-size: 18px;
    font-family: poppins, sans-serif;
`;

const NewPostTitle = styled.input`
    width: 100%;
    height: 40px;
    outline: none;
    border: none;
    border-bottom: 1px solid #000;
    font-family: poppins, sans-serif;
    font-size: 15px;
    line-height: 20px;
    color: #000;
    margin-bottom: 26px;
    margin-top: 10px;
    transition: border-bottom 200ms linear;

    &:focus,
    &:hover {
      border-bottom: 2px solid #000;
    }
`;

const NewPostContent = styled.textarea`
    width: 100%;
    height: 100px;
    padding: 5px;
    border-radius: 5px;
    margin-top: 10px;
    font-size: 15px;
    border: 1px solid #000;
    outline: none;
    resize: none;
`;

const Label = styled.label`
    font-family: poppins, sans-serif;
    font-size: 18px;
    margin-bottom: 10px;
`;

const AddPostButton = styled.button`
  width: 170px;
  height: 50px;
  background: #008aff;
  border-radius: 64px;
  text-align: center;
  color: #fff;
  font-family: poppins, sans-serif;
  font-size: 15px;
  line-height: 50px;
  font-weight: 600;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 300ms linear;

  &:focus {
    background-color: #ff7f6c;
  }

  &:hover {
    background: #ff7f6c;
  }
`;

const New: NextPage = () => {
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

export default New;
