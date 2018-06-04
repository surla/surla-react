import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  font-family: cartographsans-regular;
  margin: 15px;
  border-radius: 5px;
  background-color: #e9e9e9;

  > p {
    border-top: 2px solid red;
    padding-left: 20px;
    text-align: center;
    font-size: 1.3em;
  }
`;

const Title = styled.h2`
  font-family: cartographsans-heavy;
  margin: 0;
  padding-top: 10px;
  padding-left: 20px;
  border-bottom: 2px solid red;
  text-transform: uppercase;
  font-size: 4em;
  letter-spacing: -0.1em;
`;

const HelloButton = styled.button`
  margin-left: 20px;
  color: #fff;
`;

const Contact = () => (
  <Wrapper>
    <Title>Contact</Title>
    <p>
      Let's talk about how I can be part of your team to work on the next big
      project.
    </p>
    <HelloButton>
      <a href="mailto:hello@josephsurla.com">Say Hello</a>
    </HelloButton>
  </Wrapper>
);

export default Contact;
