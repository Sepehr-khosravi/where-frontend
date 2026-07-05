// pages/Home.js
import HomeArticle from "../components/home/article"
import HomeFeatures from "../components/home/feature"
import HomeHowItWorks from "../components/home/guid"
import HomeDownload from "../components/home/download"

export default function Home(){
    return(
        <div className="home">
            <HomeArticle />
            <HomeFeatures />
            <HomeHowItWorks />
            <HomeDownload />
        </div>
    )
}