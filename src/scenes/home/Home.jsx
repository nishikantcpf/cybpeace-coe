import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import Hero from "../../components/Hero";
// import KeyComponents from "../../components/KeyComponents";
import "./Home.css";
import {
  ResearchLab,
  CareerCounselling,
  ResearchInnovation,
  Workshop,
  TechPapers,
  Standards,
} from '../../assets/photos';
// import { color } from 'framer-motion';

const Home = () => {
  const coeKeyComponents = [
    {
      title: "Research Lab",
      image: ResearchLab,
      href: "/research-lab"
    },
    {
      title: "Internship Program, Career Counselling",
      image: CareerCounselling,
      href: "/internships"
    },
    {
      title: "Research and Innovation on Cyber Security and Warfare",
      image: ResearchInnovation,
      href: "/research-innovation"
    },
    {
      title: "Workshops and Conferences",
      image: Workshop,
      href: "/workshops"
    },
    {
      title: "Technical Papers",
      image: TechPapers,
      href: "/technical-papers"
    },
    {
      title: "Working on Standards",
      image: Standards,
      href: "/working-on-standards"
    }
  ];

  return (
    <div className="home">
      <Hero />
      <hr className="home-hr" />
      <div className="grid-container">
        {coeKeyComponents.map((comp, index) => (
          <div key={index} className="grid-item">
            <Card>
              <CardActionArea href={comp.href}>
                <CardMedia
                  component="img"
                  height="140"
                  image={comp.image}
                  alt={comp.title}
                />
                <CardContent>
                  <Typography gutterBottom component="div" style={{ color: '#293c6d', textAlign: 'center' }}>
                    {comp.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
