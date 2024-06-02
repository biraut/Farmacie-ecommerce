import "../src/App.css";
import { useState } from "react";
//import Appgg from './test'
import NavBar from "./components/Navbar/Navbar";

import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Navbar2 from "./components/Navbar2/Navbar2";
import CarouselComponent from "./components/Navbar2/Carousel";
import { ContainerTable } from "./components/Navbar2/Navbar2.styled";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Navbar2 />
      <ContainerTable>
        <CarouselComponent />
      </ContainerTable>
      <Footer />
    </>
  );
}

export default App;
