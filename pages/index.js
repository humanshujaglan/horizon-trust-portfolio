import React, { Fragment } from 'react';
import Header from '../components/header/Header';
import Hero from '../components/hero/hero';
import About from '../components/about/about';
import FeaturesSection from '../components/FeaturesSection/FeaturesSection';
import CoinpaySections from '../components/TokenomicsSection/TokenomicsSection';
import TeamSection from '../components/TeamSection/TeamSection';
import FaqSection from '../components/FaqSection/FaqSection';
import Footer from '../components/footer/Footer';
import Scrollbar from '../components/scrollbar/scrollbar';
import EventSection from '../components/EventsSection/EventsSection';
import SolutionSection from '../components/SolutionSection/SolutionSection';


const HomePage = () => {

    return (
        <Fragment>
            <div className='index_ico page_wrapper'>
                <Header />
                <main className="page_content">
                    <Hero id="id_ico_hero_section" />
                    <About id="id_ico_about_section" />
                    <FeaturesSection id="id_ico_service_section" />
                    <CoinpaySections />
                    <SolutionSection />
                    {/* <TeamSection id="id_ico_team_section" /> */}
                    <EventSection id="id_ico_event_section" />
                    <FaqSection /> 
                    <Scrollbar />
                </main>
                <Footer />
            </div>
        </Fragment>
    )
};
export default HomePage;