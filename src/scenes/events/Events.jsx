import React from "react";
import "./Events.css";
import {
  GlobalChallenge,
  DefenseChallenge2,
  Corps,
  Darkathon,
  CCTNS,
  Cyinnov8,

} from "./events photos";

//   Darkathon,
//   DefenseChallenge,
//   GlobalChallenge,
//   GlobalChallenge2,
//   GlobalChallenge3,
//   GlobalChallenge4,
//   DefenseChallenge2,
//   DefenseChallenge3,
//   Corps2,
//   Corps3,
//   Corps4,
//   CCTNS2,
//   CCTNS3,
//   CCTNS4,
//   Cyinnov82,
// } from "./events_photos";
import EventDropdown from "../../components/EventDropdown";



const Events = () => {
  const events = [
    {
      title: "Global CyberPeace Challenge",
      image: GlobalChallenge,
      body: "Global CyberPeace Challenge (GCC) is a journey to recognize and award talent that can build solutions to some of the most pressing Cybersecurity problems faced by society today. The objective of the challenge is to tap into the innovative approaches adopted by participants to solve critical real-world problems in the technical and policy challenges. \nGlobal CyberPeace Challenge has three tracks - Cyber Policy & Strategy Challenge, Capture the Flag (CTF), Peace-a-Thon: The innovation challenge. The grand finale of the first edition of GCC was graced by the honorable Prime Minister of India Shri Narendra Modi and the then Prime Minister of Sri Lanka Shri Ranil Wickremesinghe along with other dignitaries.",
    },
    {
      title: "Cyber Shakti - Defense CyberPeace Challenge",
      image: DefenseChallenge2,
      body: "HQ Integrated Defense Staff and CyberPeace Foundation jointly organized Defense CyberPeace Challenge- Exercise Cyber Shakti in the year of 2021. The aim was to enhance security skills of defense personnel belonging to Army, Navy and Airforce.The competition was divided into two tracks Capture the Flag- Information Technology (CTF-IT) and Capture the Flag- Operation Technology (CTF-OT).",
    },
    {
      title: "Activity with 14 Corps Indian Army",
      image: Corps,
      body: "An initiative of CyberPeace on capacity building, setting up of Secure Testbed and training of the year army personnel. Exclusive awareness campaign to upskill their families was conducted in the year of 2021.",
    },
    {
      title: "Darkathon",
      image: Darkathon,
      body: "The rise in the extensive use of technology has also brought with it an increase in cybercrimes. Cyberattacks and crimes have permeated almost every facet of society, and are growing in volume, velocity and sophistication with each passing day, defeating the best efforts of law enforcement agencies in India and across the world. The intersection between crimes and technology is more apparent today than ever before. Almost all crimes and potential crimes are facilitated by the internet, gadgets or technology in one form or the other; or at least have an investigative lead rooted in technology.",
    },
    {
      title: "CCTNS Hackathon",
      image: CCTNS,
      body: "National Crime Records Bureau (NCRB) and CyberPeace Foundation have joined hands to organize CCTNS Hackathon & Cyber Challenge with an aim to enhance skills and deepen understanding of the police personnel at ground level. It is also an endeavor of NCRB to evolve new ideas and solutions for solving day-to-day challenges faced by the police.",
    },
    {
      title: "CyInnov8 - Conference at DRDO Bhavan",
      image: Cyinnov8,
      body: 'Defense Research Development Organisation (DRDO) had collaborated with CyberPeace Foundation & VJTI Mumbai to organize a one-day conference on "Cybersecurity - Challenges and Innovations". The conference focused on the current trends, needs and future requirements of innovation in the field of Cybersecurity for a secured cyberspace. Various speakers from all the stakeholders like Industry, Academia, Government and Non for Profit organizations working in Cyberspace were present.',
    },
  ];

  return (
    <div className="events">
      <div className="cover-img">
      <h1 style={{textAlign: 'center', opacity: '1'}}>Some Important Events</h1>
      </div>

      <div className="event-list">
        {events.map((event, index) => (
          <div key={index} className="event-item">
            <div className="event-content">

              <div className="event-maincontent">
                {index % 2 === 0 ? (
                  <>
                    <img src={event.image} alt={`Event ${index + 1}`} />
                    <div className="event-body" style={{ padding: '1rem' }}>
                      <h2 style={{ textAlign: "left",  }} className="fontSize32-24" >{event.title}</h2>
                      <div style={{ textAlign: "justify", fontWeight:'500', }} className="fontSize20-12">

                        {event.body}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="event-body" style={{ padding: '1rem' }}>
                      <h2 style={{ textAlign: "left" ,  }} className="fontSize32-24" >{event.title}</h2>
                      <div style={{ textAlign: "justify" , fontWeight:'500' , }} className="fontSize20-12">
                        {event.body}
                      </div>

                    </div>
                    <img src={event.image} alt={`Event ${index + 1}`} />
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;