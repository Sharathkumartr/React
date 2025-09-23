import {Link, Routes} from "react-router-dom"

function Navbar() {
  return (
    <div>
    
      <nav className="navbar">
       <Link to="/home" className="nav-item"> Home </Link>
       <Link to="/about" className="nav-item"> About </Link>
      <Link to="/contact" className="nav-item"> Contact </Link>
       </nav>
    </div>
  )
}

export default Navbar
