import "./formField.css"


/**
 * A reusable form field component that supports dynamic input types and validation
 *
 * @param {Object} props - Component props
 * @param {Object} props.formData - The current state of the form data
 * @param {Function} props.setFormData - Function to update form data
 * @param {Object} props.errors - The current validation errors
 * @param {Function} props.setErrors - Function to update validation errors
 * @param {string} [props.type=null] - The input type (e.g., "text", "email", "password")
 * @param {string} props.labelContent - The label text for the field
 * @param {string} props.elementName - The name, id and htmlFor of the input field
 * @param {string} [props.placeholder] - Placeholder text for the input field
 * @param {number} [props.minLength] - Minimum character length for the input
 * @param {number} [props.maxLength] - Maximum character length for the input
 * @param {boolean} [props.required=false] - Whether the field is required
 * @param {React.ElementType} [props.as="input"] - The HTML element type (e.g., "input", "textarea")
 * @param {Object} [props.rest] - Additional props passed to the input element
 *
 * @returns {JSX.Element} The form field component
 */
const FormField = ({ 
    formData,
    setFormData,
    errors,
    setErrors,
    type = null,
    labelContent,
    elementName,
    placeholder,
    minLength,
    maxLength,
    required = false,
    as: Component = "input",
    ...rest

 }) => {

    const handleBlur = (e) => {
        const { name, value } = e.target;
        if (!value.trim()) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: "Ce champ est obligatoire",
            }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
        }
    };
    
    const handleChange = (e) => {        
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" })); // Clears the error when the user types
    };

    return (
        <div role="group" aria-labelledby={labelContent}>
            <label htmlFor={elementName}>{labelContent}</label>
            <Component
                type={type}
                name={elementName}
                id={elementName}
                placeholder={placeholder}
                value={formData[elementName] || ""}
                onChange={handleChange}
                onBlur={handleBlur}
                required={required}
                aria-required={required}
                minLength={minLength}
                maxLength={maxLength}
                {...rest}
            />
            {
                errors[elementName] &&
                    <span className="error" aria-live="assertive">
                        <i className="fa-solid fa-circle-exclamation"></i> {errors[elementName]}
                    </span>
            }
        </div>
    );
};

export default FormField