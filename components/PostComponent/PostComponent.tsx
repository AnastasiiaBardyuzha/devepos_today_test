import React, { FC, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import { Layout } from '../MyLayout';
import {
  PostWrapper,
  ButtonWrapper,
  DeletePostButton,
  PostTitle,
  PostBody,
  CommentsWrapper,
  CommentsTitle,
  CommentsList,
  CommentItem,
  CommentBody,
  NewComment,
  CommentForm,
  AddCommentButton,
} from './styles';

interface Props {
  post: Post;
}

export const PostComponent: FC<Props> = ({ post }) => {
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
