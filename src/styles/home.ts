import styled from "styled-components";

export const ContainerHome = styled.section`
  height: 100%;
  width: 100%;
  isolation: isolate;
  display: flex;
  justify-content: center;
  align-items: center;

  .home-right {
    position: relative;
    .winPackage {
      position: absolute;
      top: 0px;
      right: 90%;
    }
  }

  .backgrouund {
    position: absolute;
    top: 0px;
    left: 0px;
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;
