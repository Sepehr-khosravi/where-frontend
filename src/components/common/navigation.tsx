import "./navigation.css"
import Logo from "../../assets/logo-png.png"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

export default function Navigation(){
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <div className={`nav ${scrolled ? 'scrolled' : ''}`}>
                <Link to="/" className="logo">
                    <img src={Logo} alt="Where" />
                    <span className="logo-text">Where</span>
                </Link>

                <div className="nav-items">
                    <Link to="/" className="nav-item">
                        <p>Home</p>
                        <div className="hover-line"></div>
                    </Link>
                    <Link to="/product" className="nav-item">
                        <p>Features</p>
                        <div className="hover-line"></div>
                    </Link>
                    <Link to="/donate" className="nav-item">
                        <p>Donation</p>
                        <div className="hover-line"></div>
                    </Link>
                    <Link to="/support" className="nav-item">
                        <p>Support</p>
                        <div className="hover-line"></div>
                    </Link>
                </div>

                <button className={`hamburger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* منوی موبایل */}
            <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
                <div className="mobile-menu-header">
                    <span className="menu-label">Menu</span>
                    <button className="close-btn" onClick={() => setIsOpen(false)}>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <div className="mobile-menu-items">
                    <Link to="/" className="mobile-item" onClick={() => setIsOpen(false)}>
                        <p>Home</p>
                    </Link>
                    <Link to="/product" className="mobile-item" onClick={() => setIsOpen(false)}>
                        <p>Features</p>
                    </Link>
                    <Link to="/donate" className="mobile-item" onClick={() => setIsOpen(false)}>
                        <p>Donation</p>
                    </Link>
                    <Link to="/support" className="mobile-item" onClick={() => setIsOpen(false)}>
                        <p>Support</p>
                    </Link>
                </div>
            </div>

            {/* اوورلی */}
            <div className={`menu-overlay ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(false)}></div>
        </>
    )
}