import styled from 'styled-components'

const Wrapper = styled.main`
  position: relative;
  .purchase-card {
    display: flex;
    gap: 2rem;
    margin: 1.5rem 0;

    padding: 0.85rem 0;
    width: 90%;
    overflow: hidden;
    border-radius: 15px;
  }

  .dropdown {
    display: flex;
    align-items: center;

    gap: 0.5rem;
    border-bottom: 1px #424242 solid;
    padding: 0.3rem;
    width: 20%;
    overflow: hidden;
    border-radius: 8px;
    color: #121212;
  }

  .dropdown button {
    font-size: 18px;
    margin-top: 0.2rem;
  }

  .desc-text {
    margin-top: 2rem;
  }

  .offer-amount {
    margin: 0.6rem 0;
  }
  .percent-off {
    padding: 0.2rem;
    color: #56ac48;
    background-color: #56ac482b;
    border-radius: 4px;
  }

  .offer-accepted {
    color: #56ac48;
    font-weight: 500;
  }
  .price {
    font-weight: 600;
  }
  .dropdown-options {
    position: absolute;
    background-color: #fff;
    padding: 1rem 2rem;
    top: 1rem;
    left: 12rem;
    width: 30%;
    box-shadow: 0px 4px 4px 0px #00000040;
    border-radius: 10px;
  }

  .response {
    padding: 0.5rem 2rem;
    background-color: #56ac48;
    color: #fff;
    margin: 1rem 0;
    border-radius: 8px;
  }

  .dropdown-option {
    margin: 0.5rem 0;
  }

  img {
    display: block;
    width: 100%;
  }
  .purchase-img {
    width: 150px;
    height: 140px;
    overflow: hidden;
    border-radius: 15px;
  }

  h3 {
    color: #121212;
  }

  .purchase-content p {
    margin: 0.5rem 0;
  }

  .view-btn {
    align-self: center;
  }

  .order-status {
    background-color: #f6a507;
    width: 35%;

    color: #fff;
    padding: 0.5rem;
    border-radius: 8px;
  }

  .user-closet {
    color: #56ac48;
  }

  button {
    border: none;
    background-color: #fff;
  }

  .view-btn button {
    color: #56ac48;
    cursor: pointer;
  }

  p {
    font-size: 14px;
  }

  .tab-header {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .tab-button {
    color: #12121299;
    cursor: pointer;
  }

  .active {
    color: #56ac48;
    padding: 0.2rem 1rem;
    font-weight: 500;
    border-bottom: 1px solid #56ac48;
  }

  .purchase-img.modal {
    margin: 1rem auto;
  }

  .heading {
    text-align: center;
    font-size: 16px;
    padding: 0.5rem 0;
    border-bottom: #424242;
    border-bottom: 1px solid #d3d3d3;
  }

  .reject {
    background-color: #fedfdf75;
    color: #f30505;
  }

  .modal-content .response {
    width: 100%;
    margin: 1rem auto;
    padding: 2rem auto;
  }
  .modal-content p {
    margin: 0.8rem auto;
    text-align: center;
  }
`

export default Wrapper
