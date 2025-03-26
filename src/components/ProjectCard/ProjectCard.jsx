import { skillFactory } from "../../factories/skillFactory"
import "./projectCard.css"
import { Link } from "react-router"

const ProjectCard = ({ id, title, cover, type }) => {   

    const media = skillFactory(type, cover)   

    return (
        <Link className="projectcard" to={`/projet/${id}`}>
            <div className="projectcard__title">
                <h3>{title}</h3>
            </div>
            { media.render() }
        </Link>
    )
}

export default ProjectCard