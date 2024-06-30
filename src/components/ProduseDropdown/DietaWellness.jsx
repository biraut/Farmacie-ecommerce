import CardProdus from "../Produse/CardProdus";
import { ProduseContainer } from "../Produse/Produse.styled";
import useFetchProd from "../../hooks/useFetchProd";

function DietaWellness() {
  const { prods, error, loading } = useFetchProd();

  return (
    <ProduseContainer loc="ProduseContainer">
      {loading && <div>Loading...</div>}
      {error && <div>{error}! Error on getting data, Server is down :( </div>}
      {prods &&
        prods
          ?.filter((el) => el.categorie === "DietaWellness")
          .map((prod, index) => (
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

export default DietaWellness;
