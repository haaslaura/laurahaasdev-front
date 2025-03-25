import './footer.css'
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {

    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth() + 1;

    return (
        <footer>
            <p>© {currentYear}/{currentMonth} | Réalisé par Laura Haas, tous droits réservés.</p>
            <Link to="/mentions-legales/#legalinf-section" aria-label='Aller aux mentions légales'>Mentions légales</Link>
            <Link to="#presentation">Revenir en haut de la page <i className="fa-solid fa-arrow-up"></i></Link>
        </footer>
    )
}

export default Footer