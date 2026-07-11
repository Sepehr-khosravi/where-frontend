import "./hero.css"

export default function ProductHero() {
    return (
        <>
            <div className="article" >
                <div className="article-content">
                    <p style={{fontSize : 13, color: '#999'}}>📍 Where - Location Sharing App</p>
                    <h2>Always Know Where Your Friends Are</h2>
                    <p>Share your location with friends, see them on the map, and stay connected in real-time.</p>
                    
                    <div className="features-mini">
                        <span>📍 Share Location</span>
                        <span>👥 Friend Requests</span>
                        <span>🗺️ Live Map</span>
                    </div>
                    
                    <div className="article-decoration"></div>
                </div>
            </div>
        </>
    )
}