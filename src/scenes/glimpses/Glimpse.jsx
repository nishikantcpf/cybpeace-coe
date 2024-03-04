import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Glimpse.css";
import {
  COEJHA1,
  COEJHA2,
  COEJHA3,
  COELAB1,
  COELAB2,
  COELAB3,
  COELAB4,
  COELAB5,
  COELAB6,
  COELAB8,
  COELAB9,
  MOU1,
  MOU2,
  MOU3,
  Sakec1,
  Sakec2,
  Sakec3,
} from "./glimpse photos";

const Glimpse = () => {
  const [currentJharkhand, setCurrentJharkhand] = useState();
  const [currentLab, setCurrentLab] = useState();
  const [currentMou, setCurrentMou] = useState();
  const [currentSakec, setCurrentSakec] = useState();

  const glimpseList = [
    {
      name: "CyberPeace COE Labs",
      image: [
        COELAB1,
        COELAB2,
        COELAB3,
        COELAB4,
        COELAB5,
        COELAB6,
        COELAB8,
        COELAB9,
      ],
      state: currentLab,
      onChange: (index) => {
        setCurrentLab(index);
      },
    },
    {
      name: "CCOE Inauguration At Ranchi University",
      image: [COEJHA1, COEJHA2, COEJHA3],
      state: currentJharkhand,
      onChange: (index) => {
        setCurrentJharkhand(index);
      },
    },
    {
      name: "CyberPeace COE - MoU & Collaborations",
      image: [MOU1, MOU2, MOU3],
      state: currentMou,
      onChange: (index) => {
        setCurrentMou(index);
      },
    },
    {
      name: "CyberPeace COE at Sakec, Mumbai",
      image: [Sakec1, Sakec2, Sakec3],
      state: currentSakec,
      onChange: (index) => {
        setCurrentSakec(index);
      },
    },
  ];

  return (
    <div className="glimpse">
      <h1>Center of Excellence Glimpse</h1>

      <div className="glimpse-container">
        {glimpseList.map((glimpse, i) => (
          <div className="glimpse-item" key={i}>
            <h2>{glimpse.name}</h2>

            <div className="glimpse-carousel-container">
              <Carousel
                showArrows={true}
                autoPlay={true}
                infiniteLoop={true}
                selectedItem={glimpse.image[glimpse.state]}
                onChange={glimpse.onChange}
                className="glimpse-carousel"
                showThumbs={false}
              >
                {glimpse.image.map((img, i) => (
                  <img key={i} src={img} alt={`${glimpse.name} ${i}`} />
                ))}
              </Carousel>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default Glimpse;
