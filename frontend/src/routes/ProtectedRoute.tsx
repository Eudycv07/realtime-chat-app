import { Navigate } from "react-router-dom"
import { useAuthStore } from "../store/useAuthStore"
import type { JSX } from "react"

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { authUser } = useAuthStore()

  if (!authUser) {
    return <Navigate to="/login" />
  }

  return children
}

export default ProtectedRoute