import "./burgerMenu.css";
import { useEffect, useRef, useState } from "react";


/**
 * Menu component - Displays a drop-down menu that can be accessed and navigated using the keyboard.
 *
 * Features :
 * - Open/close the menu using a button.
 * - Closing the menu by clicking outside or pressing "Escape".
 * - Traps the focus in the menu when it is open.
 * - Restore focus on the menu button when closing.
 *
 * @component
 * @returns {JSX.Element} The Menu component.
 */
const Menu = () => {
    
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const burgerButtonRef = useRef(null);
    const prevMenuOpenRef = useRef(null);

    const focusableElements = menuRef.current?.querySelectorAll(
        "a, button, input, select, textarea, [tabindex]:not([tabindex='-1'])"
    );
        
    /**
     * Toggles the menu open state
     */
    const toggleMenu = () => {
        if (menuOpen === false) {
            setMenuOpen(true);
        } else {
            setMenuOpen(false);
        }
    }
    
    /**
     * Closes the menu when clicked outside
     * @param {MouseEvent} e - Click event
     */
    const handleOutsideClick = (e) => {
        if (e.target.classList.contains("header__menu-overlay")) {
            setMenuOpen(false);
        }
    }
    
    /**
     * Closes the menu when the user presses the "Escape" key
     * @param {KeyboardEvent} e - Keyboard event
     */
    const handleKeyDown = (e) => {
        if (e.key === "Escape") {
            setMenuOpen(false);
        }
    }

    /**
     * Prevents the menu focus from exiting when the menu is open
     * @param {KeyboardEvent} e - Keyboard event
     */
    const trapFocus = (e) => {
        if (!focusableElements || focusableElements.length === 0) return;

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
    
    /**
     * Adds or deletes event listeners depending on the state of the menu.
     */
    useEffect(() => {
        if (menuOpen) {

            document.addEventListener("click", handleOutsideClick);
            document.addEventListener("keydown", handleKeyDown);
            document.addEventListener("keydown", trapFocus);

            focusableElements?.[0]?.focus();

        } else {
            if (prevMenuOpenRef.current) {
                burgerButtonRef.current?.focus();
            }
        }
        prevMenuOpenRef.current = menuOpen;
        
        return () => {
            document.removeEventListener("click", handleOutsideClick);
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("keydown", trapFocus);
        };
    }, [menuOpen]);


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
                    onClick={toggleMenu}
                >
                    <span className="menu-btn__burger-icon">
                        <span className="hidden-text">Ouvrir le menu</span>
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
                    {/* MENU CONTENT */}
                    <button className="header__menu-btn-close" onClick={toggleMenu} aria-label="Fermer le menu"><span className="hidden-text">Fermer</span></button>
                    <menu className="header__menu-content" role="menu">
                        <li role="none">
                            <a role="menuitem" id="home" className="header__menu-item" href="/">
                                <i className="fa-solid fa-house"></i> Présentation
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
                        <li role="none">
                            <a role="menuitem" id="legal-info" className="header__menu-item" href="/informations-legales">
                            <i className="fa-solid fa-circle-info"></i> Informations légales
                            </a>
                        </li>
                    </menu>
                </div>
            </nav>
        </div>
    )
}

export default Menu