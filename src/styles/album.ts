import { styled } from "."

export const Container = styled("div", {})

export const AlbumContainer = styled("div", {
  maxWidth: 1220,
  height: 722,
  margin: "0 auto",
  backgroundColor: "$gray100",
  display: "flex",
  justifyContent: "space-between",
})

export const Page = styled("div", {
  width: "max-content",
  padding: "40px 80px",
})

export const Country = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  h1: {
    width: 428,
    height: 48,
    marginTop: 13,
    borderRadius: 50,
    backgroundColor: "$white",
    fontSize: 20,
    lineHeight: "48px",
    fontFamily: "$roboto",
    fontWeight: 500,
    textTransform: "uppercase",
    textAlign: "center",
  },
})

export const Cards = styled("div", {
  marginTop: 50,
  display: "flex",
  justifyContent: "center",
  columnGap: 50,
  rowGap: 21,
  flexWrap: "wrap",

  "&:first-child": {
    marginTop: 117,
  },
})

export const EmptyCard = styled("div", {
  width: 175,
  height: 248,
  backgroundColor: "$white",
  border: "3px solid $gray200",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  span: {
    color: "$gray200",
    fontFamily: "$roboto",
    fontSize: 32,
    lineHeight: "37px",
    fontWeight: 700,
  },
})

export const Card = styled("div", {
  width: 175,
  height: 248,
  padding: 10,
  paddingBottom: 17,
  background: "$gray300",

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    div: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",

      img: {
        backgroundColor: "$white",
      },

      span: {
        color: "$white",
        fontFamily: "$roboto",
        fontSize: 10,
      },
    },
  },
})
