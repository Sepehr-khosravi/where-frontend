import "./screens.css"

export default function ProductScreens() {
    const screens = [
        {
            title: "Home",
            desc: "See all your friends and their status at a glance",
            icon: "🏠"
        },
        {
            title: "Profile",
            desc: "View your account, manage invites, and edit settings",
            icon: "👤"
        },
        {
            title: "Search",
            desc: "Find new friends by username and send requests",
            icon: "🔍"
        },
        {
            title: "Location",
            desc: "See where your friends are on the interactive map",
            icon: "🗺️"
        },
        {
            title: "Invites",
            desc: "Track all your sent and received friend requests",
            icon: "📨"
        },
        {
            title: "Settings",
            desc: "Customize your theme and app preferences",
            icon: "⚙️"
        }
    ]

    return (
        <section className="product-screens">
            <div className="screens-container">
                <div className="screens-header">
                    <span className="screens-badge">Screens</span>
                    <h2>Simple & Intuitive</h2>
                    <p>Every screen designed for a seamless experience</p>
                </div>
                <div className="screens-grid">
                    {screens.map((screen, index) => (
                        <div className="screen-card" key={index}>
                            <div className="screen-icon">{screen.icon}</div>
                            <div>
                                <h4>{screen.title}</h4>
                                <p>{screen.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}