import "./button.css"

const Button = ({ onClick, text, as: Component = 'button', ...rest }) => {

    return (
        <Component onClick={onClick} className="button-container" {...rest}>
            <span class="mask-text" >{text}</span>
            <button className="lh-btn btn-animation" name="Hover">{text}</button>
        </Component>
    );
};

export default Button