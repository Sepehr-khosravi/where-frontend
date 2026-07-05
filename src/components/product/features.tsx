import "./features.css"

export default function ProductFeatures() {
    const features = [
        {
            icon: "📍",
            title: "Live Location",
            desc: "Share your real-time location with friends and see them on the map"
        },
        {
            icon: "👥",
            title: "Friend Requests",
            desc: "Send and receive friend requests to build your network"
        },
        {
            icon: "🔍",
            title: "Search Users",
            desc: "Find your friends by username and connect instantly"
        },
        {
            icon: "📨",
            title: "Invite System",
            desc: "Track all your sent and received friend requests"
        },
        {
            icon: "👤",
            title: "Your Profile",
            desc: "Manage your account details and see your invites"
        },
        {
            icon: "⚙️",
            title: "Settings",
            desc: "Customize your app experience and preferences"
        }
    ]

    return (
        <section className="product-features">
            <div className="features-container">
                <div className="features-header">
                    <span className="features-badge">Features</span>
                    <h2>Everything You Need</h2>
                    <p>All the tools to stay connected with your friends</p>
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
        </section>
    )
}