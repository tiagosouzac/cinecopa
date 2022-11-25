import { styled } from ".";
import { InputController } from "../components/Input/styles";

export const Form = styled("form", {
  width: "356px",
  height: "660px",
  background: "rgba(255, 255, 255, 0.75)",
  borderRadius: "10px",
  padding: "32px",
  boxSizing: "border-box",

  [`${InputController} `]: {
    marginBottom: "30px",
  },
});

export const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "58px",
  isolation: "isolate",
  height: "100%",
  "& >  img.background": {
    position: "absolute",
    top: "0px",
    left: "0px",
    objectFit: "cover",
    width: "100%",
    height: "100%",
    zIndex: "-1",
  },
});

export const Title = styled("h1", {
  fontFamily: "$roboto",
  fontWeight: "500",
  fontSize: "24px",
  lineHeight: "28px",
  marginBottom: "8px",
  color: "$gray500",
});
export const Info = styled("p", {
  fontFamily: "$roboto",
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "130%",
  marginBottom: "24px",
  color: "$gray500",
});
