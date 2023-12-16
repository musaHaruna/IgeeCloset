import styled from 'styled-components'

const Wrapper = styled.article`
  .upload-btn-wrapper-img {
    position: relative;
    overflow: hidden;
    display: inline-block;
    cursor: point;
    padding: 3rem 7.5rem;
    border-radius: 6px;
    border: 0.4px dashed #000;
    background-color: #f7f7f7;
  }

  .btn {
    color: #56ac48;
    background-color: transparent;
    font-size: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
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

  .product-gallery {
    display: flex;
    justify-content: space-between;
  }

  .container {
    margin: 3rem auto;
  }
  form {
    margin: 3rem 0;
  }
  form div {
    margin: 2.5rem 0;
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

  .text-red {
    color: #f30505;
  }

  label {
    font-weight: 500;
  }

  .custom-select-box-category {
    position: relative;
  }
  .selected-category {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #56ac48;
    margin: 0;
    padding-bottom: 0.2rem;
  }

  .selected-category span {
    color: #56ac48;
    cursor: pointer;
  }

  .options-list-category {
    cursor: pointer;
    border-radius: 5px;
    list-style: none;
    padding: 0;
    margin: 0.5rem 0;
    position: absolute;
    top: 120%;
    left: 0;
    width: 50%;
    background: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 1rem;

    z-index: 4;
  }
  .options-list-category-inner {
    cursor: pointer;
    position: absolute;
    width: 40%;
    left: 51%;
    top: 120%;
    padding: 1rem;
    z-index: 10;
    background-color: #ffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .options-list-category-inner li {
    border-bottom: 1px solid #d9d9d9;
    margin: 1rem 0;
  }

  .options-list-category li {
    border-bottom: 1px solid #d9d9d9;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;
  }

  .custom-select-box {
    position: relative;
    display: inline-block;
    margin: 0;
  }

  .selected-size {
    border-bottom: 1px solid #56ac48;

    margin-top: 0.5rem;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .selected-size span {
    color: #56ac48;
    cursor: pointer;
  }
  .options-list {
    border-radius: 5px;
    list-style: none;
    padding: 0;
    margin: 0.5rem 0;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .options-list li {
    padding: 10px;
    cursor: pointer;
    transition: 0.3s;
  }

  .options-list li:hover {
    background: #f0f0f0;
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

  .item-label {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .text-fade {
    color: #a3a3a3;
  }
  .text-sm {
    font-size: 10px;
  }

  .brands {
    display: flex;
    align-items: center;
    gap: 3rem;
  }

  .brands div {
    width: 100%;
  }

  .tag-upload {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .upload-btn-wrapper-img.tag {
    background-color: #fff;
    padding: 0 4rem;
  }

  .submit-btn {
    width: 30%;
    margin-left: auto;
  }

  .submit-btn div {
    margin: 0.5rem auto;
  }

  .review {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  .review button {
    color: #fff;
    background-color: #56ac48;
    margin-bottom: 0.5rem;
    padding: 0.87rem 0;
    width: 90%;
  }

  .submit-btn button {
    margin: 0;
    padding: 0.87rem 0;
    width: 90%;
  }

  .save-as {
    border-radius: 8px;
    border: 1px solid #56ac48;
    background-color: #fff;
    color: #56ac48;
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 55px;
    height: 25px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f2f4f7;
    border: 1px solid #56ac48;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 22px;
    width: 22px;
    left: 4px;
    bottom: 1.2px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #56ac48;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  .toggler-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export default Wrapper
