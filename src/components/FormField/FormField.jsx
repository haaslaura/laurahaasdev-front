import "./formField.css"


const FormField = ({ 
    labelContent,
    htmlFor,
    placeholder,
    value,
    onChange,
    onBlur

 }) => {


    return (
        <div role="group" aria-labelledby="Nom">
                    <label htmlFor={htmlFor}>{labelContent}</label>
                    <input
                        type="text"
                        name={htmlFor}
                        id={htmlFor}
                        placeholder={placeholder}
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        aria-required="true"
                        minLength="2"
                        maxLength="50"
                    />
                    {
                        errors.name &&
                            <span className="error" aria-live="assertive">
                                <i className="fa-solid fa-circle-exclamation"></i> {errors.name}
                            </span>
                    }
                </div>
    );
};

export default FormField