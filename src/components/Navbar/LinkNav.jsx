import { LinkNavStyle } from "./Navbar.style";

function LinkNav({ title, href, functieDeApelat }) {
  return (
    <LinkNavStyle
      onClick={() => functieDeApelat(title)}
      to={href}
      onMouseDown={() => (title === "Cosul meu" ? console.log("salut") : null)}
    >
      {title ? title : "Link"}
    </LinkNavStyle>
  );
}

export default LinkNav;
