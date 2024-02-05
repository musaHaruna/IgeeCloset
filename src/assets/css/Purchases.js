import styled from 'styled-components'

const Wrapper = styled.main`
  position: relative;
  .purchase-card {
    display: flex;
    gap: 1rem;
    margin: 1.5rem 0;
    border-bottom: 2px #56ac48 solid;
    padding: 0.85rem 0;
    width: 70%;
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
`

export default Wrapper
