import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'


const Login = () => {

  const {setShowLogin, axios, setToken, navigate} = useAppContext()

  const [state, setState] = useState("login")

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const onSubmitHandler = async (event) => {
    try {
      event.preventDefault();
      const payload =
      state === "register"
        ? formData
        : { email: formData.email, password: formData.password };

    const { data } = await axios.post(`/api/user/${state}`, payload);
    console.log("Sending data:", payload)
      if(data.success){
        toast.success(state === "register" ? "User created successfully" : "Logged in successfully")
        navigate('/')
        setToken(data.token)
        localStorage.setItem('token',data.token)
        setShowLogin(false)
      } else {
        toast.error(data.message)
      }
      
    } catch (error) {
       // ignore unauthorized
      if (error.response?.status !== 401) {
        toast.error("Something went wrong")
      }
    }
  }

  const handleGoogleLogin = () => {
    window.location.href = `${import.meta.env.VITE_BASE_URL}/api/auth/google`
  }

  const handleGithubLogin = () => {
    window.location.href = `${import.meta.env.VITE_BASE_URL}/api/auth/github`
  }
  return (
    <div
      onClick={() => setShowLogin(false)}
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/50"
    >

      <div
        className="w-full max-w-sm rounded-lg bg-gray-50 border border-gray-200 p-6"
        onClick={(e) => e.stopPropagation()}
      >

        <div className="flex justify-center mb-4">
          <img src={assets.logo} alt="logo" />
        </div>

        {/* Title */}
        <p className="text-2xl font-medium text-center">
          <span className="text-indigo-500">User </span>
          {state === "login" ? "Login" : "Sign Up"}
        </p>

        <form onSubmit={onSubmitHandler} className="mt-5">

          {/* Name (only for signup) */}
          {state === "register" && (
            <div className="mb-4">
              <label className="text-sm text-gray-400">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full mt-1 px-3 py-2 border rounded bg-slate-100"
              />
            </div>
          )}

          {/* Email */}
          <div className="mb-4">
            <label className="text-sm text-gray-400">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className="w-full mt-1 px-3 py-2 border rounded bg-slate-100"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="text-sm text-gray-400">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full mt-1 px-3 py-2 border rounded bg-slate-100"
            />
          </div>

          <button
            className="py-2.5 font-medium w-full rounded bg-indigo-500 text-white hover:bg-indigo-600"
          >
            {state === "login" ? "Login" : "Create Account"}
          </button>

        </form>
        <div className="relative my-6 text-center">
  <span className="relative z-10 bg-gray-50 px-3 text-gray-400">
    Or continue with
  </span>

  <div className="absolute top-1/2 left-0 h-px w-2/5 -translate-y-1/2 bg-gray-300"></div>
  <div className="absolute top-1/2 right-0 h-px w-2/5 -translate-y-1/2 bg-gray-300"></div>
</div>

{/* Github Login */}
<button
  type="button"
  onClick={handleGithubLogin}
  className="flex py-2 w-full items-center justify-center gap-2 rounded bg-gray-800 text-gray-300 hover:bg-gray-900"
>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
    <path
      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
      fill="#fff"
    />
  </svg>
  Github
</button>

{/* Google Login */}
<button
  type="button"
  onClick={handleGoogleLogin}
  className="mt-2 flex py-2 w-full items-center justify-center gap-2 rounded bg-gray-800 text-gray-300 hover:bg-gray-900"
>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20" height="20">
    <path fill="#FFC107"
      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"/>
    <path fill="#FF3D00"
      d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691"/>
    <path fill="#4CAF50"
      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"/>
    <path fill="#1976D2"
      d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"/>
  </svg>
  Google
</button>

        {/* Toggle Login / Signup */}
        <p className="text-sm text-center mt-4">

          {state === "login" ? (
            <>
              Don’t have an account?{" "}
              <span
                className="text-indigo-500 cursor-pointer"
                onClick={() => setState("register")}
              >
                Sign Up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                className="text-indigo-500 cursor-pointer"
                onClick={() => setState("login")}
              >
                Login
              </span>
            </>
          )}

        </p>

      </div>

    </div>
  )
}

export default Login