import { useState } from "react";
import Dropdown from "./Dropdown";
import Form from 'react-bootstrap/Form';
import LinkNav from "./LinkNav";
import {
  Logo,
  NavbarContainer,
  ButtonDropdown,
  LinkContainerDesktop,
} from "../components/navbar.style";

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
      <Logo src="https://logowik.com/content/uploads/images/cat8600.jpg"></Logo>
      <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Ce vrei sa cauti astazi?"
              className="me-2"
              aria-label="Search"
            />
          </Form>
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
        Click me!
      </ButtonDropdown>
      {displayDropdown && <Dropdown functieDeApelatinDropdown={handleClick} />}
    </NavbarContainer>
  );
}

export default NavBar;