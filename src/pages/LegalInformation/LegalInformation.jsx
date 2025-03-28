import "./legalInformation.css"
import { Link } from "react-router"

const LegalInformation = () => {

    return (
        <section id="legalinf-section">
            <div className="section-content">
                <h1>Informations légales</h1>
                <div>
                    <p>Ce site a été réalisé par Laura Haas, tous droits réservés.</p>
                    <p>Responsable de la publication : Laura Haas</p>
                    <p>Hébergement : Infomaniak, Les Acacias, Genève, Suisse</p>
                    <p>J'ai choisi Infomaniak pour mon hébergement car ses équipes œuvrent pour un numérique plus responsable, en réduisant leurs émissions de dioxyde de carbone et en finançant des projets de compensation carbone.</p>
                    <p>Informations et engagements : <a href="https://www.infomaniak.com/fr/ecologie" target="_blank">www.infomaniak.com/fr/ecologie</a></p>
                    <h2>Droit d'auteur et propriété intellectuelle</h2>
                    <p>Les textes, photos, images composant ce site sont la propriété de Laura Haas.</p>                    
                    <p>Toute reproduction, totale ou partielle, et toute représentation du contenu substantiel de ce site, d'un ou de plusieurs de ses composants, par quelque procédé que ce soit, sans autorisation expresse de Laura Haas, est interdite et constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.</p>
                    <h2>Politique de confidentialité</h2>
                    <h3>Données collectées et finalité :</h3>
                    <p>Je collecte les informations que vous me fournissez volontairement via mon formulaire de contact, telles que votre nom et prénom, votre adresse e-mail et votre numéro de téléphone. J'utilise ces données dans le but de prendre contact avec vous, dans le cadre de ma recherche d'emploi.</p>
                    <h3>Confidentialité des informations :</h3>
                    <p>Je m'engage à ne pas divulguer vos informations personnelles à des tiers, sauf si cela est requis par la loi ou avec votre consentement explicite.</p>
                    <h3>Limite de conservation :</h3>
                    <p>Comme le stipule le RGPD, je conserverai vos données personnelles uniquement pendant la durée nécessaire pour atteindre les finalités pour lesquelles elles ont été collectées.</p>
                    <h3>Sécurité :</h3>
                    <p>Pour assurer la sécurité des informations collectées, j'ai  recours au protocole SSL (Secure Sockets layer) pour chiffrer les données transmises via mon formulaire.</p>
                    <h3>Droit des personnes :</h3>
                    <p>Conformément à la loi du 6 janvier 1978 relative à l'informatique, aux fichiers et au libertés, vous disposez d'un droit d'accès, de modification, de rectification et de suppression des données vous concernant. Pour l'exercer, je vous invite <Link to="/contact">à me contacter</Link>.</p>
                </div>
            </div>            
        </section>
    )
}

export default LegalInformation