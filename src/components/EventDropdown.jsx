import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const EventDropdown = ({ event }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState();

  const handleChange = (index) => {
    setCurrentIndex(index);
  }

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };
  return (
    <>
      <div className="event-header" onClick={toggleDropdown}>
        <h2>{event.title}</h2>
        {isOpen ? <ChevronUpIcon width={25} height={25} /> : <ChevronDownIcon width={25} height={25} />}
      </div>
      {isOpen && (
        <div className="event-content">
          <Carousel
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            selectedItem={event.image[currentIndex]}
            onChange={handleChange}
            className="carousel-container"
          >
            {event.image.map((img, i) => (
              <img key={i} src={img} alt={`${event.title} ${i}`} />
            ))}
          </Carousel>

          <p>{event.body}</p>
        </div> 
      )}
    </>
  );
};

export default EventDropdown;
