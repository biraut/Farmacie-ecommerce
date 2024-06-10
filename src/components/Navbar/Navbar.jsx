import { useState } from "react";
import Dropdown from "./Dropdown";
import LinkNav from "./LinkNav";
import {
  Logo,
  NavbarContainer,
  ButtonDropdown,
  LinkContainerDesktop,
  LogoContainer,
} from "./Navbar.style";
import { List, X } from "react-bootstrap-icons";
import SearchBar from "./SearchBar";

export const routes = [
  { title: "Favorite", href: "favorite" },
  { title: "Cosul meu", href: "cos" },
  { title: "Contul meu", href: "cont" },
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
      <LogoContainer to="/home">
        <Logo src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTIIHpz4dgcOywt6SNbvtXFpU5vcngmdKh_w&s"></Logo>
      </LogoContainer>
      <SearchBar></SearchBar>
      <LinkContainerDesktop>
        {routes.map((el, index) => (
          <LinkNav
            key={name + index}
            title={el.title}
            href={el.href}
            functieDeApelat={handleClick}
          />
        ))}
      </LinkContainerDesktop>
      <ButtonDropdown onClick={() => handleDisplayDropdown()}>
        {!displayDropdown ? <List size={40} /> : <X size={40} />}
      </ButtonDropdown>
      {displayDropdown && <Dropdown functieDeApelatinDropdown={handleClick} />}
    </NavbarContainer>
  );
}

export default NavBar;
