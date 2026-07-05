import "./hero.css"

export default function DonateHero() {
    return (
        <section className="donate-hero">
            <div className="donate-hero-container">
                <div className="donate-hero-content">
                    <span className="donate-badge">❤️ Support Us</span>
                    <h1>Support Where<br />Help Us Grow</h1>
                    <p>
                        Your donation helps us maintain and improve the app, 
                        add new features, and keep the service free for everyone.
                    </p>
                    <div className="donate-hero-stats">
                        <div className="stat">
                            <span className="stat-number">1.2K+</span>
                            <span className="stat-label">Active Users</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat">
                            <span className="stat-number">50+</span>
                            <span className="stat-label">Countries</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat">
                            <span className="stat-number">100%</span>
                            <span className="stat-label">Free to Use</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}