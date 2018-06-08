import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  height: 100%;
  font-size: 3em;
  padding: 1em;
`;

const Intro = styled.section`
  align-self: end;
  font-size: 1em;
`;

const DevTitle = styled.span`
  border-bottom: 10px solid #d64541;
`;

const Header = () => (
  <Wrapper>
    <Intro>
      <p>
        Hello! I'm Joseph Surla<br />and I love building new things with code.
      </p>
      <p>
        I'm what you call a <DevTitle>web developer</DevTitle>—<br />working
        with Javascript and Ruby.
      </p>
      <p>&mdash;</p>
    </Intro>
  </Wrapper>
);

export default Header;
