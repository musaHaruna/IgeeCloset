import styled from 'styled-components'

const Wrapper = styled.main`
  max-width: 1440px;
  width: 95%;
  margin: 2rem auto;

  .product-container {
    height: 700px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    border-bottom: 1px solid #d5d6de;
  }

  .reply-messages {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0.5rem 0;
  }

  .replies {
    padding-left: 1rem;
  }

  .reply-messages input {
    height: 70px;
    width: 40%;
    border: 1px solid #56ac48;
    padding: 0.2rem;
  }

  .reply-messages button {
    font-size: 14px;
    padding: 0.5rem;
    width: 20%;
    color: #fff;
    background-color: #56ac48;
  }

  .reply-comment {
    cursor: pointer;
  }
  .comment-box {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  .comment-box input {
    width: 250px;
    height: 60px;
  }

  .links {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 2rem 0;
  }

  .item-showcase {
    height: 100%;
  }

  .links p {
    display: flex;
    align-items: center;
    color: #717591;
  }

  .category,
  .size {
    font-weight: 400;
    color: #292d32;
    margin: 1rem 0;
  }
  .heading-1 {
    font-size: 28px;
    font-weight: 500;
    color: #131418;
    padding: 0.5rem 0;
    border-bottom: 1px solid #d5d6de;
  }

  .like-count {
    display: flex;
    align-items: center;

    gap: 0.5rem;
    margin: 1rem 0;
    color: #17191c;
  }

  .details {
    margin: 1rem 0;
  }

  .details h5 {
    font-size: 20px;
    color: #252730;
  }

  .details p {
    color: #717591;
  }
  .price {
    font-size: 26px;
    color: #292d32;
    font-weight: 500;
    padding: 0.5rem 0;
    border-bottom: 1px solid #d5d6de;
  }

  button {
    display: block;
    width: 100%;
    border: none;
    padding: 1rem 0;
    font-size: 18px;
    font-weight: 500;
    border-radius: 8px;
  }

  .solid {
    color: #fff;
    background-color: #56ac48;
    cursor: pointer;
  }
  .outline {
    border-radius: 8px;
    border: 1px solid #56ac48;
    color: #56ac48;
    background-color: #fff;
    cursor: pointer;
  }
  .btns {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin: 1.5rem 0;
  }
  .from {
    font-size: 14px;
    color: #292d32;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .peoples-likes {
    display: flex;
  }

  .peoples-likes .profile:not(:first-child) {
    margin-left: -1rem;
  }
  .from .profile {
    width: 30px;
    height: 30px;
  }
  .icons {
    display: flex;
    justify-content: space-around;
    margin: 1rem auto;
  }

  .grey {
    color: #56ac48;
    border: 1px solid #56ac48;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .profile {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1.5px solid #56ac48;
    margin: 1rem 0;
  }
  .product-img {
    display: grid;
    grid-template-columns: 0.3fr 1fr;
    gap: 1rem;
    height: 40px;
  }

  .product-img div div {
    margin-bottom: 1rem;
    height: 150px;
    overflow: hidden;
    border-radius: 15px;
  }

  .comment-box input {
    border: 1px solid #56ac48;
    padding: 0.2rem;
  }

  .green-btn {
    color: #56ac48;
  }
  .product-img .item-showcase .showcase-img {
    height: 650px;
  }

  .vertical-img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .showcase-img img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .related-products {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 1rem;
  }

  .related-products div {
    overflow: hidden;
  }

  .customers-comment {
    margin: 1rem 0;
    width: 50%;
  }

  .profile-detail {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .comment {
    font-size: 14px;
    color: #4b4e61;
  }

  .reply {
    display: flex;
    gap: 1rem;
    margin: 1rem 0;
  }

  .heading-2 {
    color: #131418;
    font-size: 24px;
    font-weight: 500;

    margin: 1rem 0;
    margin-top: 3rem;
    border-bottom: 1px solid #d5d6de;
    padding: 0.7rem 0;
  }

  .img-flex {
    display: flex;
    gap: 1rem;
    margin: 1rem 0;
    padding: 0.5rem 0;
    border-bottom: 1px solid #131418;
  }

  .modal-img {
    width: 100px;
    height: 80px;
    overflow: hidden;
    border-radius: 5px;
  }

  .modal-img img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  .heading-top {
    text-align: center;
    padding: 0.58rem 0;
    border-bottom: 1px solid #131418;
  }

  .select-offer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .select-offer div {
    padding: 0.5rem;
    border: 1px solid #d3d3d3;
    border-radius: 30px;
    width: 120px;
    text-align: center;
  }

  .select-offer div p {
    color: #d3d3d3;
  }

  .select-head {
    margin-top: 0.2rem;
    margin-bottom: 0.5rem;
  }

  .or {
    text-align: center;
    margin: 1rem;
  }

  .own-offer {
    color: #d3d3d3;
    margin: 1rem 0;
  }

  .input-wrapper {
    display: flex;
    border: 1px solid #56ac48;
    border-radius: 5px;
    gap: 0.4rem;
  }

  .input-wrapper input {
    width: 100%;
    display: block;
    border: none;
    padding: 0.5rem;
  }

  .input-wrapper input:focus {
    outline: none;
  }

  .input-wrapper span {
    background-color: #56ac4833;
    color: #d3d3d3;
    padding: 0.5rem 0.85rem;
  }

  .cta-btns {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 1rem;
  }

  .cta-btns button {
    width: 100px;
    font-size: 14px;
  }

  .buy-img {
    width: 120px;
    height: 120px;
    border-radius: 5px;
    overflow: hidden;
  }

  .buy-img img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .tab-btns {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .tab-btns button {
    display: block;
    width: 40%;
    border-bottom: 1px solid #131418;
    padding: 0.2rem 0;
    font-size: 14px;
    font-weight: 500;
    background-color: transparent;
    border-radius: 0;
    cursor: pointer;
  }

  .heading-top.summary {
    border: none;
  }

  .tab-active {
    color: #56ac48;
    border-bottom: 1px solid #56ac48;
    padding: 0.3rem 1rem;
  }

  .img-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem;
  }

  .text-align {
    text-align: center;
    margin: 0.5rem auto;
  }

  .checkout-summary {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .contact-address {
    font-size: 14px;
  }

  .checkout-summary div p {
    font-weight: 600;
  }

  .contact-address {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
  }

  p.text-align {
    margin: 0;
    font-size: 14px;
  }

  h3.text-align {
    font-size: 14px;
    margin: 0.2rem;
  }

  .contact-address-wrapper {
    padding: 0.5rem;
    border: 1px solid #d3d3d3;
    margin: 1rem 0;
    border-radius: 5px;
  }

  .close-icon {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 20px;
  }

  .line {
    width: 100%;
    height: 1px;
    background-color: #d3d3d3;
  }

  .solid {
    margin: 0.5rem 0;
    font-size: 14px;
    padding: 0.85rem;
    cursor: pointer;
  }

  .p-large {
    font-size: 14px;
    font-weight: 500;
  }

  .p-sm {
    font-size: 12px;
  }
`

export default Wrapper
