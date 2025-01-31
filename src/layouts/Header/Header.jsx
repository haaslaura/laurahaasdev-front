import { Link } from 'react-router'
import logo from '../../assets/logo-site-laura-haas.svg'

import './header.css'
import './menu.css'

import { useEffect, useState } from 'react'
import { slide as Menu } from 'react-burger-menu'

// https://www.npmjs.com/package/react-burger-menu

const Header = () => {

    const [opening, setOpening] = useState(false)
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

            <Link to="/">
                <img
                    src={logo}
                    alt="Origami bleu et violet représentant une grue"
                    title="Laura Haas, développeuse"
                />
            </Link>

            {
                !isMobile &&
                    <div>
                        <p>Laura Haas</p>
                        <p>Développeuse JavaScript React</p>
                    </div>
            }
            
            <Menu
                right

            >
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
            </Menu>

        </header>
    )
}

export default Header