
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage, LoginPage, ProfilePage, SettinsPage, SignUpPage } from './pages';
import { useAuthStore } from './store/useAuthStore';
import { useEffect } from 'react';
import { Loader } from 'lucide-react';
import { ProtectedRoute, PublicRoute } from './routes';
import MainLayout from './Layout/MainLayout';
import AuthLayout from './Layout/AuthLayout';
import { Toaster } from 'react-hot-toast';

function App() {
  const {authUser,checkAuth,isCheckingAuth} = useAuthStore();

  useEffect(()=>{
    checkAuth();
  },[checkAuth]);

  console.log({authUser});

  if(isCheckingAuth && !authUser) return(
    <div className="flex items-center justify-center h-screen">
      <Loader className="size-10 animate-spin"/>
    </div>
  )



  return (
    <div>
      <Routes>
  
        {/* rutas protegidas */}
        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/setting" element={<SettinsPage />} />
        </Route>
  
        {/* rutas publicas */}
        <Route
          element={
            <PublicRoute>
              <AuthLayout/>
            </PublicRoute>
          }
        >
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
  
  
        
  
      </Routes>
      <Toaster/>
    </div>
    
    
  )
}

export default App
