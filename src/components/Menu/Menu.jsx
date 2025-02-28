import "./menu.css";
import { useState } from "react";


const Menu = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [classMenuVisible, setClassMenuVisible] = useState("invisible-menu");
    const [ariaExpanded, setAriaExpanded] = useState(false);

    /**
     * Reste à faire :
     * - l'animation
     * - gestion du focus
     */

    const toogleMenu = () => {
        console.log("pouet");
        if (menuOpen === false) {
            setMenuOpen(true);
            setClassMenuVisible("visible-menu");
            setAriaExpanded(true);
        } else {
            setMenuOpen(false);
            setClassMenuVisible("invisible-menu");
            setAriaExpanded(false);
        }
    }

    return (
        <div className="header__menu" tabIndex="-1">
            <nav>
                <a
                    className="header__menu-btn"
                    id="burger__menubutton"
                    role="button"

                    aria-haspopup="true"
                    aria-controls="main-menu"
                    aria-expanded={ariaExpanded}
                    tabIndex="0"

                    onClick={toogleMenu}
                >
                    <span className="menu-btn__burger-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </a>

                <div
                    className={`header__menu-overlay ${classMenuVisible}`}
                    id="main-menu"
                    aria-labelledby="burger__menubutton"
                >
                    
                    <button
                        aria-label="Fermer le menu"
                        className="header__menu-btn-close"
                        role="button"
                        onClick={toogleMenu}
                    >
                    </button>
                    
                    <menu className="header__menu-content">
                        <li role="none">
                            <a role="menuitem" id="home" className="header__menu-item" href="/">
                                <i className="fa-solid fa-house"></i> Home
                            </a>
                        </li>
                        <li role="none">
                            <a role="menuitem" id="skills" className="header__menu-item" href="/">
                                <i className="fa-solid fa-gear"></i> Compétences
                            </a>
                        </li>
                        <li role="none">
                            <a role="menuitem" id="educational-bg" className="header__menu-item" href="/">
                                <i className="fa-solid fa-graduation-cap"></i> Formations
                            </a>
                        </li>
                        <li role="none">
                            <a role="menuitem" id="contact" className="header__menu-item" href="/">
                                <i className="fa-solid fa-comment"></i> Contact
                            </a>
                        </li>
                    </menu>
                </div>
            </nav>
        </div>
    )
}

export default Menu