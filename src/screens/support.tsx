import SupportHero from "../components/support/hero"
import SupportFAQ from "../components/support/faq"
import SupportContact from "../components/support/contact"

export default function Support() {
    return (
        <div className="support-page">
            <SupportHero />
            <SupportFAQ />
            <SupportContact />
        </div>
    )
}