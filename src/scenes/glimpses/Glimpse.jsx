import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
import CloseIcon from '@mui/icons-material/Close';

const Glimpse = () => {
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
      ]
    },
    {
      name: "CCOE Inauguration At Ranchi University",
      image: [COEJHA1, COEJHA2, COEJHA3]
    },
    {
      name: "CyberPeace COE - MoU & Collaborations",
      image: [MOU1, MOU2, MOU3]
    },
    {
      name: "CyberPeace COE at Sakec, Mumbai",
      image: [Sakec1, Sakec2, Sakec3]
    },
  ];
  
  const [model, setModel] = useState(false)
  const [tempImgSrc, setTempImgSrc] = useState('')
  const [tempImgIndex, setTempImgIndex] = useState(0);

  const getImg = (imgSrc, index) => {
    setTempImgSrc(imgSrc);
    setTempImgIndex(index);
    setModel(true);
  }

  const closeModel = () => {
    setModel(false);
  }

  return (
    <>
      <div className={model ? "model open" : "model"}> 
        <img src={tempImgSrc} alt=" " />
        <CloseIcon onClick={closeModel} />
      </div>
      <div>
        {glimpseList.map((gallery, galleryIndex) => (
          <React.Fragment key={galleryIndex}>
            <h2 style={{textAlign: 'center'}}> {gallery.name}</h2>
            <div className="gallery">
              {gallery.image.map((imgSrc, imgIndex) => (
                <div className="pics" key={galleryIndex + "-" + imgIndex} onClick={() => getImg(imgSrc, imgIndex)}>
                  <img src={imgSrc} style={{ width: '100%' }} alt="" loading="lazy" />
                </div>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
  
  
  
};

export default Glimpse;
