import React, { useState } from "react";
import axios from "axios";
import {
  NewsletterContainer,
  Image,
  Content,
  Description,
  CheckboxContainer,
  Form,
  Input,
  Checkbox,
  Title,
  Button,
} from "./Newsletter.style";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = (event) => {
    setEmail(event.target.value.toLowerCase());
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isChecked && email) {
      try {
        const { data: existingEmails } = await axios.get(
          "http://localhost:3001/emails"
        );
        const emailExists = existingEmails.some(
          (entry) => entry.email === email
        );

        if (emailExists) {
          alert("This email is already subscribed.");
          return;
        }
        const response = await axios.post("http://localhost:3001/emails", {
          email,
        });
        console.log("Response:", response.data);
        setEmail("");
        alert("Subscribed successfully!");
      } catch (error) {
        console.error("Error subscribing:", error);
        alert("Failed to subscribe. Please try again.");
      }
    } else {
      alert(
        "Please enter a valid email and confirm you are over 16 years old."
      );
    }
  };
  return (
    <NewsletterContainer>
      <Image
        src="https://comenzi.farmaciatei.ro/themes/bootstrap5/images/portrait-lovely-man-woman-holding-silver-laptop-while-standing-isolated-white-background.png"
        alt="Newsletter"
      />
      <Content>
        <Title>Te-ai abonat la NEWSLETTER-ul nostru?</Title>
        <CheckboxContainer>
          <Checkbox
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label>Prin abonare confirm că am peste 16 ani.</label>
        </CheckboxContainer>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Adresa email"
            value={email}
            onChange={handleInputChange}
            required
          />
          <Button type="submit">MĂ ABONEZ</Button>
        </Form>
      </Content>
    </NewsletterContainer>
  );
};

export default Newsletter;
