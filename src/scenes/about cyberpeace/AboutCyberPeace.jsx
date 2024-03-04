import React from 'react';
import './AboutCyberPeace.css';
import { motion } from 'framer-motion';
import { CyberPeaceEarth, CyberPeaceAim, CPFLogo } from '../../assets/photos';
import {
  NitiAyog,
  EndViolence,
  GCN,
  ICANN,
  StalkWare,
  TaskForce
} from './partners logos'

const AboutCyberPeace = () => {

  const bannerImages = [
    {
      title: 'niti-aayog',
      src: NitiAyog
    },
    {
      title: 'global-compact-network-india',
      src: GCN
    },
    {
      title: 'icann-at-large',
      src: ICANN
    },
    {
      title: 'ransomware-task-force',
      src: TaskForce
    },
    {
      title: 'coalition-against-stalkware',
      src: StalkWare
    },
    {
      title: 'end-violence-against-children',
      src: EndViolence
    }
  ]

  return (
    <div className='cyberpeace'>
        <div className='cyberpeace-hero'>
          <motion.div
            className='cyberpeace-hero-content'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>Who We Are</h1>
            <p>
              CyberPeace Foundation (CPF) is the world's first non-profit civil society organization 
              and think tank of cyber and policy experts with the vision of pioneering CyberPeace 
              initiatives to build collective resilience against cybercrimes & global threats of 
              cyber warfare.
              <br /><br />
              CyberPeace Foundation is involved in Policy Advocacy, Research and Training related
              to all aspects of CyberPeace and CyberSecurity. Key areas of CyberPeace Foundation
              work are in Technology Governance, Policy Review and Advocacy, Capacity and Capability
              creation and building through partnerships with various government organizations,
              academic institutions and civil society entities.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={CyberPeaceEarth} alt='cyberpeace-earth' />
          </motion.div>
        </div>

        <div className='cyberpeace-aim'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
              }  
            }}
            viewport={{ once: true, amount: 0.8 }}
          >
            <img src={CyberPeaceAim} alt="cyberpeace-aim-mission" />
          </motion.div>

          <motion.div 
            className='cyberpeace-aim-content'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
              }  
            }}
            viewport={{ once: true, amount: 0.8 }}
          >
            <h2>Building a Safer Cyberspace for All</h2>
            <p>
              CyberPeace Foundation is on a mission to promote "Technology for Good" beyond borders as a pioneer 
              in CyberPeace advocacy.
              <br /><br /> 
              CPF has been working tirelessly to make CyberSpace more resilient and 
              peaceful for all of its users, as well as to support and raise awareness of CyberSecurity and 
              Online Safety, ensuring Internet Governance for caregivers, women, children, and others.
              <br /><br /> 
              Through the initiatives undertaken by CyberPeace Foundation in these verticals have impacted 
              200 Million netizens across 130 countries.
            </p>
          </motion.div>
        </div>

        <div className='cyberpeace-partners'>
          <h2>CyberPeace Community Partners</h2>
          <div className='banner-container'>
            <div className='banner'>
              {bannerImages.map((image, index) => (
                <img src={image.src} alt={image.title} key={index}/>
              ))}
              {bannerImages.map((image, index) => (
                <img src={image.src} alt={image.title} key={index}/>
              ))}
            </div>
          </div>
        </div>


        <div className='cyberpeace-more'>
          <div>
            <img src={CPFLogo} alt="CPF" />
          </div>
          <a href="https://www.cyberpeace.org/" target='_blank' rel="noreferrer">
            Read More
          </a>
        </div>
    </div>
  )
}

export default AboutCyberPeace;