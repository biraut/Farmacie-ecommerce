import { useState, useContext } from "react";
import Dropdown from "./Dropdown";
import { CartContext } from "../../store/context";
import {
  Logo,
  DropdownContainerFav,
  LinkNavStyle,
  DropdownItem,
  NavbarContainer,
  ButtonDropdown,
  LinkContainerDesktop,
  LogoContainer,
  LinkNavFav,
  LinkNavCart,
  Icon,
} from "./Navbar.style";
import { List, X } from "react-bootstrap-icons";
import SearchBar from "./SearchBar";
import { removeFromCart, removeFromFav } from "../../store/actions";

function NavBar() {
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const [showFavDropdown, setShowFavDropdown] = useState(false);
  const [showCartDropdown, setShowCartDropdown] = useState(false);
  const { stateGlobalCart } = useContext(CartContext);
  const favValue = stateGlobalCart?.favValue || [];
  const cartValue = stateGlobalCart?.cartValue || [];

  const handleDisplayDropdown = () => {
    setDisplayDropdown(!displayDropdown);
  };

  const groupedFavValue = favValue.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  const groupedCartValue = cartValue.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  const handleRemoveFromFav = (id) => {
    dispatchCart(removeFromFav(id));
  };

  const handleRemoveFromCart = (id) => {
    dispatchCart(removeFromCart(id));
  };

  return (
    <NavbarContainer>
      <LogoContainer to="/home">
        <Logo src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTIIHpz4dgcOywt6SNbvtXFpU5vcngmdKh_w&s"></Logo>
      </LogoContainer>
      <SearchBar></SearchBar>
      <LinkContainerDesktop>
        <LinkNavStyle
          onMouseEnter={() => favValue.length > 0 && setShowFavDropdown(true)}
          onMouseLeave={() => setShowFavDropdown(false)}
        >
          Favorite
          <LinkNavFav>{favValue.length}</LinkNavFav>
          {showFavDropdown && (
            <DropdownContainerFav>
              {groupedFavValue.map((item, index) => (
                <DropdownItem key={index}>
                  <Icon src={item.img}></Icon>
                  {item.name}
                  <span style={{ marginLeft: "5px" }}>{item.price}</span>
                  <button
                    style={{ marginLeft: "5px" }}
                    onClick={() => handleRemoveFromFav(item.id)}
                  >
                    x
                  </button>
                </DropdownItem>
              ))}
            </DropdownContainerFav>
          )}
        </LinkNavStyle>
        <LinkNavStyle
          onMouseEnter={() => cartValue.length > 0 && setShowCartDropdown(true)}
          onMouseLeave={() => setShowCartDropdown(false)}
        >
          Cosul Meu
          <LinkNavCart>{cartValue.length}</LinkNavCart>
          {showCartDropdown && (
            <DropdownContainerFav>
              {groupedCartValue.map((item, index) => (
                <DropdownItem key={index}>
                  <span style={{ marginRight: "5px" }}>x{item.quantity}</span>
                  <Icon src={item.img}></Icon>
                  {item.name}
                  <span style={{ marginLeft: "5px" }}>{item.price}</span>
                  <button
                    style={{ marginLeft: "5px" }}
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    x
                  </button>
                </DropdownItem>
              ))}
            </DropdownContainerFav>
          )}
        </LinkNavStyle>
      </LinkContainerDesktop>
      <ButtonDropdown onClick={() => handleDisplayDropdown()}>
        {!displayDropdown ? <List size={40} /> : <X size={40} />}
      </ButtonDropdown>
      {displayDropdown && <Dropdown functieDeApelatinDropdown={handleClick} />}
    </NavbarContainer>
  );
}

export default NavBar;
