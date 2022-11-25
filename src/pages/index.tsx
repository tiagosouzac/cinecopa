import Image from "next/image";
import { ContainerHome } from "../styles/home";
import homeBackground from "../assets/images/home-background.png";
import OpenFigureLink from "../components/OpenFigureLink";
import WinFigure from "../components/WinFigure";
import WinPackage from "../components/WinFigure";

export default function Home() {
  return (
    <ContainerHome>
      <Image src={homeBackground} className="backgrouund" alt=""></Image>
      <div className="home-right">
        <WinPackage />
        <OpenFigureLink></OpenFigureLink>
      </div>
    </ContainerHome>
  );
}
