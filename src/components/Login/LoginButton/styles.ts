import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const Button = styled.button`
  height: 3rem;
  width: 200px;
  color: ${theme.colors.textPrimary};
  border-radius: 100px;
  margin-top: 2rem;
  font-size: 1.5rem;
  border-style: none;
  background-color: #fff;
    border: 2px solid ${theme.colors.border};
  background-image: linear-gradient(60deg, ${theme.colors.salmon}, ${theme.colors.blue}, ${theme.colors.pink});
  background-size: 200% 200%;
  animation: bgLoginAnimatedGradient 3s infinite linear;
  transition: 0.3s ease-in-out;
  font-family: Lato;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${theme.colors.textPrimary};
    margin-left: 0.7rem;
  }

  :hover {
    border-color: ${theme.colors.blue};
    cursor: pointer;
  }

  @keyframes bgLoginAnimatedGradient {
    0% {
      background-position: 0 85%;
    }

    50% {
      background-position: 100% 20%;
    }

    100% {
      background-position: 0% 85%;
    }
  }
`