import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Button = ({ content, to }) => {

    const navigate = useNavigate();

    const buttonStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'fit-content',
        height: '50px',
        backgroundColor: '#FFFFFF',
        borderRadius: '50px',
        boxSizing: 'border-box',
        boxShadow: '#6a6a6a 2px 4px',
        cursor: 'pointer',
        padding: '10px 20px',
        transition: '0.2s all ease',
        userSelect: 'none'
    }

  return (
    <motion.div
        style={buttonStyles}
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.8}}
        transition={{ease: 'linear', duration: 0.01}}
        onClick={() => navigate(`${to}`)}
    >
        <p className='btn-content'>
            { content }
        </p>
    </motion.div>
  )
}

export default Button;