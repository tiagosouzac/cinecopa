import { ContainerWinPackage, Modal } from "./styles"
import { use, useState } from "react"
import Image from "next/image"

import CloseImage from "../../assets/images/close_24px.png"
import ReactPlayer from "react-player"
import { async } from "@firebase/util"
import { useAuth } from "../../contexts/Auth"
import { doc, updateDoc } from "firebase/firestore"
import { db } from "../../config/firebase"

const WinPackage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [durationVideo, setDurationVideo] = useState(0)
  const { user, setUser } = useAuth()

  const handleModal = () => {
    setIsOpen(!isOpen)
  }

  const winPackage = () => {
    setTimeout(async () => {
      await updateDoc(doc(db, "users", user.id), {
        package: user.package + 1,
      })

      setUser({ ...user, package: (user.package = 1) })

      handleModal()
    }, durationVideo * 1000)
  }

  return (
    <ContainerWinPackage className="winPackage">
      <p>Assista trailers e ganhe mais pacotes!</p>
      <button onClick={handleModal}>Assistir</button>
      <Modal isOpen={isOpen}>
        <button className="close-modal" onClick={handleModal}>
          <Image src={CloseImage} alt="teste" />
        </button>

        <ReactPlayer
          width={"782px"}
          height={"439px"}
          onPlay={winPackage}
          onDuration={(e) => setDurationVideo(e)}
          url="https://www.youtube.com/watch?v=BvlXbO3D7p4"
        />
      </Modal>
    </ContainerWinPackage>
  )
}

export default WinPackage
