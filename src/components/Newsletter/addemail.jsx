import { useState } from "react";

const AddEmail = () => {
  const [inputObject, setInputObject] = useState({
    email: "",
  });

  const [error, setError] = useState({
    email: undefined,
  });
};
  const handleChange = (e, name) => {
    setInputObject({ ...inputObject, [name]: e.target.value });
    handleError(e.target.value, name);
  };

  const handleError = (value, name) => {
    switch (name) {
      case "email":
        if ( email.length<3 ) {
          setError({
            ...error,
            [name]: "Acest email este deja inregistrat la Newsletter!",
          });
        };
break;

break;
        }
    }

const handlesubmit = () => {
    console.log(inputObject);
    fetch(`http://localhost:3001/subscribe`, {
      method: "POST",
      body: JSON.stringify(inputObject),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  export default AddEmail;