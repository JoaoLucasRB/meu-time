import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const Text = styled.input`
  border: 2px solid ${theme.colors.border};
  background-color: ${theme.colors.background};
  border-radius: 6px;
  height: 4rem;
  min-width: 300px;
  color: ${theme.colors.textPrimary};
  font-size: 1.5rem;
  padding: 0 1rem;

  ::placeholder {
    color: ${theme.colors.border}
  }
`