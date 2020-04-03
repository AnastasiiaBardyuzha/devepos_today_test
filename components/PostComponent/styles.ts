import styled from 'styled-components';

export const PostWrapper = styled.div`
    margin: 0 auto;
    max-width: 500px;
`;

export const ButtonWrapper = styled.div`
    text-align: right
`;

export const DeletePostButton = styled.button`
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

export const PostTitle = styled.h3`
    font-weight: 600;
    font-size: 18px;
    font-family: poppins, sans-serif;
`;

export const PostBody = styled.p`
    font-weight: 400;
    font-size: 14px;
    font-family: poppins, sans-serif;
`;

export const CommentsWrapper = styled.div`
    margin-top: 10px;
    border-top: 1px solid #cecece;
`;

export const CommentsTitle = styled.h4`
    font-weight: 600;
    font-size: 16px;
    font-family: poppins, sans-serif;
    text-align: center;
`;

export const CommentsList = styled.ul`
    padding: 10px 0 0;
    width: 100%;
    margin: auto;
`;

export const CommentItem = styled.li`
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

export const CommentBody = styled.p`
    font-weight: 400;
    font-size: 14px;
    font-family: poppins, sans-serif;
`;

export const NewComment = styled.textarea`
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

export const CommentForm = styled.form`
    width: 100%;
`;

export const AddCommentButton = styled.button`
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
