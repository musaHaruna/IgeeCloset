import styled from 'styled-components'

const Wrapper = styled.main`
  max-width: 1440px;
  width: 95%;
  margin: 2rem auto;

  .product-container {
    height: 730px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    border-bottom: 1px solid #d5d6de;
  }

  .links {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 2rem 0;
  }

  .item-showcase {
    height: 100%;
  }

  .links p {
    display: flex;
    align-items: center;
    color: #717591;
  }

  .category,
  .size {
    font-weight: 400;
    color: #292d32;
    margin: 1rem 0;
  }
  .heading-1 {
    font-size: 28px;
    font-weight: 500;
    color: #131418;
    padding: 0.5rem 0;
    border-bottom: 1px solid #d5d6de;
  }

  .like-count {
    display: flex;
    align-items: center;

    gap: 0.5rem;
    margin: 1rem 0;
    color: #17191c;
  }

  .details {
    margin: 1rem 0;
  }

  .details h5 {
    font-size: 20px;
    color: #252730;
  }

  .details p {
    color: #717591;
  }
  .price {
    font-size: 26px;
    color: #292d32;
    font-weight: 500;
    padding: 0.5rem 0;
    border-bottom: 1px solid #d5d6de;
  }

  button {
    display: block;
    width: 100%;
    border: none;
    padding: 1rem 0;
    font-size: 18px;
    font-weight: 500;
    border-radius: 8px;
  }

  .solid {
    color: #fff;
    background-color: #56ac48;
  }
  .outline {
    border-radius: 8px;
    border: 1px solid #56ac48;
    color: #56ac48;
    background-color: #fff;
  }
  .btns {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin: 1.5rem 0;
  }
  .from {
    font-size: 14px;
    color: #292d32;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .peoples-likes {
    display: flex;
  }

  .peoples-likes .profile:not(:first-child) {
    margin-left: -1rem;
  }
  .from .profile {
    width: 30px;
    height: 30px;
  }
  .icons {
    display: flex;
    justify-content: space-around;
    margin: 1rem auto;
  }

  .grey {
    color: #56ac48;
    border: 1px solid #56ac48;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .profile {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1.5px solid #56ac48;
  }
  .product-img {
    display: grid;
    grid-template-columns: 0.3fr 1fr;
    gap: 1rem;
  }

  .product-img div div {
    margin-bottom: 1rem;
    height: 150px;
    overflow: hidden;
    border-radius: 15px;
  }

  .showcase-img {
    height: 650px;
  }
  .related-products {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 1rem;
  }

  .related-products div {
    overflow: hidden;
  }

  .customers-comment {
    margin: 1rem 0;
    width: 50%;
  }

  .profile-detail {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .comment {
    font-size: 14px;
    color: #4b4e61;
  }

  .reply {
    display: flex;
    gap: 1rem;
    margin: 1rem 0;
  }

  .heading-2 {
    color: #131418;
    font-size: 24px;
    font-weight: 500;

    margin: 1rem 0;
    margin-top: 3rem;
    border-bottom: 1px solid #d5d6de;
    padding: 0.7rem 0;
  }
`

export default Wrapper
