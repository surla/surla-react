import React from 'react';
import styled from 'styled-components';

import Project from './Project'

const Wrapper = styled.section`
  height: 600px;
  background-color: #E9E9E9;
`

const Title = styled.h2`
  font-family: cartographsans-heavy;
  text-transform: uppercase;
  font-size: 4em;
  letter-spacing: -.1em;
`

const Projects = () => (
  <Wrapper>
    <Title>Projects</Title>
    <Project />
    <Project />
  </Wrapper>
)

export default Projects;