import { useEffect, useState } from "react"
import { Outlet, Link } from "react-router-dom"

const AuthLayout = () => {
  const year = new Date().getFullYear()

  const words = ["simple", "rápida", "segura"]


    const [index, setIndex] = useState(0)

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev:number) => (prev + 1) % words.length)
      }, 2000)

      return () => clearInterval(interval)
    }, [])

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

      {/* Lado izquierdo */}
      <section className="relative bg-blue-800 text-white px-8 py-10 flex items-center overflow-hidden">

        

        {/* Fondo decorativo */}
        <div className="absolute inset-0 pointer-events-none">

          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>

          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-sm"></div>

          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-sm"></div>

        </div>

        <div className="relative w-full max-w-lg mx-auto">

          <div className="text-center flex flex-col items-center">
            <p className="text-sm text-white/70">
              Chat App
            </p>

            <h1 className="text-3xl font-semibold flex justify-center gap-2 mt-2">
              Mensajería más

              <span className="relative h-12 overflow-hidden">
                <span
                  className="flex flex-col transition-transform duration-500"
                  style={{
                    transform: `translateY(-${index * 51}px)`
                  }}
                >
                  {words.map((word) => (
                    <span key={word} className="h-12 text-green-500 font-bold flex items-center">
                      {word}
                    </span>
                  ))}
                </span>
              </span>

            </h1>
          </div>

          {/* <h2 className="mt-10 text-4xl font-semibold">
            
          </h2> */}

          {/* <p className="mt-4 text-white/80">
            Chatea en tiempo real, comparte ideas y mantente conectado con las
            personas que importan.
          </p> */}


          <div className="mt-10 text-sm text-white/60 text-center">
            © {year} Chat App
          </div>

        </div>

      </section>

      {/* Lado derecho (formularios) */}
      <section className="bg-white px-6 sm:px-10 py-10 flex items-center">
        <div className="w-full max-w-md mx-auto">

          {/* Aquí se renderiza Login o Signup */}
          <Outlet />

        </div>
      </section>

    </div>
  )
}

export default AuthLayout