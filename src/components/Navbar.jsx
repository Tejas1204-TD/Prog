import { NavLink } from 'react-router-dom'
import logo from '../assets/vite.svg'

const navItems = [
  { to: '/dashboard', label: 'Home' },
  { to: '/about', label: 'Science' },
  { to: '/login', label: 'Logout' },
]

function Navbar() {
  return (
    <header className="topbar">
      <div className="topbar-brand">
        <span className="brand-mark small" aria-hidden="true">
          <img src={logo} alt="Kisan Dost logo" />
        </span>
        <div>
          <p className="eyebrow">Kisan Dost</p>
          <h1 className="topbar-title">Smart Farm Planner</h1>
        </div>
      </div>

      <nav className="topbar-nav" aria-label="Dashboard navigation">
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} className={({ isActive }) => `topbar-link${isActive ? ' active' : ''}`}>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
