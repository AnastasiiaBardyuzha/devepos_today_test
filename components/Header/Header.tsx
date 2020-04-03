import React, { FC } from 'react';
import Link from 'next/link';

import { HeaderLink, HeaderWrapper } from './styles';

export const Header: FC = () => (
  <HeaderWrapper>
    <Link href="/">
      <HeaderLink>Latest Posts</HeaderLink>
    </Link>
    <Link href="/post/new">
      <HeaderLink>New Post</HeaderLink>
    </Link>
  </HeaderWrapper>
);
