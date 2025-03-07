import "./skillElement.css"

const SkillElement = ({ icon, text }) => {

    return (
        <div className="skill-box">
            <i className={icon} aria-hidden="true"></i>
            <p>{text}</p>
        </div>
    )
}

export default SkillElement