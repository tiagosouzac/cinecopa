import Input from "../components/Input";
import { Container, Form, Info, Title } from "../styles/login";
import loginBackground from "../assets/images/login-background.png";
import AlbumMock from "../assets/images/Mockup-Album.png";
import Image from "next/image";
import Button from "../components/Button";
import { useAuth } from "../contexts/Auth";
import { useEffect } from "react";

export default function Login() {
  const { handleLoginWithGoogle, user } = useAuth();

  // useEffect(() => {if}, []);

  return (
    <>
      <Container>
        <Image
          className="background"
          src={loginBackground}
          alt={"login background"}
        ></Image>
        <Image src={AlbumMock} alt={"login background"}></Image>

        <Form>
          <Title>Boas vindas!</Title>
          <Info>Faça o login para acessar seu álbum:</Info>

          <Button
            onClick={handleLoginWithGoogle}
            variant="google"
            type="button"
          >
            Entre usando o Google
          </Button>

          <p>OU</p>

          <Input
            type="name"
            name="name"
            placeholder="Digite seu nome"
            label="Nome"
            errorMessage="Insira um nome"
          />

          <Input
            type="email"
            name="email"
            placeholder="galego@eplus.com.br"
            label="E-mail"
            errorMessage="Digite um e-mail válido"
          />
          <Input
            errorMessage="Senha tem de ter no mínimo 6 caracteres"
            type="password"
            name="password"
            label="Senha"
          />

          <Button variant="primary" type="submit">
            Entrar
          </Button>
        </Form>
      </Container>
    </>
  );
}
