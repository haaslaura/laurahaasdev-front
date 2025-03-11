import "./button.css"
import { useEffect, useState } from "react";


/**
 * Animated button with CSS mask effect
 *
 * @param {Object} props - Propriétés du bouton.
 * @param {Function} props.onClick - Function called when the button is clicked
 * @param {string} props.text - Text displayed inside the button
 * @param {keyof JSX.IntrinsicElements} [props.as='button'] - HTML element used for the button (ex: 'button', 'a', 'div').
 * @param {string} [props.type='button'] - Button type (useful if `as="button"`)
 * @param {Object} [props.rest] - Other properties passed to the component
 *
 * @returns {JSX.Element} - Animated button component
 */
const Button = ({ onClick, text, as: Component = 'button', type = 'button', ...rest }) => {

    const [isHovered, setIsHovered] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
       
    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
    }, []);

    const handleMouseLeave = () => {
        setTimeout(() => setIsHovered(false), 700);
    };

    return (
        <Component
            onClick={onClick}
            className="button-container"
            type={type}
            {...rest}            
        >
            <span className="mask-text" >{text}</span>
            <span
                className={`
                    lh-btn
                    ${isHovered ? "hovered" : ""}
                    ${isMounted ? "mounted" : ""}
                `}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
            >
                {text}
            </span>
        </Component>
    );
};

export default Button