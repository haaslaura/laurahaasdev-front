import "./contactForm.css"
import Button from "../Button/Button"
import { useState } from "react"


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
                <div role="group" aria-labelledby="Nom">
                    <label htmlFor="name">Nom</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Nom*"
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
                <div role="group" aria-labelledby="Email">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email*"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        aria-required="true"
                        minLength="2"
                        maxLength="50"
                    />
                    {
                        errors.email &&
                            <span className="error" aria-live="assertive">
                                <i className="fa-solid fa-circle-exclamation"></i> {errors.email}
                            </span>
                    }
                </div>
            </div>
            <div role="group" aria-labelledby="Téléphone">
                <label htmlFor="phone">Téléphone</label>
                <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Téléphone*"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    aria-required="true"
                    minLength="2"
                    maxLength="50"
                />
                {
                    errors.phone &&
                        <span className="error" aria-live="assertive">
                            <i className="fa-solid fa-circle-exclamation"></i> {errors.phone}
                        </span>
                }
            </div>
            <div role="group" aria-labelledby="Message">
                <label htmlFor="message">Message</label>
                <textarea
                    name="message"
                    id="message"
                    placeholder="Votre message*"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    aria-required="true"
                    minLength="2"
                ></textarea>
                {
                    errors.message &&
                        <span className="error" aria-live="assertive">
                            <i className="fa-solid fa-circle-exclamation"></i> {errors.message}
                        </span>
                }
            </div>
            <Button
                text="Envoyer"
                type="submit"
            />
        </form>
    );
};

export default ContactForm