import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrap = styled.nav`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: #000;
    text-transform: uppercase;
    margin: 0 10px;
    cursor: pointer;
  }

  a:hover {
    color: #777;
  }

  .activeLink {
    color: white;
  }
`;

const Header = () => (
  <Wrap>
    <NavLink to="/" exact activeClassName="activeLink">
      Home
    </NavLink>
    <NavLink to="/about" activeClassName="activeLink">
      About
    </NavLink>
  </Wrap>
);

export default Header;
