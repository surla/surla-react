import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: grid;
  height: 600px;
  font-size: 2em;
`;

const Intro = styled.p`
  align-self: end;
  font-size: 1em;
`



const Header = () => (
  <Wrapper>
    <Intro>Hello, I'm Joseph Surla<br/>and I love building new things with code.<br/></Intro>
    <p>I'm what you call a full stack developer—<br/>working with Javascript and Ruby.</p>
    <p>&mdash;</p>
  </Wrapper>
)

export default Header;