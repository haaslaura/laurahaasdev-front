import { useHover } from "@uidotdev/usehooks";
import "./button.css"
import { useEffect } from "react";

const Button = ({ onClick, text, as: Component = 'button', type = 'button', ...rest }) => {

    const [ref, hovering] = useHover()
    // console.log(hovering);

    // function MouseOver(event) {
    //     event.target.style.background = 'red';
    //   }
    //   function MouseOut(event){
    //     event.target.style.background="";
    //   }
    
    function mouseOver(e) {
        console.log("survolé");
        e.target.classList.add("btn-animation"); // ajouter la classe
    }

    useEffect(() => {

        // Ici le code, l'"effet" qui sera exécuté
        
        return () => {
            // l'effet de clean up (nettoyage) ==> UNMOUNT
            // retirer la classe
        }
      }, [mouseOver]); //Permet de provoquer la mise à jour de cet effet si besoin

    return (
        <Component
            onClick={onClick}
            className="button-container"
            type={type}
            {...rest}

            onMouseOver={mouseOver}
            
        >
            <span className="mask-text" >{text}</span>
            {/* <span className="lh-btn btn-animation" ref={ref}>{text}</span> */}
            <span className="lh-btn" ref={ref}>{text}</span>
        </Component>
    );
};

export default Button