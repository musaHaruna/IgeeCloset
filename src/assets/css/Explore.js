import styled from 'styled-components'

const Wrapper = styled.main`
  .bg-wrapper {
    position: relative;
    overflow: hidden;
    border-radius: 25px;
    height: 400px;
    background-color: rgba(0, 0, 0, 1);
  }

  .bg-wrapper::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(
      0,
      0,
      0,
      0.5
    ); /* Adjust the alpha value for transparency */
    /* Ensure the overlay is below other content inside .bg-wrapper */
  }

  .content-container {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 40%;
    width: 100%;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }

  .content p {
    color: var(--clr-white);
    font-size: 18px;
  }

  .content h2 {
    color: var(--clr-white);
    font-size: 42px;
    font-weight: 700;
    line-height: 1.3;
  }

  .content h2,
  p {
    text-align: center;
  }

  .cta-btns {
    display: flex;
    gap: 1rem;
  }
  .closets-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 1.5rem 0;
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
    padding: 0.5rem 4rem;
    margin: 2rem 0;
    cursor: pointer;
    border-radius: 5px;
  }
  .btn-white {
    border: none;
    display: block;
    background-color: var(--clr-white);
    color: var(--clr-green);
    font-size: 18px;
    padding: 0.5rem 4rem;
    margin: 2rem 0;
    cursor: pointer;
    border-radius: 5px;
  }

  .popular {
    text-align: left;
    margin: 1.5rem 0;
    font-weight: 500;
  }

  .category-head h2 {
    font-size: 28px;
    font-weight: 500;
  }
  .category-head {
    margin: 2rem 0;
  }
  .category-head p {
    margin: 1rem 0;
    text-align: left;
  }

  .categories {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .categories div {
    position: relative;
    width: 50%;
    height: 200px;
    overflow: hidden;
    border-radius: 25px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }

  .categories div img {
    width: 120%;
    height: 115%;
    object-fit: cover;
  }

  .img {
    width: 100%;
    display: block;
    object-fit: cover;
  }

  .categories div h3 {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--clr-white);
    font-size: 32px;
  }

  .closet-cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
    margin: 1.5rem 0;
  }

  .product-desc p {
    text-align: left;
  }

  .links {
    display: block;
    color: #121212;
  }

  .paginate {
    display: flex;
    justify-content: space-between;
    margin: 4rem auto;
  }
`

export default Wrapper
