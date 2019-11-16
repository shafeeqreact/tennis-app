import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getPlayers, getTournament } from '../../redux';

import Header from './header';
import Countdown from './countdown';
import Services from './services';
import About from './about';
import Counter from './counter';
import Schedule from './schedule';
import Team from './team';
import Gallery from './gallery';
import FAQ from './faq';
import Sponsors from './sponsors';
import Pricing from './pricing';
import EventSlides from './eventSlides';
import Blogs from './blogs';
import SubscribeArea from './subscribeArea';
import Map from './map';
import ContactUs from './contactUs';
import Footer from './footer';
import CopyrightLink from './copyrightLink';
import GoToTop from './goToTop';

const Home = (props) => {
    const tourney_has_started = useSelector(state => state.schedule.tournament.tourney_has_started);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTournament());
        dispatch(getPlayers());
    }, [])

    return (
        <React.Fragment>
            <Header />
            {tourney_has_started ? null : <Countdown />}
            <Services />
            <About />
            <Counter />
            <Schedule />
            <Team {...props} />
            <Gallery />
            <FAQ />
            <Sponsors />
            <Pricing />
            <EventSlides />
            <Blogs />
            <SubscribeArea />
            <Map />
            <ContactUs />
            <Footer />
            <CopyrightLink />
            <GoToTop />
        </React.Fragment>
    );
}

export default Home;