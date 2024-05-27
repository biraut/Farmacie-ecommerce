import { Link } from "../components/navbar.style";

function LinkNav({ title, href, functieDeApelat }) {
  return (
    <Link onClick={() => functieDeApelat(title)} href={href}>
      {title ? title : "Link"}
    </Link>
  );
}

export default LinkNav;
