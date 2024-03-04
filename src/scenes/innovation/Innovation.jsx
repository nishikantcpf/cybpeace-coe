import React from 'react';
import { motion } from 'framer-motion';
import { CyberInnovation } from '../../assets/icons';
import './Innovation.css';

const Innovation = () => {
  return (
    <div className='innovation'>
        <motion.div 
            className='innovation-content'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1>
                Research and Innovation on <br />Cyber Security and Warfare
            </h1>
            <p>
                This component aims at bringing Cybersecurity and Warfare problem statements and research 
                scopes to the academia. The core objective of setting up a Research initiative largely 
                depends on this component where different stakeholders collaborate to solve real life 
                situations and young ignited minds start taking interest in ground breaking research 
                initiatives for real life Cybersecurity risks and threats.
            </p>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <img src={CyberInnovation} alt="research-innovation-cybersecurity" />
        </motion.div>
    </div>
  )
}

export default Innovation;