import { useEffect, useState } from "react"
import "./project.css"
import { useParams } from "react-router"
import projects from "../../data/list-projects.json"
import Error from "../Error/Error"
import Button from "../../components/Button/Button"
import { Link } from "react-router-dom"
import { skillFactory } from "../../factories/skillFactory"

const Project = () => {

    const { id } = useParams();
    const project = projects.find(proj => proj.id === id);
    const media = skillFactory(project.type, project.cover);

    // Handling property id errors
    if (!project) {
        return <Error />
    };

    return (
        <section className="project__section">
             <h1 className="project__title">{project.title}</h1>
            <div className="project__content">
                { media.render() }
                <div className="project__text">
                    
                    <h2>📌 Contexte</h2>
                    <p>{project.context}</p>
                    
                    <h2>🚀 Objectifs</h2>
                    <ul>
                        {project.objectives.map((objective, i) => (                                
                            <li key={`key-${i}-objective`}>{objective}</li>
                        ))}
                    </ul>
                    
                    <h2>📈 Résultats</h2>
                    <p>{project.achievements}</p>
                    
                    <h2>🛠️ Outils</h2>
                    <ul>
                        {project.tools.map((tool) => (
                            <li key={`key-${id}-${tool}`}>{tool}</li>
                        ))}
                    </ul>
                    
                    <div className="project__button-container">
                        <Button
                            as={Link}
                            to={project.demolink}
                            text="Demo"
                        />
                        <Button
                            as={Link}
                            to={project.githublink}
                            text="Lien GitHub"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project