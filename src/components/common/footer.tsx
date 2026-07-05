import "./footer.css"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>📍 Where</h3>
                        <p>Share your location. Find your friends.</p>
                    </div>
                    <div className="footer-links">
                        <div>
                            <h4>Product</h4>
                            <a href="#">Features</a>
                            <a href="#">How it works</a>
                            <a href="#">Download</a>
                        </div>
                        <div>
                            <h4>Company</h4>
                            <a href="#">About</a>
                            <a href="#">Blog</a>
                            <a href="#">Contact</a>
                        </div>
                        <div>
                            <h4>Legal</h4>
                            <a href="#">Privacy</a>
                            <a href="#">Terms</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2026 Where. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}