import styled from 'styled-components'

const Wrapper = styled.nav`
  .footer-links {
    display: flex;
    align-items: start;
    justify-content: space-between;
    padding: 3rem 0;
  }
  .footer-links ul h3 {
    color: var(--clr-black);
    margin-bottom: 1rem;
  }

  .footer-links ul li {
    margin: 0.75rem 0;
  }

  .footer-links ul li a {
    color: var(--clr-grey);
  }

  .footer-icon {
    display: block;
    font-size: 20px;
  }

  .mail,
  .phone {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    color: var(--clr-grey);
  }

  .footer-links ul li.mail-us {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    border: 1px solid black;
    border-radius: 25px;
    margin-bottom: 2rem;
  }

  .mail-us input {
    width: 70%;
    border: none;
  }

  .mail-us input:focus {
    outline: none;
  }

  .social-handles {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 4rem;
    margin-bottom: 1rem;
  }
  .social-handles .footer-icon {
    color: var(--clr-green-2);
    font-size: 30px;
    cursor: pointer;
  }

  .all-rights {
    padding-top: 1rem;
    padding-bottom: 2.5rem;
    border-top: 1px solid #9e9e9e;
  }

  .all-rights p {
    color: var(--clr-green-2);
    font-size: 12px;
  }
`
export default Wrapper
