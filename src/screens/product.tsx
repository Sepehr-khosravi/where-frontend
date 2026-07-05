import "./product.css"
import ProductHero from "../components/product/hero"
import ProductFeatures from "../components/product/features"
import ProductScreens from "../components/product/screens"
import ProductCTA from "../components/product/cta"

export default function Product() {
    return (
        <div className="product-page">
            <ProductHero />
            <ProductFeatures />
            <ProductScreens />
            <ProductCTA />
        </div>
    )
}