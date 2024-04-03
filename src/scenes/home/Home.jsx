import React, { useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import Hero from "../../components/Hero";
import "./Home.css";
import {
  ResearchLab,
  CareerCounselling,
  ResearchInnovation,
  Workshop,
  TechPapers,
  Standards,
} from '../../assets/photos';

const Home = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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

  const handleMouseEnter = index => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="home">
      <Hero />
      <hr className="home-hr" />
      <div className="grid-container">
        {coeKeyComponents.map((comp, index) => (
          <div key={index} className="grid-item">
            <Card
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              style={{ backgroundColor: hoveredIndex === index ? '#293c6d' : 'white', transition: '0.5s ease-in-out', borderRadius: '0.8rem' }}
            >
              <CardActionArea href={comp.href}>
                <CardMedia
                  component="img"
                  height="140"
                  image={comp.image}
                  alt={comp.title}
                />
                <CardContent>
                  <Typography gutterBottom component="div" style={{ color: hoveredIndex === index ? 'white' : '#293c6d', textAlign: 'center', transition: '0.5s ease-in-out' }}>
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
