import "./download.css"

export default function HomeDownload() {

    const onDownloadPress = ()=>{
        window.location.href = "https://github.com/Sepehr-khosravi?tab=repositories&q=where&type=&language=&sort="
    }
    return (
        <div className="download">
            <div className="download-container">
                <div className="download-content">
                    <span className="badge">Get Started</span>
                    <h2>Ready to Find Your Friends?</h2>
                    <p>Download Where now and start sharing locations with your friends</p>
                    <div className="download-buttons">
                        <button className="download-btn">
                            <span className="btn-icon">📱</span>
                            <div onClick={onDownloadPress}>
                                <small>Download on</small>
                                <strong>App Store</strong>
                            </div>
                        </button>
                        <button className="download-btn">
                            <span className="btn-icon">📱</span>
                            <div onClick={onDownloadPress}>
                                <small>Get it on</small>
                                <strong>Google Play</strong>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}