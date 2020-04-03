import styled from 'styled-components';

export const PostWrapper = styled.div`
    margin: 0 auto;
    max-width: 500px;
`;

export const PostForm = styled.form`
    width: 100%;
`;

export const PostTitle = styled.h3`
    font-weight: 600;
    font-size: 18px;
    font-family: poppins, sans-serif;
`;

export const NewPostTitle = styled.input`
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

export const NewPostContent = styled.textarea`
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

export const Label = styled.label`
    font-family: poppins, sans-serif;
    font-size: 18px;
    margin-bottom: 10px;
`;

export const AddPostButton = styled.button`
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
