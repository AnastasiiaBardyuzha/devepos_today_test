import styled from 'styled-components';

export const HeaderLink = styled.a`
    text-decoration: none;
    outline: none;
    text-transform: uppercase;
    color: #fff;
    font-family: poppins, sans-serif;
    font-weight: bold;
    font-size: 13px;
    line-height: 20px;
    transition: color 300ms linear;
    padding-bottom: 8px;
    position: relative;
    cursor: pointer;
    margin-right: 20px;

    &:after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      border-radius: 4px;
      background-color: #ff9c8e;
      width: 0;
      transition: width 0.1s linear;
    }

    &:hover:after {
      width: 100%;
      left: 0;
    }

    &:focus:after {
      width: 100%;
      left: 0;
    }
`;

export const HeaderWrapper = styled.div`
 background: #008aff;
 padding: 10px 20px;
`;
