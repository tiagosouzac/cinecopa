import { signInWithPopup } from "firebase/auth"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { useRouter } from "next/router"
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"
import { auth, db, googleProvider } from "../config/firebase"

type User = {
  id: string
  name: string
  email: string
  avatarUrl: string
  cards: any[]
}

type ContextProps = {
  user: User
  handleLoginWithGoogle: () => void
}

type ProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as ContextProps)

export const AuthProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState({} as User)
  const { replace, pathname } = useRouter()

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (!user) return replace("/login")

      const docRef = doc(db, "users", user.uid)
      const docSnap = await getDoc(docRef)

      if (!docSnap.exists()) {
        const newUser = {
          id: user.uid,
          name: user.displayName as string,
          email: user.email as string,
          avatarUrl: user.photoURL as string,
          cards: [],
        }

        await setDoc(doc(db, "users", user.uid), newUser)
        setUser(newUser)
        return replace("/")
      }

      setUser(docSnap.data() as User)
      pathname === "/login" && replace("/")
    })
  }, [])

  const handleLoginWithGoogle = async () =>
    await signInWithPopup(auth, googleProvider)

  return (
    <AuthContext.Provider value={{ user, handleLoginWithGoogle }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  return context
}
