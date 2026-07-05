import "./hero.css"
import { Link } from "react-router-dom"

export default function ProductHero() {
    return (
        <section className="product-hero">
            <div className="hero-container">
                <div className="hero-content">
                    <span className="hero-badge">📍 Where App</span>
                    <h1>Connect With Your<br />Friends Anywhere</h1>
                    <p>
                        Share your location, find your friends, and stay connected 
                        in real-time. Simple, private, and secure.
                    </p>
                    <div className="hero-actions">
                        <Link to="/download" className="hero-btn primary">
                            Get Started
                        </Link>
                        <Link to="/" className="hero-btn secondary">
                            Learn More
                        </Link>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="hero-phone">
                        <div className="phone-screen">
                            <div className="phone-header">
                                <span className="phone-dot"></span>
                                <span className="phone-dot"></span>
                                <span className="phone-dot"></span>
                            </div>
                            <div className="phone-content">
                                <div className="phone-friend">
                                    <span className="friend-avatar"></span>
                                    <div>
                                        <p className="friend-name">Sarah</p>
                                        <span className="friend-status online">● Online</span>
                                    </div>
                                </div>
                                <div className="phone-friend">
                                    <span className="friend-avatar"></span>
                                    <div>
                                        <p className="friend-name">Mike</p>
                                        <span className="friend-status">📍 2.3km away</span>
                                    </div>
                                </div>
                                <div className="phone-friend">
                                    <span className="friend-avatar"></span>
                                    <div>
                                        <p className="friend-name">Emma</p>
                                        <span className="friend-status">📍 5.1km away</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}