import { styled } from "../../styles";

export const InputController = styled("div", {
  width: "100%",
  height: "auto",
  minHeight: "64px",
  display: "flex",
  flexDirection: "column",
  gap: "7px",
});

export const Label = styled("label", {
  fontFamily: "$roboto",
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "16px",
  color: "$gray500",
});

export const ErrorMessage = styled("label", {
  fontFamily: "$roboto",
  fontWeight: "500",
  fontSize: "12px",
  lineHeight: "14px",
  color: "$error",
});

export const Input = styled("input", {
  outline: "none",
  background: "inherit",
  width: "100%",
  fontFamily: "$roboto",
  paddingLeft: "20px",
  fontWeight: "400",
  fontSize: "14px",
  border: "none",
  color: "inherit",

  "&::placeholder": {
    color: "inherit",
  },
});

export const InputContainer = styled("div", {
  display: "flex",
  width: "100%",
  height: "42px",
  border: "1px solid #D3D3D3",
  color: "#909090",
  borderRadius: "4px",
  background: "#FFFFFF",
  overflow: "hidden",
  position: "relative",

  img: {
    position: "absolute",
    top: "50%",
    right: "16px",
    transform: "translateY(-50%)",
  },

  variants: {
    color: {
      sucess: {
        background: `$success100`,
        border: "1px solid $success500",
        color: "$success500",
      },

      error: {
        border: "1px solid $error",
      },
    },
  },
});
