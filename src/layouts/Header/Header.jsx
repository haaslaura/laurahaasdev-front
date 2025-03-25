import { useEffect, useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link';

import BurgerMenu from '../../components/BurgerMenu/BurgerMenu'

import logo from '../../assets/logo-site-laura-haas.svg'
import './header.css'


const Header = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
    
    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768)
        }
        window.addEventListener("resize", handleResize);
        
        // Cleaning the event listener
        return () => {
          window.removeEventListener("resize", handleResize)
        }
      }, [setIsMobile])


    return (
        <header>
            {isMobile ?
                <>
                    <Link to="/#presentation">
                        <img
                            role='link'
                            src={logo}
                            alt="Origami représentant une grue"
                            title="Laura Haas, développeuse"
                        />
                    </Link>
                    <BurgerMenu></BurgerMenu>
                </>
            :
                <nav id='desktop-nav'>
                    <ul>
                        <li><Link to="/#skills-section">Compétences</Link></li>
                        <li><Link to="/#educbg-section">Formations</Link></li>
                        <li id='home-link'>
                            <Link to="/#presentation">
                                <img
                                    role='link'
                                    src={logo}
                                    alt="Origami bleu et violet représentant une grue"
                                    title="Laura Haas, développeuse"
                                />
                            </Link>
                            <div id="home-link__title">
                                <p>Laura Haas</p>
                                <p>Développeuse Front-end</p>
                            </div>
                        </li>
                        <li><Link to="/">Portfolio</Link></li>
                        <li><Link to="/#contact-section">Contact <i className="fa-regular fa-envelope"></i></Link></li>
                    </ul>
                </nav>
            }
        </header>
    )
}

export default Header