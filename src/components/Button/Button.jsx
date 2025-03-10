import "./button.css"

const Button = ({ onClick, text, as: Component = 'button', type = 'button', ...rest }) => {

    return (
        <Component
            onClick={onClick}
            className="button-container"
            type={type}
            {...rest}
        >
            <span className="mask-text" >{text}</span>
            <span className="lh-btn btn-animation">{text}</span>
        </Component>
    );
};

export default Button