import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #E5E5E5;
        margin-top: 106px !important;
        padding: 30px !important;
    }
`;

const NavbarContainer = styled.div`
  overflow-x: hidden;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  padding: 30px 0 30px;
  background-color: white;
`;

const NavbarItem = styled.div`
    display: block;
    cursor: pointer;
    text-align: center;
    background-color: #3d4552
    padding: 20px 22px 20px;
    margin-bottom: 20px;
    margin: 20px;
    border-radius: 15px;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 10px;
      opacity: 0.9;
      background-color: #3d4552;
      transform: scale(1.02)
    }
    &:active {
        opacity: 0.6;
    }
`;

const NavbarImg = styled.img`
  width: 90px;
  margin-left: 8px;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <GlobalStyle />
      <Link to="/Calendar">
        <NavbarImg src="https://images.typeform.com/images/aBuTPD2X63gc/image/default" />
      </Link>

      <Link to="/Exercise">
        <NavbarItem>
          <i className="fas fa-weight icon"></i>
        </NavbarItem>
      </Link>

      <Link to="/Meditation">
        <NavbarItem>
          <i className="fas fa-leaf icon"></i>
        </NavbarItem>
      </Link>
      <Link to="/Water">
        <NavbarItem>
          <i className="fas fa-water icon"></i>
        </NavbarItem>
      </Link>
    </NavbarContainer>
  );
};

export default Navbar;
