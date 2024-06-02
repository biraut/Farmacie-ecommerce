import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ddd;
`;
export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 246px;
  width: 100%;
`;

export const ProdContainer = styled.div`
  position: relative;
`;

export const ProdButton = styled.button`
  background-color: #4caf50;
  font-size: 18px;
  width: 18vw;
  color: white;
  border: none;
  padding: 20px;
  cursor: pointer;
  border-radius: 5px;
  position: relative;
`;

export const ProdDropdown = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;
  padding: 10px;
  width: 17vw;
`;

export const DropdownItem = styled.button`
  background: none;
  height: 45px;
  color: black;
  border: none;
  padding: 10px 20px 10px 80px;
  text-align: start;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

export const NavLinks = styled.div`
  display: flex;
`;

export const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  padding: 0 15px;
  line-height: 40px;

  &:hover {
    color: #007bff;
  }
`;

export const CarouselContainer = styled.div`
  width: 100%;
  //padding-left: 29.9vw;
`;

export const ContainerTable = styled.div`
  width: 52.1vw;
  height: 25vh;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  right: 17%;
`;
