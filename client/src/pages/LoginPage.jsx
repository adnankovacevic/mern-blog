import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function LoginPage() {
       const [username, setUsername] = useState('');
       const [password, setPassword] = useState('');
       const [redirect, setRedirect] = useState(false);

       async function login(ev) {
              ev.preventDefault();
              const response = await fetch('http://localhost:4000/login',
                     {
                            method: 'POST',
                            body: JSON.stringify({ username, password }),
                            headers: { 'Content-Type': 'application/json' },
                            credentials: "include",
                     });
              if (response.ok) {
                     setRedirect(true)
                     alert('Logged in successful!')
              } else {
                     alert('Wrong credentials!')
              }
       }
       if (redirect) {
              return <Navigate to={'/'} />
       }
       return (
              <form
                     className="flex flex-col items-center justify-top-center h-screen"
                     onSubmit={login}
              >
                     <h1 className="mb-3">Login</h1>
                     <input
                            className="border border-gray-300 rounded-md px-5 py-3 mb-3  w-full md:w-2/6"
                            type="text"
                            placeholder="username"
                            value={username}
                            onChange={ev => setUsername(ev.target.value)} />
                     <input
                            className="border border-gray-300 rounded-md px-5 py-3 mb-3  w-full md:w-5/6"
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={ev => setPassword(ev.target.value)} />
                     <button className="bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded-full w-full md:w-5/6">Login</button>
              </form>
       )
}