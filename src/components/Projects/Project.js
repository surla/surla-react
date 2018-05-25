import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  font-family: cartographmono-regular;
`

const ProjectTitle = styled.h3`
  font-family: cartographmono-bold;
  text-transform: uppercase;
  font-size: 2em;
  margin-left: 1em;
`

const List = styled.ul`
  list-style: none;

  > li {
    display: inline;
    margin-left: 1em;
    padding: .2em .6em;
    background-color: #69DDB8;
  }
`

const Projects = () => (
  <Wrapper>
    <div>
      <ProjectTitle>Sinatra Application</ProjectTitle>
      <List>
        <li>Ruby</li>
        <li>Sinatra</li>
      </List>
    </div>
  </Wrapper>
)

export default Projects;