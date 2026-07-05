import "./howItWorks.css"

export default function HomeHowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Create Account",
            desc: "Sign up in seconds and set up your profile"
        },
        {
            number: "02",
            title: "Add Friends",
            desc: "Send friend requests to people you trust"
        },
        {
            number: "03",
            title: "Share Location",
            desc: "Accept requests and start sharing your location"
        },
        {
            number: "04",
            title: "Find Friends",
            desc: "See your friends on the map and stay connected"
        }
    ]

    return (
        <div className="how-it-works">
            <div className="hiw-container">
                <div className="hiw-header">
                    <span className="badge">How It Works</span>
                    <h2>Get Started in 4 Simple Steps</h2>
                </div>
                <div className="steps">
                    {steps.map((step, index) => (
                        <div className="step" key={index}>
                            <div className="step-number">{step.number}</div>
                            <div className="step-content">
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                            {index < steps.length - 1 && <div className="step-line"></div>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}