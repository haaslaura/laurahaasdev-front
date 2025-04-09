import "./contactForm.css"
import { useState } from "react"
import Button from "../Button/Button"
import FormField from "../FormField/FormField";


/**
 * Validation rules for form fields
 */
const validators = {
    name: (value) => (value.trim() ? "" : "Ce champ est obligatoire"),
    email: (value) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Veuillez entrer une adresse email valide."),
    phone: (value) => (value.trim() ? "" : "Ce champ est obligatoire"),
    message: (value) => (value.trim() ? "" : "Ce champ est obligatoire"),
};

/**
 * Initial state for form fields
 */
const initialFormState = {
    name: "",
    email: "",
    phone: "",
    message: "",
};

/**
 * Sanitize user input to prevent code injection
 */
const sanitizeInput = (value) => value.trim().replace(/[=<>\[\]]/g, "");

const sanitizeFormData = (data) => {
    const sanitized = {};
    for (const key in data) {
        sanitized[key] = sanitizeInput(data[key]);
    }
    return sanitized;
};


/**
 * ContactForm Component
 *
 * A contact form that allows users to input their name, email, phone number, and a message.
 * It includes validation and error handling for required fields.
 *
 * @component
 * @returns {JSX.Element} The rendered contact form component
 */
const ContactForm = () => {
    const [formData, setFormData] = useState(initialFormState);  
    const [errors, setErrors] = useState({});
    const [alert, setAlert] = useState("");
    
    const validateForm = () => {
        const newErrors = {};
        for (const field in formData) {
            const error = validators[field](formData[field]);
            if (error) newErrors[field] = error;
        }
        return newErrors;
    };

    const resetForm = () => {
        setFormData(initialFormState);
        setErrors({});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let newErrors = validateForm();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const sanitizedData = sanitizeFormData(formData);

        // sending data form
        try {
            // const response = await fetch("http://localhost:5000/send", {
            const response = await fetch("https://api.mailer/laura-haas.dev/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(sanitizedData),
            });
    
            const data = await response.json();
            
            if (data.success) {
                setAlert("Votre message a bien été envoyé !");
                resetForm();

            } else {
                setAlert("Échec de l'envoi du message. Réessayez plus tard.");
            }

        } catch (error) {
            console.error(error);
        }
    };

    const fields = [
        { type: "text", label: "Nom", name: "name", placeholder: "Nom*", required: true },
        { type: "text", label: "Email", name: "email", placeholder: "Email*", required: true },
        { type: "text", label: "Téléphone", name: "phone", placeholder: "Téléphone*", required: true },
        { label: "Message", name: "message", placeholder: "Message*", required: true, as: "textarea", maxLength: 400 },
    ];

    const isSuccess = alert && alert.length <= 33;
    
    return (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>

            {alert &&
                <p
                    role="alert"
                    className={`alert ${isSuccess ? "sending-success" : "sending-error"}`}
                >
                    {alert}
                </p>
            }
                        
            <p id="contact-form__info">*Les champs marqués d'un astérisque sont obligatoires</p>
            <div>
                {fields.map(({ name, ...rest }) => (
                    <FormField
                        key={name}
                        elementName={name}
                        formData={formData}
                        setFormData={setFormData}
                        errors={errors}
                        setErrors={setErrors}
                        {...rest}
                    />
                ))}
            </div>
            <Button text="Envoyer" type="submit" />
        </form>
    );
};

export default ContactForm