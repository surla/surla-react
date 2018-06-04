import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  font-family: cartographmono-regular;
  border: 1px solid red;
`;

const ProjectInfo = styled.div``;

const ProjectTitle = styled.h3`
  font-family: cartographmono-bold;
  padding-left: 20px;
  text-transform: uppercase;
  font-size: 2em;
`;

const List = styled.ul`
  list-style: none;
  margin-top: -20px;

  > li {
    display: inline;
    margin-left: 1em;
    background-color: #ff843f;
  }
`;

class Project extends React.Component {
  render() {
    const { title, technology } = this.props;

    const code = technology.map(tech => {
      return <li>{tech}</li>;
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
