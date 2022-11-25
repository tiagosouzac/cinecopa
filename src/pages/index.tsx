import Image from "next/image";
import { ContainerHome } from "../styles/home";
import homeBackground from "../assets/images/home-background.png";
import OpenFigureLink from "../components/OpenFigureLink";

export default function Home() {
  return (
    <ContainerHome>
      <Image src={homeBackground} className="backgrouund" alt=""></Image>
      <div className="home-right">
        <OpenFigureLink></OpenFigureLink>
      </div>
    </ContainerHome>
  );
}
