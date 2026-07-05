import "./hero.css"

export default function SupportHero() {
    return (
        <section className="support-hero">
            <div className="support-hero-container">
                <div className="support-hero-content">
                    <span className="support-badge">💬 Support</span>
                    <h1>How Can We Help You?</h1>
                    <p>
                        Find answers to common questions or reach out to our support team.
                        We're here to help you 24/7.
                    </p>
                    <div className="support-search">
                        <input 
                            type="text" 
                            placeholder="Search for help..." 
                            className="support-search-input"
                        />
                        <button className="support-search-btn">Search</button>
                    </div>
                </div>
            </div>
        </section>
    )
}