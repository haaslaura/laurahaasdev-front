import { Link } from "react-router"
import Button from "../../components/Button/Button"
import "./error.css"

const Error = () => {

    return (
        <section id="error-section">
            <h1>Erreur 404</h1>
            <p>Oups ! Il n'y a rien ici</p>
            <Button 
                as={Link}
                to="/"
                text="Revenir à l'accueil"
            />
        </section>
    )
}

export default Error