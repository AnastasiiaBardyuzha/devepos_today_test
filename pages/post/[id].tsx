import React, { useState } from 'react';
import axios from 'axios';
import { NextPage, NextPageContext } from 'next';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { Layout } from '../../components/MyLayout';

const PostWrapper = styled.div`
    margin: 0 auto;
    max-width: 500px;
`;

const ButtonWrapper = styled.div`
    text-align: right
`;

const DeletePostButton = styled.button`
    width: 130px;
    height: 40px;
    display: inline-block;
    background: #ff7f6c;
    border-radius: 64px;
    text-align: center;
    color: #fff;
    font-family: poppins, sans-serif;
    font-size: 15px;
    line-height: 40px;
    font-weight: 600;
    border: none;
    outline: none;
    cursor: pointer;
    margin-top: 20px;
    transition: background-color 300ms linear;

    &:focus {
    background-color: #e92222;
    }

    &:hover {
    background: #e92222;
    }
`;

const PostTitle = styled.h3`
    font-weight: 600;
    font-size: 18px;
    font-family: poppins, sans-serif;
`;

const PostBody = styled.p`
    font-weight: 400;
    font-size: 14px;
    font-family: poppins, sans-serif;
`;

const CommentsWrapper = styled.div`
    margin-top: 10px;
    border-top: 1px solid #cecece;
`;

const CommentsTitle = styled.h4`
    font-weight: 600;
    font-size: 16px;
    font-family: poppins, sans-serif;
    text-align: center;
`;

const CommentsList = styled.ul`
    padding: 10px 0 0;
    width: 100%;
    margin: auto;
`;

const CommentItem = styled.li`
    max-width: 90%;
    margin: auto;
    display: block;
    margin-bottom: 30px;
    padding-bottom: 10px;
    border-bottom: 1px solid #cecece;
    &:last-child {
        border-bottom: none;  
    }
`;

const CommentBody = styled.p`
    font-weight: 400;
    font-size: 14px;
    font-family: poppins, sans-serif;
`;

const NewComment = styled.textarea`
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

const CommentForm = styled.form`
    width: 100%;
`;

const AddCommentButton = styled.button`
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

interface Props {
  post: Post;
}

const Post: NextPage<Props> = ({ post }) => {
  const [newComment, setNewComment] = useState('');
  const [reFreshPost, setReFreshPost] = useState(post);
  const { comments } = reFreshPost;
  const router = useRouter();

  const handleComment = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;

    setNewComment(value.replace(/^\s/, ''));
  };

  const addComment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await axios.post('https://simple-blog-api.crew.red/comments', { postId: post.id, body: newComment });
    const postWithComments = await axios.get(`https://simple-blog-api.crew.red/posts/${post.id}?_embed=comments`);
    const refreshpost = postWithComments.data;

    setReFreshPost(refreshpost);
    setNewComment('');
  };

  const deletePost = async () => {
    await axios.delete(`https://simple-blog-api.crew.red/posts/${post.id}`);
    router.push('/');
  };


  return (
    <Layout>
      <PostWrapper>
        <ButtonWrapper>
          <DeletePostButton
            type="button"
            onClick={deletePost}
          >
            Delete Post
          </DeletePostButton>
        </ButtonWrapper>
        <PostTitle>{post.title}</PostTitle>
        <PostBody>{post.body}</PostBody>
        <CommentsWrapper>
          <CommentsTitle>
            Comments
          </CommentsTitle>
          {comments
          && (
            <CommentsList>
              {(comments as Comment[]).map(comment => (
                <CommentItem key={comment.id}>
                  <CommentBody>
                    {comment.body}
                  </CommentBody>
                </CommentItem>
              ))}
            </CommentsList>
          )}
          <CommentForm onSubmit={addComment}>
            <NewComment
              placeholder="Write your comment"
              required
              value={newComment}
              onChange={handleComment}
            />
            <AddCommentButton
              type="submit"
            >
              Add Comment
            </AddCommentButton>
          </CommentForm>
        </CommentsWrapper>
      </PostWrapper>
    </Layout>
  );
};

Post.getInitialProps = async (context: NextPageContext) => {
  const { id } = context.query;
  const postWithComments = await axios.get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`);
  const post = postWithComments.data;

  return {
    post,
  };
};

export default Post;
