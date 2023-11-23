import styled from 'styled-components'

const Wrapper = styled.div`
  .closet-card {
    overflow: hidden;
    position: relative;
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
    border-radius: 8px;
  }

  .product-desc {
    font-weight: 700;
    font-size: 14px;
    margin: 0.5rem 0;
  }

  .product-desc p {
    margin: 0.3rem 0;
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

  .action-btn {
    position: absolute;
    font-size: 20px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    left: 85%;
    top: 2%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    cursor: pointer;
  }

  .btn {
    display: block;
    width: 100%;
    border: none;
    cursor: pointer;
  }

  .btn.btn-green {
    color: #56ac48;
    border-radius: 4px;
    border: 1px solid #56ac48;
    background-color: transparent;
    margin: 1rem 0;
    padding: 0.75rem;
  }
  .btn.review {
    color: #fff;
    border-radius: 4px;
    border: 1px solid #56ac48;
    background-color: #56ac48;
    margin: 1rem 0;
    padding: 0.75rem;
  }
  .btn.pending {
    color: #f6a507;
    border-radius: 4px;
    border: 1px solid #f6a507;
    background-color: transparent;
    margin: 1rem 0;
    padding: 0.75rem;
  }

  .text-red {
    color: red;
  }
`

export default Wrapper
