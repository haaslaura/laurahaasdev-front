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
                <div>
                    <label htmlFor="name">Nom</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-describedby="name-error"
                    />
                    {errors.name && <span className="error" id="name-error">{errors.name}</span>}
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-describedby="email-error"
                    />
                    {errors.email && <span className="error" id="email-error">{errors.email}</span>}
                </div>
            </div>
            <div>
                <label>Téléphone</label>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-describedby="phone-error"
                />
                {errors.phone && <span className="error" id="phone-error">{errors.phone}</span>}
            </div>
            <div>
                <label>Message</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-describedby="message-error"
                ></textarea>
                {errors.message && <span className="error" id="message-error">{errors.message}</span>}
            </div>
            <button type="submit">Envoyer</button>
        </form>
    );
};

export default ContactForm