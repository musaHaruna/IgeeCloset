import styled from 'styled-components'

const Wrapper = styled.div`
  .closet-card {
    overflow: hidden;
    border-radius: 8px;
  }
  .socials {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #d9d9d9;
    padding-top: 0.5rem;
  }

  .product-img {
    overflow: hidden;
  }

  .product-img img {
    height: 300px;
    width: 100%;
    object-fit: cover;
  }

  .related-img {
    height: 150px;
    width: 100%;
  }

  .product-desc .size {
    font-size: 12px;
    margin: 0;
  }
  .related-img img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .link-a {
    width: 100%;
  }

  .product-desc {
    font-weight: 700;
    font-size: 14px;
    margin: 0.5rem 0;
  }

  .product-desc h3 {
    font-weight: 500;
  }

  .size {
    font-size: 12px;
  }
  .socials div {
    display: flex;
    font-size: 18px;
    align-items: center;
    gap: 0.2rem;
    cursor: pointer;
  }

  .socials div span {
    font-size: 14px;
  }
`

export default Wrapper
