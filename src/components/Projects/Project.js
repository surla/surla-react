import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  font-family: cartographmono-regular;
  margin-bottom: 0em;;
`

const ProjectInfo = styled.div`
  height: 160px;
`

const ProjectTitle = styled.h3`
  font-family: cartographmono-bold;
  text-transform: uppercase;
  font-size: 2em;
  padding-top: 1em;
`

const List = styled.ul`
  list-style: none;
  margin-top: -20px;

  > li {
    display: inline;
    margin-left: 1em;
    padding: .2em .6em;
    background-color: #FF843F;
  }
`

const Project = () => (
  <Wrapper>
    <ProjectInfo>
      <ProjectTitle>Sinatra Application</ProjectTitle>
      <List>
        <li>Ruby</li>
        <li>Sinatra</li>
      </List>
    </ProjectInfo>
  </Wrapper>
)

export default Project;