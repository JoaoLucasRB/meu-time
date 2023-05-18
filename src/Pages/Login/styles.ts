import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  padding: 3rem 2rem;
  border-radius: 24px;
  background: ${theme.colors.backgroundLight};
  -webkit-box-shadow: 5px 5px 56px -19px ${theme.colors.shadow};
  -moz-box-shadow: 5px 5px 56px -19px ${theme.colors.shadow};
  box-shadow: 5px 5px 56px -19px ${theme.colors.shadow};

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TextHighlight = styled.a`
  text-decoration: none;
  color: ${theme.colors.textPrimary};
  margin-top: 1rem;
  transition: 0.3s ease-in-out;

  span {
    font-family: Lato;
    font-weight: 500;
  }

  :hover {
    color: ${theme.colors.blue};
  }
`