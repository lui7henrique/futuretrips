import styled from "styled-components"

export const Wrapper = styled.div`
  position: fixed;
  z-index: 1100; // bigger than leaflet
  top: var(--medium);
  right: var(--medium);
  color: var(--white);
  cursor: pointer;

  &:hover {
    svg {
      color: var(--highlight);
    }
  }

  svg {
    transition: color 0.2s ease-in-out;
  }
`
