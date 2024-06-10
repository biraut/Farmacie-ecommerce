import React from "react";
import { DivCostum } from "./test.style";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Test = ({ count }) => {
  const x = useParams();
  console.log(x);
  const [suma, setSuma] = useState(0);

  const functie = (a) => {
    setSuma(suma + a);
  };

  useEffect(() => {
    console.log("useEffect");
  }, [suma, count]);

  const ceva = { test: "1", test2: "2", test3: "3" };

  return (
    <>
      {count % 2 === 1 ? (
        <Button key={c} onClick={() => functie(5)} variant="dark">
          <DivCostum loc="DivCostum">{count + suma}</DivCostum>
        </Button>
      ) : (
        <p></p>
      )}
      <Button onClick={() => functie(5)} variant="dark">
        <DivCostum loc="DivCostum">{count + suma}</DivCostum>
      </Button>

      {Object.keys(ceva).map((c) => (
        <DivCostum key={c}>{ceva[c]}</DivCostum>
      ))}
    </>
  );
};

export default Test;
