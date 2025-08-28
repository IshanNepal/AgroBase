import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (!email || !password || !username) {
      return toast.error('All fields are required!');
    }
    try {
      const res = await fetch("http://127.0.0.1:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, username }),
      });
      if (res.ok) {
        navigate('/home');
        toast.success('SignUp Successful!');
      } else {
        const data = await res.json();
        toast.error(data.error || 'SignUp not successful!');
      }
    } catch (e) {
      console.error(e);
      toast.error('Something went wrong!');
    }
  }

  return (
    <main className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>

        <label className="text-gray-700">Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label className="text-gray-700">Email</label>
        <input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label className="text-gray-700">Password</label>
        <input
          type="password"
          placeholder="Enter a strong password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={handleSignUp}
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors mt-4"
        >
          Sign Up
        </button>
      </div>
    </main>
  )
}

export default SignUpPage;
