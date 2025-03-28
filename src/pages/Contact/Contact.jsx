import "./contact.css"
import "../../components/PageTitle/PageTitle"
import PageTitle from "../../components/PageTitle/PageTitle"
import ContactForm from "../../components/ContactForm/ContactForm"

const Contact = () => {

    return (
        <section id="contact-section">
            <div className="section-content">
                <div className="contact-col" id="contact-col1">
                    <PageTitle text="Prenons contact" classColorName="clear-h2"/>
                    <p>Nous pouvons prendre contact via le formulaire ci-après ou par téléphone : 06.37.98.28.73.</p>
                    <p>Retrouvez-moi également sur <a href="https://www.linkedin.com/in/laurahaas-developpement/" target="_blank">LinkedIn</a></p>
                </div>
                <div className="contact-col" id="contact-col2">
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default Contact