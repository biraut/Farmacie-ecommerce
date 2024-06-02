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
          <ProdButton>&#9776; Produse</ProdButton>
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
          <NavLink href="#">Noutăți</NavLink>
          <NavLink href="#">Promotii</NavLink>
          <NavLink href="#">In trend</NavLink>
          <NavLink href="#">Cariere</NavLink>
          <NavLink href="#">Articole</NavLink>
          <NavLink href="#">Farmacii</NavLink>
          <NavLink href="#">Evenimente</NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}
export default Navbar2;
