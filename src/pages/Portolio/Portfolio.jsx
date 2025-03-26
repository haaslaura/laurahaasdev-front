import "./portfolio.css"

import projectsList from "../../data/list-projects.json"

import PageTitle from "../../components/PageTitle/PageTitle"
import ProjectCard from "../../components/ProjectCard/ProjectCard"

const Portfolio = () => {   

    return (
        <section id="portfolio">
            <div className="section-content">
            <PageTitle text="Portfolio" classColorName="dark-h1" />
            <p>J'ai plaisir à vous présenter ici quelqu'un de mes projets favoris.</p>
                <div id="portfolio__list">
                    {projectsList.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            cover={project.cover}                        
                            type={project.type}                        
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio