import { useState } from "react";
import Dropdown from "./Dropdown";
import Form from 'react-bootstrap/Form';
import LinkNav from "./LinkNav";
import {
  Logo,
  NavbarContainer,
  ButtonDropdown,
  LinkContainerDesktop,
} from "../Navbar/navbar.style";
import SearchBar from "./SearchBar";
import { List, X } from "react-bootstrap-icons";


export const routes = [
  { title: "Favorite", href: "Acasa" },
  { title: "Cosul meu", href: "Promotii" },
  { title: "Contul Meu", href: "Farmacii" },
];

function NavBar() {
  const [displayDropdown, setDisplayDropdown] = useState(false);

  const handleClick = (titlu) => {
    console.log("Esti pe titlu-> ", titlu);
  };

  const handleDisplayDropdown = () => {
    setDisplayDropdown(!displayDropdown);
  };

  return (
    <NavbarContainer>
      <Logo src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTIIHpz4dgcOywt6SNbvtXFpU5vcngmdKh_w&s"></Logo>
      <SearchBar></SearchBar>
      <LinkContainerDesktop>
    
      </LinkContainerDesktop>
      <ButtonDropdown onClick={() => handleDisplayDropdown()}>    

        Click me!
      </ButtonDropdown>
      {displayDropdown && <Dropdown functieDeApelatinDropdown={handleClick} />}
    </NavbarContainer>
  );
}

export default NavBar;