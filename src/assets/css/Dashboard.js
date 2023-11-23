import styled from 'styled-components'

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr 3fr;

  h2 {
    font-size: 22px;
    font-weight: 500;
    color: #121212;
  }

  .sidebar-links {
    position: fixed;
    background-color: #fff;
    width: 250px;
    z-index: 2;
  }
  .nav-link {
    margin: 1rem 0;
  }

  a {
    font-size: 18px;
  }

  .nav-link .icon {
    font-size: 20px;
  }
  .nav-link .inactive {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #121212;
  }

  .nav-link .active {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #56ac48;
  }

  .profile-container {
    display: flex;
    align-items: center;
    margin: 3rem 0;
    gap: 0.5rem;
    border: 1px solid #a3a3a3;
    padding: 0.5rem;
    border-radius: 50px;
    width: 60%;
  }

  .profile-img {
    width: 40px;
    border-radius: 50%;
  }

  .profile-container .username {
    line-height: 1.2;
    font-size: 18px;
  }
  p {
    line-height: 1;
  }

  .status {
    font-size: 12px;
  }

  .dashboard-page {
    margin-bottom: 2rem;
  }
`

export default Wrapper
