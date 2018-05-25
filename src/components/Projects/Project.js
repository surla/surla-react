import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  font-family: cartographmono-regular;
`

const ProjectTitle = styled.h3`
  text-transform: uppercase;
  font-size: 2em;
`

const List = styled.ul`
  list-style: none;

  .li {
    display: inline;
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
    <div>
      <h3>QuoteList</h3>
      <ul>
        <li>Ruby</li>
        <li>Ruby on Rails</li>
        <li>jQuery</li>
      </ul>
    </div>
  </Wrapper>
)

export default Projects;