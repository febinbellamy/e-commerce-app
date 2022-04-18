import React from "react";
import styled from "styled-components";
import { ShoppingCartOutlined, HomeOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })};
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  cursor: pointer;
  ${mobile({ display: "none" })};
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ paddingLeft: "35px", fontSize: "20px" })};
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 3, justifyContent: "center" })};
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  text-decoration: none;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  console.log(quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
            <Language>
              <HomeOutlined />
            </Language>
          </Link>
        </Left>
        <Center>
          <Logo>STORE.</Logo>
        </Center>
        <Right>
          <Link
            to="/register"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link
            to="/login"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          <Link
            to="/cart"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
