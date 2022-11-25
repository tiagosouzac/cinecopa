import { styled } from "../../styles"

export const Container = styled("header", {
  maxWidth: 1220,
  padding: "41px 0",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
})

export const Avatar = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: 16,

  img: {
    borderRadius: 64,
  },

  div: {
    display: "flex",
    flexDirection: "column",

    span: {
      color: "$white",
      fontSize: 14,
      lineHeight: "17px",
      fontFamily: "$roboto",

      "&:first-child": {
        fontWeight: 700,
      },
    },
  },
})
