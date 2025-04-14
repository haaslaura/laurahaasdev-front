import "./project.css"
import { useParams } from "react-router"
import projects from "../../data/list-projects.json"
import Error from "../Error/Error"
import Button from "../../components/Button/Button"
import { Link } from "react-router-dom"
import { skillFactory } from "../../factories/skillFactory"
import { useState } from "react"

const Project = () => {

    const { id } = useParams();
    const project = projects.find(proj => proj.id === id);

    // Handling property id errors
    if (!project) {
        return <Error />
    };

    const media = skillFactory(project?.type, project?.cover);
    const showGitButton = project?.githublink?.length > 0;
    const showDemoButton = project?.demolink?.length > 0;

    return (
        <section className="project__section">
             <h1 className="project__title">{project.title}</h1>
            <div className="project__content">
                { media.render() }
                <div className="project__text">
                    
                    <h2>🚀 Objectif</h2>
                    <p>{project.objective}</p>
                    
                    <h2>📈 Résultats</h2>

                    <ul>
                        {project.achievements.map((achievement, i) => (                                
                            <li key={`key-${i}-objective`}>{achievement}</li>
                        ))}
                    </ul>
                    
                    <h2>🛠️ Outils</h2>
                    <ul>
                        {project.tools.map((tool) => (
                            <li key={`key-${id}-${tool}`}>{tool}</li>
                        ))}
                    </ul>
                    
                    <div className="project__button-container">
                        {
                            showDemoButton &&
                                <Button
                                    as={Link}
                                    to={project.demolink}
                                    text="Demo"
                                />
                        }
                        {
                            showGitButton &&
                                <Button
                                    as={Link}
                                    to={project.githublink}
                                    text="Lien GitHub"
                                />
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project