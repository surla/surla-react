import React from "react";
import styled from "styled-components";

import Project from "./Project";

const Wrapper = styled.section`
  font-size: 1em;
  margin: 15px;
  border-radius: 5px;
  background-color: #e9e9e9;

  > div {
    display: block;
    margin: 25px 25px;
  }
`;

const Title = styled.h2`
  display: inline-block;
  font-family: cartographsans-heavy;
  text-transform: uppercase;
  font-size: 4em;
  letter-spacing: -0.1em;
`;

const Projects = () => (
  <Wrapper>
    <Title>Projects</Title>
    <Project />
    <Project />
  </Wrapper>
);

export default Projects;
