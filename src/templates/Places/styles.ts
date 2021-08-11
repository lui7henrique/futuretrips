import styled from "styled-components"

export const Wrapper = styled.div`
  padding: var(--large) var(--medium);
`

export const Container = styled.section`
  max-width: var(--container);
  padding-bottom: var(--large);
  margin: auto;
`

export const Heading = styled.h1`
  font-size: var(--medium);
  margin-bottom: var(--medium);

  @media (max-width: 768px) {
    font-size: var(--medium);
  }
`

export const Body = styled.div`
  margin-bottom: var(--large);
  text-align: justify;
  transition: all 0.2s ease-in-out;
  p {
    margin-bottom: var(--medium);
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  a {
    text-decoration: none;
    &:hover {
      filter: brightness(0.8);
    }
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`

export const Gallery = styled.div`
  display: grid;
  margin-top: var(--medium);
  grid-gap: 1rem;

  img {
    filter: brightness(0.5);
    border-radius: 5px;
    transition: filter 0.2s ease-in-out;

    background: #121214;
    background-image: linear-gradient(
      to right,
      #121214 0%,
      #171719 20%,
      #121214 40%,
      #121214 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;
    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }

    &:hover {
      filter: brightness(1);
    }
  }
`
