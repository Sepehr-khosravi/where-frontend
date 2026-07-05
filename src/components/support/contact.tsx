import "./contact.css"
import { useState } from "react"

export default function SupportContact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission
        console.log('Form submitted:', formData)
        alert('Thank you! We will get back to you soon.')
        setFormData({ name: '', email: '', message: '' })
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const contactMethods = [
        {
            icon: '📧',
            title: 'Email',
            info: 'support@where.app',
            desc: 'We respond within 24 hours'
        },
        {
            icon: '🐦',
            title: 'Twitter',
            info: '@whereapp',
            desc: 'Follow us for updates'
        },
        {
            icon: '📱',
            title: 'App Support',
            info: 'In-app help',
            desc: 'Settings > Help Center'
        }
    ]

    return (
        <section className="support-contact">
            <div className="contact-container">
                <div className="contact-header">
                    <span className="contact-badge">Contact</span>
                    <h2>Get in Touch</h2>
                    <p>Have questions? We'd love to hear from you</p>
                </div>
                <div className="contact-grid">
                    <div className="contact-info">
                        <h3>Reach Out</h3>
                        <p>Our team is here to help. Choose a method to get in touch.</p>
                        <div className="contact-methods">
                            {contactMethods.map((method, index) => (
                                <div className="contact-method" key={index}>
                                    <div className="contact-method-icon">{method.icon}</div>
                                    <div>
                                        <h4>{method.title}</h4>
                                        <p>{method.info}</p>
                                        <span>{method.desc}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="How can we help you?"
                                rows={5}
                            />
                        </div>
                        <button type="submit" className="contact-submit">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}