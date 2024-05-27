import "../src/App.css";
import { useState } from "react";
//import Appgg from './test'
import NavBar from "./components/navbar";
import Footer from "./components/Footer";
//import Home from "./components/Home/Home";
//import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Footer/>
    </>
  )
}

export default App
