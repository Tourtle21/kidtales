import Link from 'next/link'

export default function Nav() {
  return (
    <>
    <div className="top"></div>
    <nav className="flex place-content-around px-8 py-5">
        <Link className="nav-item" href='/books'>My Books</Link>
        <div className="nav-item">New Book</div>
        <Link className="font-bold text-2xl nav-item" href='/'>Kid Tails</Link>
        <div className="nav-item">Login</div>
        <button className="nav-item">Sign Up</button>
    </nav>
    </>
  )
}
