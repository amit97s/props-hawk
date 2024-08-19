import React, { useState } from 'react';

function ContactForm() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [mail, setMail] = useState('');
    const [query, setQuery] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let formIsValid = true;
        let errors = {};

        // Name validation
        if (!name.trim()) {
            formIsValid = false;
            errors["name"] = "Please enter your name.";
        }

        // Email validation
        if (!mail) {
            formIsValid = false;
            errors["mail"] = "Please enter your email.";
        } else if (!/\S+@\S+\.\S+/.test(mail)) {
            formIsValid = false;
            errors["mail"] = "Please enter a valid email address.";
        }

        // Phone validation
        if (!phone) {
            formIsValid = false;
            errors["phone"] = "Please enter your phone number.";
        } else if (!/^\d{10}$/.test(phone)) {
            formIsValid = false;
            errors["phone"] = "Please enter a valid 10-digit phone number.";
        }

        // Subject validation
        if (!subject.trim()) {
            formIsValid = false;
            errors["subject"] = "Please enter a subject.";
        }

        // Message validation
        if (!query.trim()) {
            formIsValid = false;
            errors["query"] = "Please enter your message.";
        }

        setErrors(errors);
        return formIsValid;
    };

    function submitData(e) {
        e.preventDefault();
        if (validateForm()) {
            console.log(name, mail, phone, subject, query);
            // Reset form after submission
            setName('');
            setMail('');
            setPhone('');
            setSubject('');
            setQuery('');
            setErrors({});
        } else {
            console.log("Form has errors.");
        }
    }

    return (
        <div className="flex items-center justify-center bg-gray-200 pb-20">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full">
                {/* Heading */}
                <h1 className="text-3xl font-semibold mb-6 text-gray-800 text-center">
                    Free to Ask Your Query
                </h1>
                
                {/* Form */}
                <form className="space-y-6" onSubmit={submitData}>
                    {/* Name and Email Fields */}
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1">
                            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-blue-500`} 
                                placeholder="John Doe" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>
                        <div className="flex-1">
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                className={`w-full px-4 py-2 border ${errors.mail ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-blue-500`} 
                                placeholder="john.doe@example.com" 
                                value={mail}
                                onChange={(e) => setMail(e.target.value)}
                            />
                            {errors.mail && <p className="text-red-500 text-sm">{errors.mail}</p>}
                        </div>
                    </div>

                    {/* Number and Subject Fields */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <label htmlFor="number" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                            <input 
                                type="tel" 
                                id="number" 
                                name="number" 
                                className={`w-full px-4 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-blue-500`} 
                                placeholder="+123 456 7890" 
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                        </div>
                        <div className="flex-1">
                            <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                            <input 
                                type="text" 
                                id="subject" 
                                name="subject" 
                                className={`w-full px-4 py-2 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-blue-500`} 
                                placeholder="Subject of your message" 
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            />
                            {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
                        </div>
                    </div>

                    {/* Message Textarea */}
                    <div>
                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            rows="4" 
                            className={`w-full px-4 py-2 border ${errors.query ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-blue-500`} 
                            placeholder="Your message here..." 
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        ></textarea>
                        {errors.query && <p className="text-red-500 text-sm">{errors.query}</p>}
                    </div>

                    {/* Submit Button */}
                    <button 
                        type="submit" 
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
