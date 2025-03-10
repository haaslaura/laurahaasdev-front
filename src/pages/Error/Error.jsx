import { Link } from "react-router"
import Button from "../../components/Button/Button"
import "./error.css"

const Error = () => {

    return (
        <section id="error-section">
            <div className="section-content">
                <h1>Erreur 404</h1>
                <p>Oups ! Il n'y a rien ici</p>
                <Button 
                    as={Link}
                    to="/"
                    text="Revenir à l'accueil"
                />
            </div>
        </section>
    )
}

export default Error