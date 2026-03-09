import { useState, type SubmitEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import toast from 'react-hot-toast';
import { Eye, EyeOff, Loader2, Lock, Mail } from 'lucide-react';

interface inputData{
  email:string,
  password:string
}


const LoginPage = () => {
  const [showPassword,setShowPassword] = useState<Boolean>(false);

  const [formData,setFormData] = useState<inputData>({
    email: "",
    password: ""
  });

  const {login, isLoggingIng} = useAuthStore();
  
  const validateForm = () => {
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");

    return true;
  }

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e)=> {
    e.preventDefault()

    const success =  validateForm()
    if(success === true) login(formData)
  }




  return (
    <div className="w-full">

      <div className="mb-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-900">
          Iniciar sesión
        </h2>

        <p className="mt-2 text-gray-600">
          Accede al panel administrativo de la fundación
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">

       {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Correo electrónico
          </label>

          <div className="relative mt-1">

            {/* icono */}
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="size-5 text-gray-400" />
            </div>

            <input
              type="email"
              placeholder="correo@fundacion.org"
              className="w-full rounded-xl border border-gray-300 pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-gray-900/10"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />

          </div>

        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Contraseña
          </label>


          <div className="relative mt-1">

            {/* icono usuario */}
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="size-5 text-gray-400" />
            </div>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="w-full rounded-xl border border-gray-300 pl-10 pr-10 py-3 outline-none focus:ring-2 focus:ring-gray-900/10"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />

            {/* icono ver contraseña */}
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              onClick={()=>setShowPassword(!showPassword)}
            >
              {
                showPassword ? (
                  <EyeOff className="size-5 text-gray-400" />
                ): (
                  <Eye className="size-5 text-gray-400" />  
                )
              }
              
            </button>
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full rounded-xl bg-blue-800 py-3 font-medium text-white hover:opacity-95 cursor-pointer"
          disabled={isLoggingIng}
        >
          {isLoggingIng ? (
            <>
              <Loader2 className="size-5 animate-pin"/>
              Loading...
            </>
          ):(
            "Create Account"
          )}
        </button>


        <div className="flex items-center justify-center text-sm">
          <Link
            to="/signup"
            className="font-medium text-gray-900 hover:underline"
          >
            sign Up
          </Link>
        </div>

      </form>

    </div>
  )
}

export default LoginPage