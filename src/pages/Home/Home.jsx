import "./home.css"
import Presentation from "../Presentation/Presentation"
import Skills from "../Skills/Skills"
import EducationalBg from "../EducationalBg/EducationalBg"
import Contact from "../Contact/Contact"
import Portfolio from "../Portolio/Portfolio"


const Home = () => {

    return (
        <>
            <Presentation />
            <Skills />
            <EducationalBg />
            <Portfolio />
            <Contact />
        </>
    )
}

export default Home