import { useReducer, useState } from "react"
import Image from "next/image"
import Header from "../components/Header"
import {
  BackLink,
  Cards,
  Container,
  EmptyMessage,
  OpenPackage,
  ReceivedCards,
} from "../styles/packages"
import arrowIcon from "../assets/images/arrow-left.svg"
import packageImg from "../assets/images/Pacotinho.png"
import { cards } from "../cards.json"
import { arrayUnion, doc, updateDoc } from "firebase/firestore"
import { db } from "../config/firebase"
import { useAuth } from "../contexts/Auth"

export default function Packages() {
  const { user, setUser } = useAuth()
  const [isPackageOpen, setIsPackageOpen] = useReducer((state) => !state, false)
  const [receivedCards, setReceivedCards] = useState<Array<typeof cards[0]>>([])

  const handleOpenPackage = async () => {
    let obtainedCards = []

    for (let i = 0; i < 5; i++) {
      const index = Math.floor(Math.random() * (6 - 1) + 1)
      obtainedCards.push(cards[index])
    }

    await updateDoc(doc(db, "users", user.id), {
      cards: arrayUnion(...obtainedCards),
      package: user.package - 1,
    })

    setReceivedCards(obtainedCards)
    setUser({
      ...user,
      package: user.package - 1,
    })
    setIsPackageOpen()
  }

  if (!user.package && !isPackageOpen) {
    return (
      <Container>
        <Header />

        <BackLink href="/">
          <Image src={arrowIcon} alt="" width={20} height={20} />
          Voltar para home
        </BackLink>

        <EmptyMessage>
          Você não tem pacotes de figurinhas para abrir
        </EmptyMessage>
      </Container>
    )
  }

  return (
    <Container>
      <Header />

      <BackLink href="/">
        <Image src={arrowIcon} alt="" width={20} height={20} />
        Voltar para home
      </BackLink>

      <Cards>
        {!isPackageOpen ? (
          <OpenPackage onClick={handleOpenPackage}>
            <Image src={packageImg} alt="" width={297} height={420} />
            <p>Clique para abrir!</p>
          </OpenPackage>
        ) : (
          <ReceivedCards>
            {receivedCards.map((card) => (
              <Image src={card.file} alt="" width={255} height={360} />
            ))}
          </ReceivedCards>
        )}
      </Cards>
    </Container>
  )
}
