import Hero from "../../components/Hero";
import KeyComponents from "../../components/KeyComponents";
import "./Home.css"
import {
  ResearchLab,
  CareerCounselling,
  ResearchInnovation,
  Workshop,
  TechPapers,
  Standards,
} from '../../assets/photos'

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
            <KeyComponents bgImage={comp.image} content={comp.title} to={comp.href} buttonContent="More Info" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home;