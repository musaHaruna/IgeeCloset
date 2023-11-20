import styled from 'styled-components'

const Wrapper = styled.main`
  .bg-wrapper {
    position: relative;
    overflow: hidden;
    border-radius: 25px;
    height: 500px;
    background: rgba(0, 0, 0, 0.5);
  }

  .content-container {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 40%;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  .content p {
    color: var(--clr-white);
    font-size: 18px;
  }

  .content h2 {
    color: #56ac48;
    font-size: 42px;
    font-weight: 700;
    text-shadow: 0 0 7px #fff, 0 0 7px #fff;
  }

  .content h2,
  p {
    text-align: center;
  }

  .closets-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 1.5rem 0;
  }

  .closet-card {
    width: 380px;
    height: 250px;
    overflow: hidden;
    position: relative;
    border-radius: 16px;
  }
  h5 {
    margin: 0;
    line-height: 1.3;
  }
  p {
    margin: 0;
    line-height: 1.3;
  }
  .closet-card-info {
    position: absolute;
    width: 100%;
    top: 65%;
    display: flex;
    background: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0.5rem;
  }

  .arrow {
    background-color: var(--clr-green);
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--clr-white);
    border-radius: 50%;
    cursor: pointer;
  }

  .text-white {
    font-size: 16px;
    color: var(--clr-white);
  }

  .social {
    margin: 0;
    font-size: 14px;
  }

  .items {
    font-size: 12px;
  }

  .btn-green {
    border: none;
    display: block;
    background-color: var(--clr-green);
    color: var(--clr-white);
    font-size: 18px;
    padding: 0.5rem 2rem;
    margin: 2rem 0;
    cursor: pointer;
    border-radius: 5px;
  }

  .popular {
    text-align: left;
    margin: 1.5rem 0;
    font-weight: 500;
  }
`

export default Wrapper
