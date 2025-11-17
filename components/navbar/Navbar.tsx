export const Navbar = () => {
  return (
    <nav className="flex bg-blue-900 bg-opacity-30 p-2 m-2 rounded text-blue-100">
      <span>Home</span>
      <div className="flex- flex-1"></div>
      <a href="/about" className="mr-3">About</a>
      <a href="/contact" className="mr-3">Contact</a>
      <a href="/pricing" className="mr-3">Pricing</a>
    </nav>
  )
}
