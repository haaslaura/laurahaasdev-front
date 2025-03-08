import "./contactForm.css"
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
                [name]: "Ce champ est obligatoire.",
            }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
        }
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" })); // Efface l'erreur quand l'utilisateur tape
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Formulaire soumis ! (pas de back-end ici)");
    };
    
    return (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div>
                <div role="group" aria-labelledby="Nom">
                    <label htmlFor="name">Nom</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nom"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-describedby="name-error"
                        required
                        aria-required="true"
                    />
                    {errors.name && <span className="error" id="name-error">{errors.name}</span>}
                </div>
                <div role="group" aria-labelledby="Email">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-describedby="email-error"
                        required
                        aria-required="true"
                    />
                    {errors.email && <span className="error" id="email-error">{errors.email}</span>}
                </div>
            </div>
            <div role="group" aria-labelledby="Téléphone">
                <label htmlFor="phone">Téléphone</label>
                <input
                    type="tel"
                    name="phone"
                    placeholder="Téléphone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-describedby="phone-error"
                    required
                    aria-required="true"
                />
                {errors.phone && <span className="error" id="phone-error">{errors.phone}</span>}
            </div>
            <div role="group" aria-labelledby="Message">
                <label htmlFor="message">Message</label>
                <textarea
                    name="message"
                    placeholder="Votre message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-describedby="message-error"
                    required
                    aria-required="true"
                ></textarea>
                {errors.message && <span className="error" id="message-error">{errors.message}</span>}
            </div>
            <button type="submit">Envoyer</button>
        </form>
    );
};

export default ContactForm