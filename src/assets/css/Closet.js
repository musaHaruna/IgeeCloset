import styled from 'styled-components'

const Wrapper = styled.main`
  padding-bottom: 1.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #a3a3a3;
  max-width: 14440px;
  width: 95%;
  margin: 1rem auto;

  .banner {
    position: relative;
    overflow: hidden;
    border-radius: 15px;
    height: 200px;
    margin: 1rem auto;
  }
  .container {
    width: 100%;
  }

  .closet-profile-img {
    width: 100px;
    height: 100px;
    overflow: hidden;
    border: 2px solid #fff;
    border-radius: 50%;
  }

  img {
    display: block;
    width: 100%;
    object-fit: cover;
  }
  .banner img {
    object-fit: cover;
    width: 100%;
    display: block;
  }

  .banner-content {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;

    background: rgba(23, 25, 28, 0.5);
    padding-top: 2rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
  }

  .heading {
    color: var(--clr-white);
    font-size: 28px;
    display: flex;
    align-items: center;
    gap: 7rem;
  }

  .heading button {
    display: block;
    border: none;
    padding: 0.5rem 1.5rem;
    border-radius: 5px;
  }

  .banner-content-flex {
    display: flex;
    gap: 1rem;
  }
  .banner-text p {
    font-size: 14px;
    color: #fff;
  }

  .banner-text .text-green {
    color: var(--clr-green);
  }

  .banner-text .inner-p {
    width: 60%;
    margin: 0.5rem 0;
  }

  .location {
    display: flex;
    align-items: center;
  }

  .icon {
    font-size: 18px;
    display: block;
  }

  .closet-info-container {
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
    width: 55%;
    margin-left: auto;
    margin-top: -2rem;
    justify-content: space-around;
    background-color: #fff;
    border-top-left-radius: 35px;
  }

  .closet-info h4 {
    font-size: 16px;
    text-align: center;
  }

  .closet-info p {
    color: var(--clr-green);
    font-size: 12px;
  }

  .follow {
    display: block;
    padding: 0.5rem 1rem;
    background-color: var(--clr-green);
    color: var(--clr-white);
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .search {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 32px;
    border: 0.3px solid #a3a3a3;
    background: #fafafb;
    padding: 0.3rem;
  }

  .search .icon {
    color: var(--clr-green);
  }

  .search input {
    display: block;
    border: none;
  }

  select {
    border: none;
    font-size: 15px;
    cursor: pointer;
    font-weight: 600;
    color: #17191c;
  }

  select:focus {
    outline: none;
  }

  .filters {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`

export default Wrapper
