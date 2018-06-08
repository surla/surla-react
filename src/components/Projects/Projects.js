import React from "react";
import styled from "styled-components";

import Project from "./Project";

const Wrapper = styled.section`
  margin: 15px;
  font-size: 1em;
  border-radius: 5px;
  background-color: #e9e9e9;

  > div {
    display: block;
    margin: 25px 25px;
  }
`;

const Title = styled.h2`
  display: inline-block;
  margin: 0 auto;
  padding-left: 25px;
  font-family: cartographsans-heavy;
  text-transform: uppercase;
  font-size: 4em;
  letter-spacing: -0.1em;
`;

const Projects = () => (
  <Wrapper>
    <Title>Projects</Title>
    <Project title={"Travel Guide"} technology={["CLI", "Ruby"]} />
    <Project title={"Quote List"} technology={["Ruby", "Sinatra"]} />
    <Project
      title={"Fly with me"}
      technology={["Ruby", "Ruby on Rails", "jQuery"]}
    />
    <p>&mdash;</p>
  </Wrapper>
);

export default Projects;
