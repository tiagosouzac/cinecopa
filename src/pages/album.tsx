import Image from "next/image"
import {
  AlbumContainer,
  Card,
  Cards,
  Container,
  Country,
  EmptyCard,
  Page,
} from "../styles/album"
import brazilFlag from "../assets/images/flags/brazil.svg"
import cardLogo from "../assets/images/logo-card.png"

export default function Album() {
  return (
    <Container>
      <AlbumContainer>
        <Page>
          <Country>
            <Image src={brazilFlag} alt="Brasil" width={104} height={104} />
            <h1>Brasil</h1>
          </Country>

          <Cards>
            <Card>
              <header>
                <Image src={cardLogo} alt="Cinecopa" width={46} height={30} />

                <div>
                  <Image src={brazilFlag} alt="Brasil" width={30} height={30} />
                  <span>2022</span>
                </div>
              </header>
            </Card>

            <EmptyCard>
              <span>BRA</span>
              <span>02</span>
            </EmptyCard>
          </Cards>
        </Page>

        <Page>
          <Cards>
            <EmptyCard>
              <span>BRA</span>
              <span>03</span>
            </EmptyCard>

            <EmptyCard>
              <span>BRA</span>
              <span>04</span>
            </EmptyCard>

            <EmptyCard>
              <span>BRA</span>
              <span>05</span>
            </EmptyCard>

            <EmptyCard>
              <span>BRA</span>
              <span>06</span>
            </EmptyCard>
          </Cards>
        </Page>
      </AlbumContainer>
    </Container>
  )
}
