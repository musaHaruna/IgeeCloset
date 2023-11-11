import styled from 'styled-components'

const Wrapper = styled.article`
  .hero-content {
    width: 60%;
    margin: 2rem auto;
  }

  .hero-content h1,
  p {
    text-align: center;
  }

  .hero-content h1 {
    margin-bottom: 2rem;
  }

  .cta-btns {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin: 1.5rem 0;
  }

  .carousel {
   width: 90%;
   margin: 3rem auto;
  }
`
export default Wrapper
