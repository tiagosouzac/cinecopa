import { styled } from "../../styles";

export const Button = styled("button", {
  width: "100%",
  height: "42px",
  outline: "none",
  border: "none",
  borderRadius: "4px",
  fontFamily: "$roboto",
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "16px",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "300ms",
  cursor: "pointer",

  variants: {
    color: {
      primary: {
        background: "#8C0712",

        "&:hover": {
          background: "#5D050C",
        },
      },
    },
  },
});
