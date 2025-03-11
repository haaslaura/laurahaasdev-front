import "./contactForm.css"
import Button from "../Button/Button"
import { useState } from "react"
import FormField from "../FormField/FormField";


const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const isValidInput = (value) => {        
        const sanitizedInput = value.trim().replace(/[=<>\[\]]/g, "")
        if (sanitizedInput.length === 0) {
            return "Ce champs est obligatoire"
        } else {
            return ""; // No problem detected
        }
    }

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email) ? "" : "Veuillez entrer une adresse email valide.";
    };

    const sanitizedContent = (content) => {
        let sanitizedContent = content.trim().replace(/[=<>\[\]]/g, "")
        return sanitizedContent
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        let newErrors = {}; // Stores any errors

        // Checking and cleaning fields
        Object.keys(formData).forEach((field) => {
        
            switch (field) {
                case "name":
                    const inputNameError = isValidInput(formData.name);
                    if (inputNameError.length > 0) {
                        newErrors[field] = inputNameError;
                    }
                    break;
        
                case "phone":
                    const inputPhoneError = isValidInput(formData.phone);
                    if (inputPhoneError.length > 0) {
                        newErrors[field] = inputPhoneError;
                    }
                    break;

                case "email":
                    const inputEmailError = isValidEmail(formData.email);
                    if (inputEmailError.length > 0) {
                        newErrors[field] = inputEmailError;
                    }
                    break;

                case "message":
                    const inputMessageError = isValidInput(formData.message);
                    if (inputMessageError.length > 0) {
                        newErrors[field] = inputMessageError;
                    }
                    break;
        
                default:
                    console.log("Champ non reconnu");
            }
            console.log(newErrors);
        });

        // Update errors if necessary
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // If everything is valid, you can submit the form
        console.log("Données soumises :", {
            name: sanitizedContent(formData.name),
            email: sanitizedContent(formData.email),
            phone: sanitizedContent(formData.phone),
            message: sanitizedContent(formData.message)
        });

        // Reset the form after submission
        setFormData({ name: "", email: "", phone: "", message: "" });
        setErrors({ name: "", email: "", phone: "", message: "" });
    };
    
    return (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <p id="contact-form__info">*Les champs marqués d'un astérisque sont obligatoires</p>
            <div>
                <FormField
                    formData={formData}
                    setFormData={setFormData}
                    errors={errors}
                    setErrors={setErrors}
                    type="text"
                    labelContent="Nom"
                    elementName="name" // for the id, name, htmlFor, errors[elementName]...
                    placeholder="Nom*"
                    minLength="2"
                    maxLength="50"
                    required
                />
                <FormField
                    formData={formData}
                    setFormData={setFormData}
                    errors={errors}
                    setErrors={setErrors}
                    type="text"
                    labelContent="Email"
                    elementName="email"
                    placeholder="Email*"
                    minLength="2"
                    maxLength="50"
                    required
                />
                <FormField
                    formData={formData}
                    setFormData={setFormData}
                    errors={errors}
                    setErrors={setErrors}
                    type="text"
                    labelContent="Téléphone"
                    elementName="phone"
                    placeholder="Téléphone*"
                    minLength="2"
                    maxLength="50"
                    required
                />
                <FormField
                    formData={formData}
                    setFormData={setFormData}
                    errors={errors}
                    setErrors={setErrors}
                    labelContent="Message"
                    elementName="message"
                    placeholder="Message*"
                    minLength="2"
                    maxLength="400"
                    as="textarea"
                    required
                />
            </div>
            <Button
                text="Envoyer"
                type="submit"
            />
        </form>
    );
};

export default ContactForm