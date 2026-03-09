import { Navigate } from "react-router-dom"
import { useAuthStore } from "../store/useAuthStore"
import type { JSX } from "react"

const PublicRoute = ({ children }: { children: JSX.Element }) => {
  const { authUser } = useAuthStore()

  if (authUser) {
    return <Navigate to="/" />
  }

  return children
}

export default PublicRoute