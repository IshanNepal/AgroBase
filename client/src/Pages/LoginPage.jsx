import { GoogleLogin } from '@react-oauth/google'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handlePasswordChange = (e) => {
        () => setPassword(e.target.value)
    }
    const handleEmailChange = (e) => {
        () => setEmail(e.target.value)
    }

    const handleLogin = async() => {
        if (email || password < 0) {
            return toast.error('All of the Feilds are required!')
        }
        try{
            const res = await fetch("http://127.0.0.1:5000/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email:email,
                password:password
        })
    });
    if(res.ok) {
        navigate('/home');
        toast.success('Login Sucessfull');
    }
    else {
        return toast.error('Login not sucessfull!');
    }
}
     catch (e) {
        console.log(e)
        toast.error('Something went Wrong!')
    }
}

  return(
    <main>
        <div className="Login">
           <div className="Form">
            <label htmlFor="Email">Email:</label>
            <input type="text" placeholder='Enter Your Email.' onChange={handlePasswordChange}/>
            <label htmlFor="Email">Email:</label>
            <input type="password" placeholder='Enter a Strong password!' onChange={handleEmailChange}/>
           </div>
        </div>
        <button onClick={() => handleLogin()}>
            Login
        </button>
    </main>
  )
}


export default LoginPage;

