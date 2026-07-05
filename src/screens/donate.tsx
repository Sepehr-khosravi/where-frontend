import DonateHero from "../components/donate/hero"
import DonateOptions from "../components/donate/options"
import DonateImpact from "../components/donate/impact"
import DonateFAQ from "../components/donate/faq"

export default function Donate() {
    return (
        <div className="donate-page">
            <DonateHero />
            <DonateOptions />
            <DonateImpact />
            <DonateFAQ />
        </div>
    )
}