import React from 'react';
import './Standards.css';
import { motion } from 'framer-motion';
import { HeroStandards } from '../../assets/icons';

const Standards = () => {
  return (
    <div className='standards'>
        <motion.div 
            className='standards-content'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1>Working on Standards</h1>
            <p>
                India's contribution towards Internet standards is poor and with the 'Digital India' being 
                the next generation India, it's high time our young talent start developing protocols and 
                standards for the next Generation Internet, which the world will use. 
                CyberPeace has partnered with organizations to provide the platform to 
                CyberPeace centers, starting working on standards.
            </p>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <img src={HeroStandards} alt="technical-papers" />
        </motion.div>
    </div>
  )
}

export default Standards;