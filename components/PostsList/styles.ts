import styled from 'styled-components';

export const PostBody = styled.p`
    font-weight: 400;
    font-size: 14px;
    font-family: poppins, sans-serif;
`;

export const PostsList = styled.ul`
    padding: 30px 0 0;
    width: 100%;
    margin: auto;
    margin-top: 30px;
    box-shadow: 1px -2px 15px 9px rgba(207,207,207,1);
`;

export const PostItem = styled.li`
  max-width: 90%;
  margin: auto;
  display: block;
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid #cecece;
  overflow: hidden;
`;

export const PostLink = styled.a`
    text-decoration: none;
    outline: none;
    font-weight: 600;
    font-size: 18px;
    font-family: poppins, sans-serif;
    cursor: pointer;
`;
