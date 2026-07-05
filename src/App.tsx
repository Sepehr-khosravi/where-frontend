import { Routes, Route } from "react-router-dom"
import Home from "./screens/home"
//common component
import Navigation from "./components/common/navigation"
import Footer from "./components/common/footer"
import Product from "./screens/product"
import Support from "./screens/support"
import Donate from "./screens/donate"
//components

export default function App(){
    return(
        <>
        <Navigation />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/support" element={<Support />}/>
            <Route path="/donate" element={<Donate />}/>
        </Routes>
        <Footer />
        </>
    )
}