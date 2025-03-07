import "./skills.css"
import skillsList from "../../data/list-skills.json"
import SkillElement from "../../components/SkillElement/SkillElement"
import PageTitle from "../../components/PageTitle/PageTitle";



const Skills = () => {

    console.log(skillsList);
    

    return (
        <section id="skills-section">
            <PageTitle text="Compétences" classColorName="dark-h1" />
            <div id="skills-section__list">
                {skillsList.map((skill) => (
                    <SkillElement
                        key={skill.id}
                        text={skill.name}
                        icon={skill.icon}
                    />
                ))}
            </div>
        </section>
    )
}

export default Skills