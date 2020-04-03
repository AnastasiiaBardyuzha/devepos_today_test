import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

import { Header } from './Header/Header';

interface Props {
  children: ReactNode;
}

const MainWrapper = styled.div`
    max-width: 1190px;
    padding: 0 20px;
    margin: 0 auto;
`;

export const Layout: FC<Props> = ({ children }) => (
  <MainWrapper>
    <Header />
    {children}
  </MainWrapper>
);
