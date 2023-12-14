import styled from 'styled-components'

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 1.5rem 0;

  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  ul a {
    font-weight: 600;
  }

  .cta-green-outline-flat {
    font-size: 16px;
    background-color: var(--clr-white-neutral);
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  .nav-search {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 25%;
    padding: 0.5rem;
    border: 1px solid #a3a3a3;
    border-radius: 25px;
  }

  .nav-search .icon {
    font-size: 20px;
  }

  .nav-search input {
    width: 100%;
    border: none;
  }

  .nav-search input:focus {
    outline: none;
  }

  .username {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: 1px solid #56ac48;
    color: #56ac48;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .options {
    padding: 0.7rem;
    background: #fff;
    position: absolute;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
    left: 86%;
    top: 4.5rem;
  }

  .options p {
    margin: 0.5rem;
    font-weight: 500;
  }

  .options a {
    color: #1e1e1e;
  }
`

export default Wrapper
