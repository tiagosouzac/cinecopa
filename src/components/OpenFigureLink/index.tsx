import { useAuth } from "../../contexts/Auth";
import { OpenFigureContainer } from "./styles";
import Image from "next/image";
import Link from "next/link";

import PackageImage from "../../assets/images/Pacotinho.png";

const OpenFigureLink = () => {
  const { user } = useAuth();

  const packageCards = user?.package;

  return (
    <Link href={"/open-link"}>
      <OpenFigureContainer>
        <Image src={PackageImage} alt="" />
        <p className="open-package">
          Abrir pacotes
          <span>{packageCards}</span>
        </p>
      </OpenFigureContainer>
    </Link>
  );
};

export default OpenFigureLink;
