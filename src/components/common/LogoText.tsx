import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const Text = styled.div`
  color: ${theme.colors.textPrimary};
  font-family: Acquire;
  font-size: 3rem;
  margin-bottom: 2rem;
`

function LogoText() {
  return (
    <Text>Meu Time</Text>
  );
}

export default LogoText;
