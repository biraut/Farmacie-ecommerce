import { LinkNavStyle } from "./navbar.style";

function LinkNav({ title, href, functieDeApelat }) {
  return (
    <LinkNavStyle onClick={() => functieDeApelat(title)} href={href}>
      {title ? title : "Link"}
    </LinkNavStyle>
  );
}

export default LinkNav;
