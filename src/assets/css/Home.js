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

  .how-it-works {
    background-color: #f2f7f8;
    padding: 2rem 0;
  }

  .how-it-works h2 {
    font-size: var(--font-heading);
    text-align: center;
  }

  .how-it-works-card {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    margin: 2rem auto;
  }

  .how-it-works-card p {
    text-align: left;
  }

  .steps {
    text-align: left;
    display: flex;
    align-items: center;
    gap: 2rem;
    margin: 2rem auto;
  }

  .line {
    width: 180px;
    border: 0.2px solid #1e1e1e;
  }

  .step-card {
    padding: 2rem;
    background-color: var(--clr-white);
    box-shadow: 0px 4px 20px 20px #f7f7f7;
    border-radius: 16px;
  }
  .step-heading {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 1rem 0;
  }

  .step-heading h2 {
    font-size: 32px;
    width: 50px;
    height: 50px;
    padding: 1rem;
    background-color: var(--clr-green-2);
    color: var(--clr-white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .step-heading h4 {
    font-size: 22px;
    line-height: 1.3;
  }

  .step-card p {
    color: #737d8c;
    font-size: 16px;
    margin: 1rem 0;
  }

  .ads {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 4rem auto;
  }

  .line-broad {
    height: 18px;
    width: 400px;
    background-color: var(--clr-green-2);
    border-radius: 25px;
    margin-left: 6rem;
  }
  .line-thin {
    height: 10px;
    width: 200px;
    background-color: var(--clr-green-2);
    border-radius: 25px;
    margin: 0.75rem 0;
  }

  .line-thin.left {
    margin-left: 6rem;
  }

  .line-broad.right {
    margin-left: 2rem;
  }

  .ads .content {
    margin: 4rem 0;
    align-self: center;
  }

  .ads .content .text {
    margin: 2rem 0;
  }
  .ads .content .text p {
    font-size: 28px;
    text-align: left;
    color: #212121;
  }

  .ads .content .text h4 {
    font-size: 32px;
    margin: 2rem 0;
  }
  .ads .image {
    width: 80%;
  }

  .ads .content .text p .text-green {
    text-decoration: underline;
  }
`

export default Wrapper
