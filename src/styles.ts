import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 16px;
`;

interface WrapperProps {
    bannerWidth?: number;
    bannerHeight?: number;
  }

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  /* border-radius: 16px; */
  /* background: #fa641e; */
  background: linear-gradient(90deg, #ff881f 0%, #fa641e 100%);
  color: #fff;
  justify-content: space-between;

  width: ${(props) => props.bannerWidth}px;
  height: ${(props) => props.bannerHeight}px;

  margin-top: 16px;
  padding: 16px;
  margin-left: 16px;
  margin: 0px;
  .main-text {
    font-weight: 700;
    font-size: 44px;
    line-height: 1.1;
    margin-top: 16px;
    margin-bottom: 32px;
  }

  .logo {
    height: 24px;
    margin-top: 32px;
  }

  .url {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 32px;
  }

  .image {
    height: 150px;
    width: 136px;
    margin-top: 32px;
    margin-left: -8px;
    
  }

  .upload-image {
    width: 60px;
    height: 60px;
    position: relative;
    bottom: 104px;
    right: 99px;
    transform: rotate(-5deg);
    margin-right: -99px;
    margin-bottom: -52px;
    border-radius: 30px;
  }

  .download {
    font-size: 14px;
  }
`;

export const Editor = styled.div`
  margin-left: 16px;

  .title {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 8px;
  }

  form {
    margin-left: 8px;

    .form-row {
      display: flex;
      flex-direction: column;
      margin-bottom: 8px;
    }

    .flex-row {
      display: flex;
      label {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 8px;
        margin-right: 8px;
      }
    }

    label {
      font-weight: 400;
      font-size: 11px;
      /* margin-bottom: 8px; */
    }

    input {
      background-color: #eee;
      outline: none;
      border: none;
      padding: 8px;
      border-radius: 8px;
      padding-left: 16px;
      max-width: 300px;
    }

    button {
      padding: 8px;
      border-radius: 8px;
      outline: none;
      border: none;
      /* display: none; */
      margin-left: auto;
      margin-right: auto;
      display: flex;
      margin-top: 32px;
      background: #00ab50;
      color: #fff;
      font-family: "Poppins", sans-serif;
      font-weight: 600;
    }

    .number-input {
      max-width: 100px;
    }

    input[type="range"] {
      height: 25px;
      -webkit-appearance: none;
      margin: 10px 0;
      width: 100%;
    }
    input[type="range"]:focus {
      outline: none;
    }
    input[type="range"]::-webkit-slider-runnable-track {
      width: 100%;
      height: 3px;
      cursor: pointer;
      animate: 0.2s;
      box-shadow: 0px 0px 0px #000000;
      background: #fa641e;
      border-radius: 1px;
      border: 0px solid #000000;
    }
    input[type="range"]::-webkit-slider-thumb {
      box-shadow: 0px 0px 0px #000000;
      border: 1px solid #ff881f;
      height: 18px;
      width: 18px;
      border-radius: 25px;
      background: #ff881f;
      cursor: pointer;
      -webkit-appearance: none;
      margin-top: -7px;
    }
  }
`;
