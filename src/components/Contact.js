import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.section`
  height: 400px;
  background-color: #E9E9E9;;
`

const Title = styled.h2`
  font-family: cartographsans-heavy;
  text-transform: uppercase;
  font-size: 4em;
  letter-spacing: -.1em;
`

const Contact = () => (
  <Wrapper>
    <Title>Contact</Title>
  </Wrapper>
)

export default Contact;