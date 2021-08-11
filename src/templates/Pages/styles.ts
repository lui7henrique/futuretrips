import styled from "styled-components"

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 100vh;
  max-width: var(--container-width);
  margin: 0 auto;
`

export const Heading = styled.h1`
  font-size: var(--large);
`

export const Body = styled.div`
  div {
    padding: 0 3rem;
    text-align: justify;
  }
`
