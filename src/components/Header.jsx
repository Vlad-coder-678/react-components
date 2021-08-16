import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrap = styled.nav`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    margin: 0 10px;
  }
`;

const Header = () => (
  <Wrap>
    <Link to="/" exact="true">
      Home
    </Link>
    <Link to="/about">About</Link>
  </Wrap>
);

export default Header;
