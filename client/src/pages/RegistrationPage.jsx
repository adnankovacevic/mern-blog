import { useState } from "react"

export default function RegistrationPage() {
       const [username, setUsername] = useState('');
       const [password, setPassword] = useState('');
       async function register(ev) {
              ev.preventDefault();
              async function register(ev) {
                     ev.preventDefault();
                     const response = await fetch('http://localhost:4000/register', {
                       method: 'POST',
                       body: JSON.stringify({username,password}),
                       headers: {'Content-Type':'application/json'},
                     });
                     if (response.status === 200) {
                       alert('Registration successful!');
                     } else {
                       alert('Registration failed!');
                     }
                   }
       }
       return (
              <form
                     onSubmit={register}
                     className="flex flex-col items-center justify-top-center h-screen register">
                     <h1 className="mb-3">Register</h1>
                     <input
                            className="border border-gray-300 rounded-md px-5 py-3 mb-3  w-full md:w-11/12"
                            type="text"
                            placeholder="username"
                            value={username}
                            onChange={ev => setUsername(ev.target.value)} />
                     <input
                            className="border border-gray-300 rounded-md px-5 py-3 mb-3  w-full md:w-11/12"
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={ev => setPassword(ev.target.value)} />
                     <button
                            className="bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded-full w-full md:w-5/6">Register</button>
              </form>
       )
}