import LinkNav from "./LinkNav";
import { routes } from "./navbar";
import { DropdownContainer, LinkContainer } from "../components/navbar.style";

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
