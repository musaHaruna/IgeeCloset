import styled from 'styled-components'

const Wrapper = styled.main`
  width: 70%;
  img {
    display: block;
    object-fit: cover;
    width: 100%;
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
`

export default Wrapper
