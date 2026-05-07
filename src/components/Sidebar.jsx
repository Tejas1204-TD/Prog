import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/vite.svg'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Science' },
  { to: '/register', label: 'Register' },
  { to: '/login', label: 'Login' },
]

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1120) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <button
        type="button"
        className="mobile-menu-button"
        aria-label="Open menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        className={`sidebar-overlay ${isOpen ? 'open' : ''}`}
        role="presentation"
        onClick={closeMenu}
      />

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-mobile-header">
          <div className="brand-block">
            <span className="brand-mark" aria-hidden="true">
              <img src={logo} alt="Kisan Dost logo" />
            </span>
            <div>
              <p className="eyebrow">Agriculture Dashboard</p>
              <h1 className="brand-title">Kisan Dost</h1>
            </div>
          </div>

          <button type="button" className="mobile-close-button" onClick={closeMenu}>
            Close
          </button>
        </div>

        <nav className="sidebar-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-footer">
          <p>Scientific fertilizer planning for happy farmers.</p>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
