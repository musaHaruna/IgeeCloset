import styled from 'styled-components'

const Wrapper = styled.main`
  img {
    display: block;
    object-fit: cover;
    width: 100%;
  }

  .heading-top {
    display: flex;
    align-items: center;
    gap: 4rem;
    justify-content: end;
    font-size: 18px;
  }

  .heading-top span {
    cursor: pointer;
  }
  .user-banner {
    position: relative;
  }

  h4.text-green {
    font-weight: 500;
  }
  .upload-pic {
    position: absolute;
    font-size: 30px;
    color: #fff;
    left: 90%;
    top: 20%;
  }

  .banner {
    height: 150px;
    overflow: hidden;
    border-radius: 12px;
  }
  .user-profile-img {
    position: relative;
    margin-top: -4rem;
    margin-left: 0.5rem;
  }

  .user-profile-img img {
    width: 120px;
    height: 120px;
    overflow: hidden;
    border-radius: 50%;
    border: 4px solid #fff;
    z-index: 3;
  }
  .user-profile-img .upload-btn-wrapper-img .btn .camera {
    font-size: 30px;
    color: #fff;
    left: 6%;
    cursor: pointer;
  }

  form {
    margin: 1.5rem 0;
  }
  form div {
    margin: 1rem 0;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.5rem 0;
    border: none;
    border-bottom: 1px solid #56ac48;
  }

  input,
  textarea:focus {
    outline: none;
  }

  label {
    font-weight: 500;
    font-size: 15px;
  }

  button {
    display: block;
    border: none;
    width: 100%;
    margin: 1rem 0;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
  }

  .btn-green {
    background-color: #56ac48;
    color: #fff;
  }

  .btn-red {
    background-color: #fff;
    border: 1px solid #f30505;
    color: #f30505;
  }

  .upload-btn-wrapper {
    position: relative;
    overflow: hidden;
    display: inline-block;
    cursor: point;
  }

  .upload-btn-wrapper-img {
    position: absolute;
    top: 4rem;
    left: 2rem;
    overflow: hidden;
    display: inline-block;
    cursor: point;
  }

  .btn {
    color: gray;
    background-color: transparent;
    color: #292d32;
    border-radius: 8px;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
  }

  .upload-btn-wrapper-img input[type='file'] {
    font-size: 100px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    cursor: point;
  }

  .upload-flex {
    display: flex;
    align-items: center;
  }

  .edit {
    font-size: 28px;
    display: flex;
    justify-content: flex-end;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .save-changes {
    background-color: #56ac48;
    color: #fff;
  }

  .card-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  p {
    font-size: 14px;
    margin: 0.5rem 0;
  }

  .card {
    padding: 1rem;
    background-color: #fff;
    border: 1px solid #a3a3a3;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .close {
    width: 100px;
    color: #56ac48;
    border: 1px solid #56ac48;
    background-color: #fff;
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 1rem;
    margin-top: 2.5rem;
    color: #56ac48;
    border-top: #a3a3a3 1px solid;
  }

  .btns {
    display: flex;
    gap: 1rem;
    color: #56ac48;
    cursor: pointer;
  }

  h3 {
    font-weight: 600;
  }
`

export default Wrapper
