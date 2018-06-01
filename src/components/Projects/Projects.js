import React from 'react';
import styled from 'styled-components';

import Project from './Project'

const Wrapper = styled.section`
  font-size: 1em;
  margin: 15px;
  border-radius: 5px;
  background-color: #E9E9E9;

  > div {
    display: block;
    margin: 25px 25px;
  }
`

const Title = styled.h2`
  display: inline-block;
  font-family: cartographsans-heavy;
  text-transform: uppercase;
  font-size: 4em;
  letter-spacing: -.1em;
`

const Projects = () => (
  <Wrapper>
    <div>
      <Title>Projects</Title>
    
      <Project />
      <Project />
    </div>
  </Wrapper>
)

export default Projects;
