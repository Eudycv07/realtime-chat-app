import type { AuthUser } from "./AuthUser"

 export interface AuthStore {
  authUser: AuthUser | null
  isSigningUp: boolean
  isLoggingIng: boolean
  isUpdatingProfile: boolean
  isCheckingAuth: boolean
  checkAuth: () => Promise<void>
  signup: (data:any) => Promise<void>
  login: (data:any) => Promise<void>
}
