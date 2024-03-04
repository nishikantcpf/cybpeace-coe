import React from "react";
import "./COE.css";
import { motion } from "framer-motion";
import { CCOEHandShake, RDFramework, COEReach } from "../../assets/photos";

const COE = () => {
  const coeAspects = [
    "State-of-Art Infrastructure",
    "Techno-social Research",
    "World class CyberPeace Range",
    "Learning Management System (LMS)",
    "Introduction of Innovation and Technologies",
    "Access to the CyberPeace Journal",
    "Global & National level Cybersecurity Hackathons",
    "Student exchange Program",
    "Industry visits",
  ];

  const coeAspects2 = [
    "Skill Development Program for Students, Research Community",
    "Faculty Development Programme",
    "Short videos/ Visual content/ IEC Materials/ Awareness through physical and virtual sessions",
    "Workshop and Training",
    "Updates of Events and Activities",
    "CyberPeace Clubs",
    "CyberPeace Corps",
    "Fundraising opportunities",
    "Start-up Ecosystem",
  ];

  return (
    <div className="coe">
      <motion.div
        className="coe-hero"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>
          CyberPeace{" "}
          <span style={{ color: "black" }}>| Center of Excellence (CCoE)</span>
        </h1>
        <img src={RDFramework} alt="ccoe-research-development" />
        <p>
          CyberPeace COE is a 'Community Driven Collaborative Framework for
          Research and Development for Academia and Allied Institutions'. Our
          Vision is to create a bed/cluster of research in academic and allied
          institutions. The aim is to address and solve the challenges and
          problems in Cyberspace.
          <br />
          <br />
          Each Government establishment(s) has to partner with one or more
          Academic Institutions, and share details about their operational
          challenges, issues, threats, risks and fears. Depending on the
          project, the Intellectual Property for the solution can be licensed
          for commercial exploitation or handed over in national interest.
        </p>

        <img src={COEReach} alt="reach" />
      </motion.div>

      <div className="coe-aspects">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 0.8,
            },
          }}
          viewport={{ once: true, amount: 0.8 }}
        >
          <h2>CyberPeace COE - Aspects</h2>
          <img src={CCOEHandShake} alt="ccoe-handshake" />
        </motion.div>
        <div className="coe-list">
          <motion.ul
            initial={{ opacity: 0, x: -100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
              },
            }}
            viewport={{ once: true, amount: 0.8 }}
          >
            {coeAspects.map((aspect, index) => (
              <li key={index}>{aspect}</li>
            ))}
          </motion.ul>
          <motion.ul
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
              },
            }}
            viewport={{ once: true, amount: 0.8 }}
          >
            {coeAspects2.map((aspect, index) => (
              <li key={index}>{aspect}</li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default COE;