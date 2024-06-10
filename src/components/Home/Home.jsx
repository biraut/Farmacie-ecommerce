import { HomeContainer, HomeImageBackground, HomeText } from "./Home.style";
import CarouselComponent from "../Navbar2/Carousel";
import Button from "react-bootstrap/Button";
import { ContainerTable } from "../Navbar2/Navbar2.styled";

function Home() {
  return (
    <ContainerTable>
      <CarouselComponent />
    </ContainerTable>
  );
}

export default Home;
