import "./educationalBg.css"
import "../../components/PageTitle/PageTitle"
import PageTitle from "../../components/PageTitle/PageTitle"

const EducationalBackground = () => {

    return (
        <section id="educbg-section">
            <PageTitle text="Formations" classColorName="dark-h1" />
            <div id="educbg-section__txt-bg">
                <div className="educbg__col" id="col1">
                    <h2>Diplômes</h2>
                    <ul>
                        <li>2023 - 2025 : <a href="https://openclassrooms.com/fr/paths/877-developpeur-dapplication-javascript-react" target="_blank">Développeur d'application <span>JavaScript React</span></a>, Diplôme de niveau 6 (bac +3/4), Openclassrooms</li>
                        <li>2009 - 2011 : Master pro <span>Multimédia</span>, Université de Strasbourg</li>
                        <li>2006 - 2009 : <a href="https://arts.unistra.fr/formations/licences/licence-arts" target="_blank">Licence d'<span>Arts Visuels</span></a>, Université de Strasbourg</li>
                    </ul>
                </div>
                <div className="educbg__col" id="col2">
                    <h2>Certificats</h2>
                    <ul>
                        <li>2025 : Passez au Full Stack avec Node.js, Express et MongoDB (en cours)</li>
                        <li>2023 : "Concevez votre site web avec PHP et MySQL", OpenClassrooms</li>
                        <li>2023 : "Apprenez les bases du langage Python", OpenClassrooms</li>
                        <li>2021 : Formation de formateur, 3 jours, HOPLA Mulhouse</li>
                        <li>2021 : "L'Atelier RGPD", MOOC dispensé par la CNIL</li>
                        <li>2018 : "Management, mieux appréhender les conflits au sein d'une équipe", RM Conseil</li>
                        {/* <li>Lectures 2023 : "Apprenez à programmer en Python, Vincent Le Goff, édition Eyrolles</li> */}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default EducationalBackground