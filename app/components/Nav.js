import Link from 'next/link'

export default function Nav() {
  return (
    <>
    <div className="top"></div>
    <nav className="flex place-content-around px-8 py-5">
        <div className="nav-item">My Books</div>
        <div className="nav-item">New Book</div>
        <div className="font-bold text-2xl nav-item">Kid Tails</div>
        <div className="nav-item">Login</div>
        <button className="nav-item">Sign Up</button>
    </nav>
    </>
  )
}
