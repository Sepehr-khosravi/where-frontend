import "./faq.css"
import { useState } from "react"

export default function SupportFAQ() {
    const [openIndex, setOpenIndex] = useState(null)

    const faqs = [
        {
            question: "How do I share my location with a friend?",
            answer: "Go to your friend's profile and click on the 'Share Location' button. Your friend will receive a notification and can accept your location sharing request."
        },
        {
            question: "How do I send a friend request?",
            answer: "Use the search feature to find your friend by username, then click on the 'Add Friend' button. They will receive a request and can accept or decline it."
        },
        {
            question: "Can I see my friend's location on a map?",
            answer: "Yes! Once your friend accepts your location sharing request, you can see their live location on the interactive map in the 'Location' section."
        },
        {
            question: "How do I manage my friend requests?",
            answer: "Go to your Profile page and click on 'Invites'. There you can see all sent and received friend requests and manage them."
        },
        {
            question: "Is my location data private?",
            answer: "Yes! Your location is only shared with friends you approve. You can stop sharing your location at any time from your settings."
        },
        {
            question: "How do I change the app theme?",
            answer: "Go to Settings > Theme and choose your preferred theme. You can switch between light and dark mode."
        }
    ]

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="support-faq">
            <div className="faq-container">
                <div className="faq-header">
                    <span className="faq-badge">FAQ</span>
                    <h2>Frequently Asked Questions</h2>
                    <p>Quick answers to common questions</p>
                </div>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div 
                            className={`faq-item ${openIndex === index ? 'active' : ''}`} 
                            key={index}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="faq-question">
                                <span>{faq.question}</span>
                                <span className="faq-icon">
                                    {openIndex === index ? '−' : '+'}
                                </span>
                            </div>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}