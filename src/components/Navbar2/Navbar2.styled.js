import { Link } from "react-router-dom";
import styled from "styled-components";
import { DARK_GREEN } from "../../constants/color";

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

export const ProdButton = styled(Link)`
  background-color: #4caf50;
  width: 16vw;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${DARK_GREEN};
  }
`;

export const ProdDropdown = styled.div`
  display: ${(props) => (props.isVisible ? "block" : "none")};
  flex-direction: column;
  position: absolute;
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;
  padding: 10px;
  width: 17vw;
  z-index: 2;
`;

export const DropdownItem = styled(Link)`
  background: none;
  width: 15vw;
  color: black;
  padding: 10px 20px;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  &:hover {
    background-color: #ddd;
  }
`;

export const NavLinks = styled.div`
  display: flex;
`;

export const NavLink = styled(Link)`
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
