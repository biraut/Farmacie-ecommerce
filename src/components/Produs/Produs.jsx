import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchProd from "../../hooks/useFetchProd";
import useLocalStorage from "../../hooks/useLocalStorage";
import {
  FavoriteButton,
  Description,
  Producer,
  Price,
  AddToCartButton,
  CartIcon,
} from "../Produse/Produse.styled";
import { ProdusContainer, ProdusImgSingle, TitluProdus } from "./Produs.style";

function Produs() {
  const { id } = useParams(); //am extras doar id din {id: 1}
  const { prods: produs, error, loading } = useFetchProd("/" + id);
  const { isLocalDataEmpty, localData, handleLocalData } =
    useLocalStorage("prods");

  const addNewId = () => {
    if (produs) {
      const local = !isLocalDataEmpty ? JSON.parse(localData) : [];
      const newLocalData = [...local, produs.name];
      handleLocalData("prods", JSON.stringify(newLocalData));
    }
  };

  useEffect(() => {
    if (localData || isLocalDataEmpty || produs) addNewId();
  }, [localData, isLocalDataEmpty, produs]);

  return (
    <ProdusContainer>
      {loading && !error && <div>Loading...</div>}
      {error && <div>Error on getting data, Server is down </div>}
      {produs && (
        <>
          <TitluProdus>{produs.description}</TitluProdus>
          <ProdusImgSingle src={produs.img} alt="Product" />
          <FavoriteButton>&#10084;&#65039;</FavoriteButton>
        </>
      )}
    </ProdusContainer>
  );
}

export default Produs;
