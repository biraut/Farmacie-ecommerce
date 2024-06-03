import { useState } from "react";
import {
  Nav,
  NavContainer,
  ProdContainer,
  ProdButton,
  ProdDropdown,
  DropdownItem,
  NavLinks,
  NavLink,
} from "./Navbar2.styled";
import { Link } from "react-router-dom";

function Navbar2() {
  const [displayDropdown, setDisplayDropdown] = useState(false);

  const handleClick = (titlu) => {
    console.log("Esti pe titlu-> ", titlu);
  };

  const handleDisplayDropdown = () => {
    setDisplayDropdown(!displayDropdown);
  };
  return (
    <Nav>
      <NavContainer>
        <ProdContainer>
          <ProdButton to="/produse">&#9776; Produse</ProdButton>
          <ProdDropdown>
            <DropdownItem>MEDICAMENTE OTC</DropdownItem>
            <DropdownItem>MEDICAMENTE CU RETETA</DropdownItem>
            <DropdownItem>DISPOZITIVE MEDICALE</DropdownItem>
            <DropdownItem>VITAMINE SI SUPLIMENTE</DropdownItem>
            <DropdownItem>DERMATO-COSMETICE</DropdownItem>
            <DropdownItem>INGRIJIRE PERSONALA</DropdownItem>
            <DropdownItem>DIETA SI WELLNESS</DropdownItem>
            <DropdownItem>VIATA SEXUALA</DropdownItem>
            <DropdownItem>VET</DropdownItem>
          </ProdDropdown>
        </ProdContainer>
        <NavLinks>
          <NavLink to="/noutati">Noutăți</NavLink>
          <NavLink to="/promotii">Promotii</NavLink>
          <NavLink to="/trend">In trend</NavLink>
          <NavLink to="/articole">Articole</NavLink>
          <NavLink to="evenimente">Evenimente</NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}
export default Navbar2;
