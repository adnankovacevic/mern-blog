import { Link } from "react-router-dom";

export default function Header() {

  return (
    <header className="bg-sky-600 text-white p-6 rounded-full border-white">
      <Link to="/" className="logo">MyBlog</Link>
      <nav>
        <>
          <button className="hover:bg-sky-800 px-4 py-1 inline-block rounded-full whitespace-nowrap"><Link to="/create">New Post</Link></button>
          <button className="hover:bg-sky-800 px-4 py-1 inline-block rounded-full whitespace-nowrap"><Link to="/login">Login</Link></button>
          <button className="hover:bg-sky-800 px-4 py-1 inline-block rounded-full whitespace-nowrap"><Link to="/register">Register</Link></button>
        </>

      </nav>
    </header>
  );

}