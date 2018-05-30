import React from 'react';
import styled from 'styled-components';

import logo from '../assets/images/logo.svg';

const Image = styled.div`
  margin-top: 3em;
`

const Logo = () => (
  <Image>
    <img src={logo} alt="three dots logo"/>
  </Image>
)

export default Logo;