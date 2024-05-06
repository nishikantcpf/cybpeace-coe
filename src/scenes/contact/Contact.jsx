import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const recipientMail = "secretariat@cyberpeace.net";
        const subject = "General Inquiry";
        const mailBody = `Name: ${name}\nEmail: ${mail}\nMessage: ${body}`;

        const mailToLink = `mailto:${recipientMail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailBody)}`;
        window.location.href = mailToLink;
    }

  return (
    <div className='contact-us'>
        <div style={{height:'40vh', display:'flex', justifyContent:'center', alignItems: 'center'}}>
        <h1>GET IN TOUCH WITH US</h1>
        </div>
        <div className='contact-data'>
            <motion.div 
                className='contact-data-item'
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2>VISIT US AT</h2>
                <p>
                    Secretariat: B-55, Harmu Housing Colony, Birsa Munda Rajpath,<br />
                    Ranchi, Jharkhand, 834002
                </p>
            </motion.div>
            <motion.div
                className='contact-data-item'
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2>OR MESSAGE US</h2>
                <p>
                    Telephone: +91 0123456789
                    <br />
                    Mail: secretariat@cyberpeace.net
                </p>
            </motion.div>
        </div>
        <motion.div 
            className='input-form'
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <form onSubmit={handleSubmit}>
                <input
                    className='field-input'
                    type="text"
                    value={name}
                    placeholder='Name'
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className='field-input'
                    type="email"
                    value={mail}
                    placeholder='Email Address'
                    onChange={(e) => setMail(e.target.value)}
                />
                <input
                    className='field-input'
                    type="text"
                    value={phone}
                    placeholder='Phone Number'
                    onChange={(e) => setPhone(e.target.value)}
                />
                <textarea
                    className='field-input'
                    type="text"
                    value={body}
                    placeholder='Message'
                    onChange={(e) => setBody(e.target.value)}
                />
                <button type='submit'>Submit</button>
            </form>
        </motion.div>
    </div>
  )
}

export default Contact;