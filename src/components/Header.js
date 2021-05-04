import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

function Header() {
  const history = useHistory();
  return (
    <Container>
      <HeaderLeft>
        <h1 onClick={() => history.push("/")}>Shopping Mall</h1>
      </HeaderLeft>
      <HeaderRight>
        <h1 onClick={() => history.push("/")}>HOME</h1>
        <h1 onClick={() => history.push("/product")}>PRODUCTS</h1>
        <h1 onClick={() => history.push("/vendor")}>VENDORS</h1>
      </HeaderRight>
    </Container>
  );
}

export default Header;
const Container = styled.div`
  display: flex;
  flex: 1;
  position: fixed;
  top: 0%;
  width: 100%;
  padding: 10px;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid black !important;
  background-color: #44d6db;
  color: white;
  overflow: hidden;
  z-index: 999;
`;
const HeaderLeft = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding-left: 5%;
  > h1 {
    cursor: pointer;
  }
`;
const HeaderRight = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding-right: 5%;
  justify-content: space-evenly;
  > h1 {
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }
`;
