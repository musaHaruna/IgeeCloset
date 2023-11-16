import styled from 'styled-components'

const Wrapper = styled.article`
  .hero-content {
    width: 60%;
    margin: 2rem auto;
  }

  .hero-content h1,
  p {
    text-align: center;
  }

  .hero-content h1 {
    margin-bottom: 2rem;
  }

  .cta-btns {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin: 1.5rem 0;
  }

  .carousel {
    width: 90%;
    margin: 3rem auto;
  }

  .how-it-works {
    background-color: #f2f7f8;
    padding: 2rem 0;
  }

  .how-it-works h2 {
    font-size: var(--font-heading);
    text-align: center;
  }

  .how-it-works-card {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    margin: 2rem auto;
  }

  .how-it-works-card p {
    text-align: left;
  }

  .steps {
    text-align: left;
    display: flex;
    align-items: center;
    gap: 2rem;
    margin: 2rem auto;
  }

  .line {
    width: 180px;
    border: 0.2px solid #1e1e1e;
  }

  .step-card {
    padding: 2rem;
    background-color: var(--clr-white);
    box-shadow: 0px 4px 20px 20px #f7f7f7;
    border-radius: 16px;
  }
  .step-heading {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 1rem 0;
  }

  .step-heading h2 {
    font-size: 32px;
    width: 50px;
    height: 50px;
    padding: 1rem;
    background-color: var(--clr-green-2);
    color: var(--clr-white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .step-heading h4 {
    font-size: 22px;
    line-height: 1.3;
  }

  .step-card p {
    color: #737d8c;
    font-size: 16px;
    margin: 1rem 0;
  }

  .ads {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 4rem auto;
  }

  .line-broad {
    height: 18px;
    width: 400px;
    background-color: var(--clr-green-2);
    border-radius: 25px;
    margin-left: 6rem;
  }
  .line-thin {
    height: 10px;
    width: 200px;
    background-color: var(--clr-green-2);
    border-radius: 25px;
    margin: 0.75rem 0;
  }

  .line-thin.left {
    margin-left: 6rem;
  }

  .line-broad.right {
    margin-left: 2rem;
  }

  .ads .content {
    margin: 4rem 0;
    align-self: center;
  }

  .ads .content .text {
    margin: 2rem 0;
  }
  .ads .content .text p {
    font-size: 28px;
    text-align: left;
    color: #212121;
  }

  .ads .content .text h4 {
    font-size: 32px;
    margin: 2rem 0;
  }
  .ads .image {
    width: 80%;
  }

  .ads .content .text p .text-green {
    text-decoration: underline;
  }

  .explore-bg {
    background-color: rgba(245, 250, 244, 0.55);
  }

  .explore {
    margin: 4rem auto;
  }
  .explore h2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 8rem;
  }

  .arrow {
    width: 80px;
    height: 80px;
    color: var(--clr-white);
    background-color: var(--clr-green-2);
    border-radius: 50%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .explore .text-green {
    font-size: 20px;
    text-align: left;
    font-weight: 500;
    margin: 1rem 0;
  }

  .closet-cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    width: 95%;
    margin: 1rem auto;
    gap: 1.5rem;
  }

  .closet-card {
    position: relative;
    overflow: hidden;
    border-radius: 15px;
    justify-self: center;
    cursor: pointer;
  }

  .profile-img {
    width: 60px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid var(--clr-white);
  }

  .closet-card-info {
    position: absolute;
    border-radius: 8px;
    background: rgba(0, 0, 0, 0.7);
    top: 28.5rem;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
  }

  .text-white {
    color: #f5faf4;
    font-weight: 500;
    font-size: 18px;
    text-align: left;
  }

  .closet-card-info .info {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .closet-card-info .info p {
    margin: 0.2rem 0;
    line-height: 1.3;
  }

  .social.text-green {
    font-size: 14px;
  }

  .items.text-white {
    font-size: 15px;
  }

  .follow-btn {
    display: block;
    border-radius: 8px;
    border: 1px solid #f5faf4;
    background: #f5faf4;
    padding: 0.5rem 1rem;
    font-size: 14px;
    cursor: pointer;
  }

  .our-story {
    position: relative;
    overflow: hidden;
    border-radius: 25px;
    width: 90%;
    margin: 1rem auto;
  }

  .our-story-text-container {
    position: absolute;
    top: 30rem;
    height: 200px;
    border-radius: 32px;
    background: rgba(23, 25, 28, 0.7);
  }

  .our-story-text-container p {
    margin-top: 2rem;
    color: var(--clr-white);
    text-align: center;
    padding: 0 2rem;
  }

  .btn-our-story {
    background-color: var(--clr-green-2);
    color: var(--clr-white);
    padding: 2rem;
    border-radius: 25px;
    width: 70%;
    height: 35px;
    margin: 1rem auto;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
  }

  .btn-our-story .white {
    color: var(--clr-white);
  }
`

export default Wrapper
