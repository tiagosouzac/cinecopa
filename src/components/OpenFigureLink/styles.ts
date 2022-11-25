import styled from "styled-components";

const OpenFigureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    max-width: 183px;
    width: 100%;
    height: auto;
    transform: rotate(7.58deg);
    margin-bottom: 32px;
  }

  .open-package {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #ffffff;
    position: relative;
    text-decoration: none;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      background: #ffb341;
      display: flex;
      border-radius: 50%;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 21px;
      display: flex;
      align-items: center;
      color: #ffffff;
      position: absolute;
      top: -20px;
      right: -20px;
    }
  }
`;

export { OpenFigureContainer };
