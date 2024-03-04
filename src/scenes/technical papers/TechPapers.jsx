import React from 'react';
import { motion } from 'framer-motion';
import { HeroPapers } from '../../assets/icons';
import './TechPapers.css';

const TechPapers = () => {
  return (
    <div className='papers'>
        <motion.div 
            className='papers-content'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1>Technical Papers</h1>
            <p>
                One of the major areas of improvement in building research and innovation 
                among the youth, is to express their ideas and accomplishments in 
                different platforms and build the skills to write technical papers. 
                This exposure will nurture many ideas and also help in building the 
                reputation of the institution. This component will help grow technical 
                paper writing skills and also collaborate with and build platforms where 
                the students and faculties can showcase their ideas and get peer reviews. 
                One such initiative is 'CyberPeace Journal' and the students, faculties and 
                other associates are encouraged to send their entries for its different additions.
            </p>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <img src={HeroPapers} alt="technical-papers" />
        </motion.div>
    </div>
  )
}

export default TechPapers;