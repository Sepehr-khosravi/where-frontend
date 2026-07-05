import "./impact.css"

export default function DonateImpact() {
    const impacts = [
        {
            number: "500+",
            label: "Hours of Development",
            desc: "Building and improving the app"
        },
        {
            number: "100+",
            label: "Updates Released",
            desc: "Regular improvements and fixes"
        },
        {
            number: "50+",
            label: "New Features",
            desc: "Added based on user feedback"
        },
        {
            number: "99.9%",
            label: "Uptime",
            desc: "Reliable service for our users"
        }
    ]

    return (
        <section className="donate-impact">
            <div className="impact-container">
                <div className="impact-header">
                    <span className="impact-badge">Impact</span>
                    <h2>Your Support Makes a Difference</h2>
                    <p>Thanks to our amazing community, we've achieved so much</p>
                </div>
                <div className="impact-grid">
                    {impacts.map((impact, index) => (
                        <div className="impact-card" key={index}>
                            <span className="impact-number">{impact.number}</span>
                            <h4>{impact.label}</h4>
                            <p>{impact.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}