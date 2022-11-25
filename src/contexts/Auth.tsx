import { signInWithPopup } from "firebase/auth"
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore"
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
  name: string
  email: string
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
          name: user.displayName as string,
          email: user.email as string,
          cards: [],
        }

        await setDoc(doc(db, "users", user.uid), newUser)
        setUser(newUser)
        return replace("/")
      }

      setUser(docSnap.data())
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
