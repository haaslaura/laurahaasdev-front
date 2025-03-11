import "./contactForm.css"
import { useState } from "react"
import Button from "../Button/Button"
import FormField from "../FormField/FormField";


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
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });  
    const [errors, setErrors] = useState({});

    const validators = {
        name: (value) => (value.trim() ? "" : "Ce champ est obligatoire"),
        email: (value) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Veuillez entrer une adresse email valide."),
        phone: (value) => (value.trim() ? "" : "Ce champ est obligatoire"),
        message: (value) => (value.trim() ? "" : "Ce champ est obligatoire"),
    };

    const sanitizeInput = (value) => value.trim().replace(/[=<>\[\]]/g, "");

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};
        
        Object.keys(formData).forEach((field) => {
            const error = validators[field](formData[field]);
            if (error) newErrors[field] = error;
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        console.log("Données soumises :", Object.fromEntries(
            Object.entries(formData).map(([key, value]) => [key, sanitizeInput(value)])
        ));

        setFormData({ name: "", email: "", phone: "", message: "" });
        setErrors({});
    };

    const fields = [
        { type: "text", label: "Nom", name: "name", placeholder: "Nom*", required: true },
        { type: "text", label: "Email", name: "email", placeholder: "Email*", required: true },
        { type: "text", label: "Téléphone", name: "phone", placeholder: "Téléphone*", required: true },
        { label: "Message", name: "message", placeholder: "Message*", required: true, as: "textarea", maxLength: 400 },
    ];

    
    return (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
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