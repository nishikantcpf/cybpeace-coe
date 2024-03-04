import React, { useState } from 'react';
import './COERegister.css';
import '../contact/Contact.css'
import { motion } from 'framer-motion';
import { RegisterCOE } from '../../assets/photos';

const COERegister = () => {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [institute, setInstitute] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();

        const recipientMail = "secretariat@cyberpeace.net";
        const subject = "Request For Registration For Center of Excellence";
        const mailBody = `Name: ${name}\nEmail: ${mail}\nInstitute: ${institute}\nMessage: ${institute} would like to register for CyberPeace Center of Excellence.`;

        const mailToLink = `mailto:${recipientMail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailBody)}`;
        window.location.href = mailToLink;
    }

  return (
    <div className='register'>
        <h1>Register For COE</h1>
        <motion.div 
            className='input-form'
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <form onSubmit={handleRegister}>
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
                <input
                    className='field-input'
                    type="text"
                    value={institute}
                    placeholder='Institute Name'
                    onChange={(e) => setInstitute(e.target.value)}
                />
                <button type='submit'>Send Message</button>
            </form>
        </motion.div>
        <div className='register-img' >
            <img src={RegisterCOE} alt="register-now" />
        </div>
    </div>
  )
}

export default COERegister;