import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.section`
  font-family: cartographsans-regular;
  height: 400px;
  background-color: #E9E9E9;;
`

const Title = styled.h2`
  font-family: cartographsans-heavy;
  text-transform: uppercase;
  font-size: 4em;
  letter-spacing: -.1em;
`

const HelloButton = styled.button`
  background-color: red;
  color: #FFF;
`

const Contact = () => (
  <Wrapper>
    <Title>Contact</Title>
    <p>Let's talk about how I can be part of your team to work on the next big project.</p>
    <HelloButton>
      <a href="mailto:hello@josephsurla.com">Say Hello</a>
    </HelloButton>
  </Wrapper>
)

export default Contact;