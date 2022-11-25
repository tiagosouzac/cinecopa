import Link from "next/link"
import { keyframes, styled } from "."
import teste from "../assets/images/packages-bg.png"

export const Container = styled("div", {
  minHeight: "100vh",
  paddingBottom: 80,
  background: `url(${teste.src}) no-repeat`,
  backgroundSize: "cover",
  backgroundPosition: "center",
})

export const BackLink = styled(Link, {
  width: "100%",
  maxWidth: 1220,
  margin: "0 auto",
  color: "$white",
  display: "flex",
  alignItems: "center",
  gap: 8,
})

export const EmptyMessage = styled("p", {
  marginTop: 40,
  color: "$white",
  fontSize: 20,
  textAlign: "center",
})

export const Cards = styled("div", {
  marginTop: 80,
})

export const OpenPackage = styled("div", {
  width: "max-content",
  margin: "0 auto",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  p: {
    marginTop: 40,
    color: "$white",
    fontFamily: "$roboto",
    fontSize: 32,
    fontWeight: 700,
  },
})

export const ReceivedCards = styled("div", {
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
  gap: 20,

  img: {
    width: 226,
    height: 320,
  },
})
