import styled from "styled-components"

export const Footer = styled.footer`
  display: flex;
  position: fixed;
  bottom: 0;
  background: var(--shape);
  z-index: 1500;
  width: 100vw;
  height: 4rem;
  align-items: center;

  p {
    margin: 0 auto;
    font-size: 1.5rem;
  }
  a {
    text-decoration: none;
    font-size: 1.5rem;
    transition: all 0.2s ease-in-out;

    &:hover {
      filter: brightness(0.8);
    }
  }
`
