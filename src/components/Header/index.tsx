import Image from "next/image"
import logoImg from "../../assets/images/logo.png"
import { useAuth } from "../../contexts/Auth"
import { Avatar, Container } from "./styles"

export default function Header() {
  const { user } = useAuth()

  return (
    <Container>
      <Image src={logoImg} alt="" width={206} height={51} />

      <Avatar>
        <Image src={user.avatarUrl} alt={user.name} width={64} height={64} />

        <div>
          <span>Boas vindas!</span>
          <span>{user.name}</span>
        </div>
      </Avatar>
    </Container>
  )
}
