import "./cta.css"
import { Link } from "react-router-dom"

export default function ProductCTA() {
    return (
        <section className="product-cta">
            <div className="cta-container">
                <h2>Ready to Get Started?</h2>
                <p>Download Where and start sharing your location with friends</p>
                <div className="cta-buttons">
                    <Link to="https://github.com/Sepehr-khosravi?tab=repositories&q=where&type=&language=&sort=" className="cta-btn primary">
                        Download Now
                    </Link>
                    <Link to="https://github.com/Sepehr-khosravi?tab=repositories&q=where&type=&language=&sort=" className="cta-btn secondary">
                        View on GitHub
                    </Link>
                </div>
            </div>
        </section>
    )
}