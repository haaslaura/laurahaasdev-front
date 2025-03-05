import "./button.css"

// const Button = ({ onClick, children, as: Component = 'button', ...rest }) => {
const Button = ({ onClick, text, as: Component = 'button', ...rest }) => {

    return (
        // <Component onClick={onClick} className="lh-btn" {...rest}>
        //     {children}
        // </Component>

        <Component onClick={onClick} className="button-container-2 test-animation lh-btn" {...rest}>
            <span class="mas">{text}</span>
            <button type="button" name="Hover">{text}</button>
        </Component>
    );
};

export default Button

/*
<div class="button-container-2">
    <span class="mas">MASK2</span>
    <button type="button" name="Hover">MASK2</button>
</div>
*/