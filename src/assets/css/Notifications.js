import styled from 'styled-components'

const Wrapper = styled.main`
  position: relative;
  .notifications {
    display: flex;
    gap: 1rem;
    margin: 1.5rem 0;
    align-items: center;
    padding: 0.85rem 0;
    width: 80%;
    gap: 2rem;
    overflow: hidden;
    border-radius: 15px;
  }

  .notification-content {
    display: flex;
    gap: 1rem;
    margin: 1.5rem 0;
    align-items: center;
    gap: 1.5rem;
    overflow: hidden;
    border-radius: 8px;
    border-bottom: 2px #56ac48 solid;
    padding: 0.5rem;
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

  .delete-btn {
    background-color: #56ac48;
    border: none;
    color: #fff;
    padding: 0.75rem;
    width: 140px;
    border-radius: 10px;
    font-weight: 500;
    cursor: pointer;
    margin-left: auto;
  }

  h3 {
    color: #121212;
    font-weight: 600;
  }
  p {
    margin: 0.5rem 0;
  }

  .view-btn {
    background-color: #fff;
    border: none;
    color: #56ac48;
    text-decoration: underline;
    font-weight: 500;
    cursor: pointer;
  }

  p {
    font-size: 14px;
  }

  input[type='checkbox'] {
    width: 1rem;
    height: 1rem;
    accent-color: green;
  }
`

export default Wrapper
