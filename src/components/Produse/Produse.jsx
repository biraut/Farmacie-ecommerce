import CardProdus from "./CardProdus";
import { ProduseContainer } from "./Produse.styled";
import useFetchProd from "../../hooks/useFetchProd";
import { CartContext } from "../../store/context";
import { useContext } from "react";
import { addToCart, removeFromCart } from "../../store/actions";

function Produse() {
  const { prods, error, loading } = useFetchProd();

  // const { stateGlobalCart, dispatchCart } = useContext(CartContext);

  // const handleAddCart = (id, name) => {
  //   dispatchCart(addToCart({ id, name }));
  // };

  // const handleDeleteFromCart = (id) => {
  //   dispatchCart(removeFromCart(id));
  // };

  return (
    <ProduseContainer loc="ProduseContainer">
      {loading && <div>Loading...</div>}
      {error && <div>{error}! Error on getting data, Server is down :( </div>}
      {prods &&
        prods?.map((prod, index) => (
          <CardProdus
            key={prod.name + index}
            name={prod.name}
            img={prod.img}
            {...prod}
          />
        ))}
    </ProduseContainer>
  );
}

export default Produse;
