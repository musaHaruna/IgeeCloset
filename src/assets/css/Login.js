import styled from 'styled-components'

const Wrapper = styled.article`
  h3 {
    font-size: 22px;
    text-align: center;
  }

  label {
    font-size: 14px;
    color: #7a828a;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    border-radius: 6px;
    background-color: #edf2f7;
    border: none;
    color: #7a828a;
    margin-top: 0.3rem;
  }

  input:focus {
    outline: none;
  }

  form div {
    margin: 1rem 0;
  }

  form p {
    font-size: 12px;
    color: #7a828a;
  }

  .btn {
    display: block;
    padding: 0.5rem 0;
    width: 100%;
    border: none;
    border-radius: 8px;
  }

  .center {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }

  .icon {
    display: block;
  }

  .close {
    font-size: 22px;
    display: block;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
  }

  .btn.signin {
    color: #fff;
    background-color: #56ac48;
    cursor: pointer;
  }

  .btn.google {
    background-color: #fff;
    color: #344054;
    border: 1px solid #d0d5dd;
    margin: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
  }
  .or {
    margin: 1.5rem 0;
    text-align: center;
  }

  .btn.fb {
    background-color: #1877f2;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
  }

  .social-icon {
    display: block;
    font-size: 22px;
  }

  .signup {
    padding: 1rem;
  }

  .login-already {
    text-align: center;
    font-size: 14px;
  }

  .login-already span {
    cursor: pointer;
  }

  .forget-pword {
    font-size: 12px;
    text-align: center;
    margin-top: 0.5rem;
    cursor: pointer;
  }

  .or.login-or {
    margin: 0.2rem 0;
  }

  .forget-pword.text-green {
    margin-top: 0.5rem;
  }

  .forget-img {
    width: 120px;
    margin-top: 2rem;
    margin: 0 auto;
  }

  .forget-head {
    font-size: 18px;
    margin: 1rem 0;
  }

  .forget-p {
    font-size: 14px;
    color: #6e6e6e;
    text-align: center;
  }

  .e-mail {
    color: #425466;
  }

  .btn.signin.forget {
    margin: 2rem auto;
    cursor: pointer;
  }

  .icon.back {
    margin-right: auto;
  }

  .otp-form {
    margin: 8rem 0;
  }
  .otp-form p {
    text-align: center;
    margin: 0.5rem 0;
  }

  .otp-form .left {
    text-align: left;
  }

  .otp-form .resend {
    margin: 4rem 0;
    cursor: pointer;
  }

  .new-pword-center {
    margin-top: 4rem;
    margin-bottom: 2rem;
  }

  .text-align {
    text-align: left;
    font-size: 20px;
    color: #272727;
  }

  .success-heading {
    font-size: 20px;
    font-weight: 500;
    color: #272727;
  }

  .text-p {
    text-align: center;
    margin: 1rem 0;
  }
  .btn.signin.login {
    margin-top: 2rem;
  }
  margin: 1rem 0;

  .otp-box {
    display: flex;
    gap: 0.5rem;
    width: 40%;
    margin: 1rem auto;
  }

  .otp-box input {
    padding: 0.5rem;
    text-align: center;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .resend-otp {
    display: block;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    background-color: transparent;
    border: none;
    margin: 1rem auto;
    color: #6a6a6a;
  }
`

export default Wrapper
