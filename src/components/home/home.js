import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getTop6Players, getTournament } from '../../redux';

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
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTournament());
        dispatch(getTop6Players());
    }, [])

    return (
        <React.Fragment>
            <Header />
            <Countdown />
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