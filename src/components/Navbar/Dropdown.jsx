import LinkNav from "./LinkNav";
import { DropdownContainer, LinkContainer } from "./Navbar.style";
import { routes } from "./Navbar";

function Dropdown({ functieDeApelatinDropdown }) {
  return (
    <DropdownContainer>
      <LinkContainer>
        {routes.map((el, index) => (
          <LinkNav
            key={name + index}
            title={el.title}
            href={el.href}
            subtitle="Subtitlu"
            functieDeApelat={functieDeApelatinDropdown}
          />
        ))}
      </LinkContainer>
    </DropdownContainer>
  );
}

export default Dropdown;
