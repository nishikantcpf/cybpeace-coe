import React from 'react';
import { motion } from 'framer-motion';
import { CounsellingHero } from '../../assets/icons';
import "./IPCC.css";

const IPCC = () => {
  return (
    <div className='ipcc'>
        <motion.div
            className='ipcc-content'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1>
                Internship Program, <br />Career Counselling
            </h1>
            <p>
                Internship program is a crucial component of CyberPeace Center of Excellence (CCoE) and seeks 
                to identify young ignited minds to work in Research and Development (R&D). 
                The internship program provides requisite exposure to real world challenges and also 
                involves career counseling for the future. There are good options to research after 
                undergraduate levels and this program provides the requisite content to foster the 
                culture of research driven academic environment. Students will be benefited with the 
                Internship completion certificates.
            </p>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <img src={CounsellingHero} alt="internship-counselling" />
        </motion.div>
    </div>
  )
}

export default IPCC;