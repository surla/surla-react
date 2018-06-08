import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  font-family: cartographmono-regular;
  margin: 0;
`;

const ProjectInfo = styled.div``;

const ProjectTitle = styled.h3`
  font-family: cartographsans-heavy;
  letter-spacing: -0.1em;
  padding-left: 25px;
  text-transform: uppercase;
  font-size: 2em;
`;

const List = styled.ul`
  list-style: none;
  margin-top: -20px;

  > li {
    display: inline;
    margin-left: 1em;
    padding-left: 3px;
    padding-right: 3px;
    border-bottom: 6px solid #d64541;
    color: #1d1d1d;
  }
`;

class Project extends React.Component {
  render() {
    const { title, technology } = this.props;

    const code = technology.map((tech, i) => {
      return <li key={tech[i]}>{tech}</li>;
    });

    return (
      <Wrapper>
        <ProjectInfo>
          <ProjectTitle>{title}</ProjectTitle>
          <List>{code}</List>
        </ProjectInfo>
      </Wrapper>
    );
  }
}

export default Project;
