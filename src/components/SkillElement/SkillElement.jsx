import "./skillElement.css"
import { skillFactory } from "../../factories/skillFactory"

const SkillElement = ({ icon, type, text }) => {

    const media = skillFactory(type, icon)

    return (
        <div className="skill-box">
            { media.render() }
            <p>{text}</p>
        </div>
    )
}

export default SkillElement