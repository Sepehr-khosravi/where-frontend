import "./faq.css"
import { useState } from "react"

export default function DonateFAQ() {
    const [openIndex, setOpenIndex] = useState(null)

    const faqs = [
        {
            question: "Is my donation secure?",
            answer: "Yes! All payments are processed through secure payment gateways. We never store your payment information."
        },
        {
            question: "Where does my money go?",
            answer: "Your donation goes towards server costs, development of new features, maintenance, and supporting our user community."
        },
        {
            question: "Can I cancel my donation?",
            answer: "All donations are final and non-refundable. However, if you have any issues, please contact our support team."
        },
        {
            question: "Do I get any benefits for donating?",
            answer: "While we don't offer premium features, donors get early access to beta features and a special 'Supporter' badge on their profile."
        }
    ]

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="donate-faq">
            <div className="donate-faq-container">
                <div className="donate-faq-header">
                    <span className="donate-faq-badge">FAQ</span>
                    <h2>Donation Questions</h2>
                    <p>Everything you need to know about supporting us</p>
                </div>
                <div className="donate-faq-list">
                    {faqs.map((faq, index) => (
                        <div 
                            className={`donate-faq-item ${openIndex === index ? 'active' : ''}`} 
                            key={index}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="donate-faq-question">
                                <span>{faq.question}</span>
                                <span className="donate-faq-icon">
                                    {openIndex === index ? '−' : '+'}
                                </span>
                            </div>
                            <div className="donate-faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}