import "./feature.css"

export default function HomeFeatures() {
    const features = [
        {
            icon: "👥",
            title: "Friend Requests",
            desc: "Send and accept friend requests to start sharing locations"
        },
        {
            icon: "📍",
            title: "Live Location",
            desc: "Share your real-time location with trusted friends"
        },
        {
            icon: "🗺️",
            title: "Interactive Map",
            desc: "See your friends on the map and find them easily"
        },
        {
            icon: "🟢",
            title: "Online Status",
            desc: "Know when your friends are online and available"
        }
    ]

    return (
        <div className="features">
            <div className="features-container">
                <div className="features-header">
                    <span className="badge">Features</span>
                    <h2>Why Use Where?</h2>
                    <p>Everything you need to stay connected with your friends</p>
                </div>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div className="feature-card" key={index}>
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}