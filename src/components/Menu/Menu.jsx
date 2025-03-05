import "./menu.css";
import { useEffect, useRef, useState } from "react";


const Menu = () => {
    
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const burgerButtonRef = useRef(null);
        
    const toogleMenu = () => {
        if (menuOpen === false) {
            setMenuOpen(true);
        } else {
            setMenuOpen(false);
        }
    }
    
    // Function to close the menu when clicking outside the menu
    const handleOutsideClick = (e) => {
        if (e.target.classList.contains("header__menu-overlay")) {
            setMenuOpen(false);
        }
    }
    
    // Function to close the menu when press Escape
    const handleKeyDown = (e) => {
        if (e.key === "Escape") {
            setMenuOpen(false);
        }
    }
    
    useEffect(() => {
        if (menuOpen) {

            // EVENEMENTS
            document.addEventListener("click", handleOutsideClick);
            document.addEventListener("keydown", handleKeyDown);

            // FOCUS 
            const focusableElements = menuRef.current.querySelectorAll(
                "a, button, input, select, textarea, [tabindex]:not([tabindex='-1'])"
            );
    
            if (focusableElements.length > 0) {
                focusableElements[0].focus();
            }
    
            document.addEventListener("keydown", trapFocus); // Piège le focus

        } else {

            // EVENEMENTS
            document.removeEventListener("click", handleOutsideClick);
            document.removeEventListener("keydown", handleKeyDown);

            // FOCUS
            // Rendre le focus au bouton menu
            // if (burgerButtonRef.current) {
            //     burgerButtonRef.current.focus();
            // }
        }
        
        return () => {
            // EVENEMENTS
            document.removeEventListener("click", handleOutsideClick);
            document.removeEventListener("keydown", handleKeyDown);
            // FOCUS
            document.removeEventListener("keydown", trapFocus);
        };
    }, [menuOpen]);

    // Fonction pour empêcher la sortie du focus du menu
    const trapFocus = (e) => {
        const focusableElements = menuRef.current.querySelectorAll(
            "a, button, input, select, textarea, [tabindex]:not([tabindex='-1'])"
        );

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.key === "Tab") {
            if (e.shiftKey && document.activeElement === firstElement) {
                lastElement.focus();
                e.preventDefault();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                firstElement.focus();
                e.preventDefault();
            }
        }
    }

    
    return (
        <div className="header__menu">
            <nav>
                <button
                    ref={burgerButtonRef}
                    className="header__menu-btn"
                    id="burger__menubutton"
                    aria-haspopup="true"
                    aria-controls="main-menu"
                    aria-expanded={menuOpen ? "true" : "false"}
                    onClick={toogleMenu}
                >
                    <span className="menu-btn__burger-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>
                
                <div
                    ref={menuRef}
                    className={`header__menu-overlay ${menuOpen ? "visible-menu" : "invisible-menu"}`}
                    id="main-menu"
                    aria-labelledby="burger__menubutton" 
                >
                    <button
                        aria-label="Fermer le menu"
                        className="header__menu-btn-close"
                        onClick={toogleMenu}
                    >
                    </button>
                    <menu
                        className="header__menu-content"
                        role="menu"
                    >
                        <li role="none">
                            <a role="menuitem" id="home" className="header__menu-item" href="/">
                                <i className="fa-solid fa-house"></i> Home
                            </a>
                        </li>
                        <li role="none">
                            <a role="menuitem" id="skills" className="header__menu-item" href="/competences">
                                <i className="fa-solid fa-gear"></i> Compétences
                            </a>
                        </li>
                        <li role="none">
                            <a role="menuitem" id="educational-bg" className="header__menu-item" href="/formations">
                                <i className="fa-solid fa-graduation-cap"></i> Formations
                            </a>
                        </li>
                        <li role="none">
                            <a role="menuitem" id="contact" className="header__menu-item" href="/contact">
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