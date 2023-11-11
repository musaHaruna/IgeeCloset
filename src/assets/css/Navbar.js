import styled from 'styled-components'

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;

  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  ul a {
    font-weight: 600;
  }

  .cta-green-outline-flat {
    font-size: 16px;
    background-color: var(--clr-white-neutral);
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
`
export default Wrapper
