import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import './App.css';
import Navbar from './components/Navbar';
import Home from './scenes/home/Home';
import Footer from './components/Footer';
import PageWrapper from './components/PageWrapper';
import Contact from './scenes/contact/Contact';
import ResearchLab from './scenes/research lab/ResearchLab';
import IPCC from './scenes/IPCC/IPCC';
import Innovation from './scenes/innovation/Innovation';
import Workshop from './scenes/workshops/Workshop';
import TechPapers from './scenes/technical papers/TechPapers';
import Standards from './scenes/working on standards/Standards';
import AboutCyberPeace from './scenes/about cyberpeace/AboutCyberPeace';
import COE from './scenes/coe/COE';
import COERegister from './scenes/COERegister/COERegister';
import Events from './scenes/events/Events';
import Glimpse from './scenes/glimpses/Glimpse';
import PartnerFooter from './components/PartnerFooter';


const App = () => {
  return (
    <div>
      <PageWrapper>
        <Navbar />
        <Routes>

          <Route path='/' element={ <Layout /> }>

            <Route path='/' element={ <Home /> } />
            <Route path='/contact' element={ <Contact /> } />
            <Route path='/about-cyberpeace' element={ <AboutCyberPeace /> } />
            <Route path='/center-of-excellence' element={ <COE /> } />
            <Route path='/register' element={ <COERegister /> } />
            <Route path='/events' element={ <Events /> } />
            <Route path='/glimpses' element={ <Glimpse /> } />

            {/* Key Components Routes */}
            <Route path='/research-lab' element={ <ResearchLab /> } />
            <Route path='/internships' element={ <IPCC /> } />
            <Route path='/research-innovation' element={ <Innovation /> } />
            <Route path='/workshops' element={ <Workshop /> } />
            <Route path='/technical-papers' element={ <TechPapers /> } />
            <Route path='/working-on-standards' element={ <Standards /> } />
            
          </Route>

        </Routes>
        <PartnerFooter/>
      </PageWrapper>
      <Footer />


    </div>
  );
}

export default App;
