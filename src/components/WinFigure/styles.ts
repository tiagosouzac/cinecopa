import styled from "styled-components";
import ReactModal from "react-modal";
import ReactPlayer from "react-player";

const Modal = styled(ReactModal)`
  width: 100%;
  max-width: 830px;
  max-height: 510px;
  height: 100%;
  background: #222222;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;

  .close-modal {
    background-color: transparent;
    border: none;
    outline: none;
    position: absolute;
    right: 16px;
    top: 16px;
    cursor: pointer;
  }
`;

const ContainerWinPackage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 130px;
  height: 130px;
  background: #d9965b;
  border-radius: 50%;

  button {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    text-align: center;
    text-decoration-line: underline;
    text-transform: uppercase;
    color: #8c0712;
    background-color: transparent;
    border: none;
    outline: none;
    margin-top: 8px;
    cursor: pointer;
  }

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #222222;
    max-width: 95px;
  }
`;

export { ContainerWinPackage, Modal };
