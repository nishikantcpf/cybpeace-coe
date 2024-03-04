import React from 'react';
import { motion } from 'framer-motion';
import { WorkshopHeroImage } from '../../assets/icons';
import './Workshop.css';

const Workshop = () => {
  return (
    <div className='workshop'>
        <motion.div
            className='workshop-content'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1>Workshops and Conferences</h1>
            <p>
                The seminars and conferences will aid in developing skills in the areas of research 
                and technology related to Cybersecurity and warfare which aims to enhance the young 
                talent's necessary abilities and skills for exploring novel concepts. 
                The workshop will be held in partnership with Business, Government and other 
                organizations and offer a forum for discussion with subject-matter experts.
            </p>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <img src={WorkshopHeroImage} alt="workshop-conferences" />
        </motion.div>
    </div>
  )
}

export default Workshop;