import React from 'react';
import './ResearchLab.css'
import{ ResearchLabPhoto } from '../../assets/photos';
import { motion } from 'framer-motion';

const ResearchLab = () => {
  return (
    <div className='research-lab'>
        <div className='research-lab-hero'>
          <motion.div
            className='research-lab-content'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>Research Lab</h1>
            <p>
              Research Laboratories are the backbone of any institution that thrives to bring technology to the
              cyber enthusiast. Practical exposure brings real value into imparting strong practical exposure.
              This Research Lab aims to bring world class cyber infrastructure to the cyber enthusiast,
              research communities, faculties and armed forces concerned as well as help academia hone
              their skills. Apart from regular experiments, the lab will conduct additional cybersecurity 
              related research to train the cyber enthusiast and armed personnel in the cutting edge technologies.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={ResearchLabPhoto} alt="research-lab" />
          </motion.div>
        </div>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            maxWidth: '100%',
            marginTop: '2rem'
          }}
        >
          Research and analysis on Cybersecurity aspects such as but not limited to :- <br /><br />
          1. Threat Intelligence Sensors Network <br />
          2. Malware analysis test bed <br />
          3. Botnet <br />
          4. DNS/DNSSEC testbed <br /> 
          5. SCADA/lCS security <br />
          6. 0pen Source Intelligence (OSINT) <br />
          7. Digital Forensic Research <br />
          8. Deep & Dark web Research <br />
          9. CyberPeace Range for simulation exercise <br />
          10. Capture the Flag (CTF) challenge development
        </motion.p>
    </div>
  )
}

export default ResearchLab;