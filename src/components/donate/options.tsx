import "./options.css"
import { useState } from "react"

export default function DonateOptions() {
    const [selectedAmount, setSelectedAmount] = useState(null)
    const [customAmount, setCustomAmount] = useState('')

    const amounts = [5, 10, 20, 50]

    const handleDonate = () => {
        const amount = customAmount || selectedAmount
        if (!amount) {
            alert('Please select or enter a donation amount')
            return
        }
        alert(`Thank you for your donation of $${amount}! ❤️`)
    }

    return (
        <section className="donate-options">
            <div className="options-container">
                <div className="options-header">
                    <span className="options-badge">Donate</span>
                    <h2>Choose Your Contribution</h2>
                    <p>Every amount helps us keep the app running and improving</p>
                </div>
                <div className="options-grid">
                    <div className="donate-card main">
                        <div className="donate-card-content">
                            <span className="donate-currency">$</span>
                            <div className="amount-buttons">
                                {amounts.map((amount) => (
                                    <button
                                        key={amount}
                                        className={`amount-btn ${selectedAmount === amount ? 'active' : ''}`}
                                        onClick={() => {
                                            setSelectedAmount(amount)
                                            setCustomAmount('')
                                        }}
                                    >
                                        ${amount}
                                    </button>
                                ))}
                            </div>
                            <div className="custom-amount">
                                <span className="currency-sign">$</span>
                                <input
                                    type="number"
                                    placeholder="Custom amount"
                                    value={customAmount}
                                    onChange={(e) => {
                                        setCustomAmount(e.target.value)
                                        setSelectedAmount(null)
                                    }}
                                    min="1"
                                />
                            </div>
                            <button className="donate-btn" onClick={handleDonate}>
                                Donate Now
                            </button>
                            <p className="donate-note">🔒 Secure payment. No account required.</p>
                        </div>
                    </div>
                    <div className="donate-info">
                        <h3>Where Your Money Goes</h3>
                        <div className="info-item">
                            <span className="info-icon">⚡</span>
                            <div>
                                <h4>Server Costs</h4>
                                <p>Keeping the app running smoothly 24/7</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <span className="info-icon">🚀</span>
                            <div>
                                <h4>New Features</h4>
                                <p>Developing new tools and improvements</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <span className="info-icon">💡</span>
                            <div>
                                <h4>Support</h4>
                                <p>Providing help and assistance to users</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <span className="info-icon">🌍</span>
                            <div>
                                <h4>Maintenance</h4>
                                <p>Keeping the app secure and up to date</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}