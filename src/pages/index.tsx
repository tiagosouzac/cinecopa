import { styled } from "../styles"

export default function Home() {
  return <Title>Hello World</Title>
}

const Title = styled("h1", {
  color: "red",
})
