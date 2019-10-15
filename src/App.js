import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/home/header';
import Countdown from './components/home/countdown';
import Services from './components/home/services';
import About from './components/home/about';
import Counter from './components/home/counter';
import Schedule from './components/home/schedule';
import Team from './components/home/team';
import Gallery from './components/home/gallery';
import FAQ from './components/home/faq';
import Sponsors from './components/home/sponsors';
import Pricing from './components/home/pricing';
import EventSlides from './components/home/eventSlides';
import Blogs from './components/home/blogs';
import SubscribeArea from './components/home/subscribeArea';
import Map from './components/home/map';
import ContactUs from './components/home/contactUs';
import Footer from './components/home/footer';
import CopyrightLink from './components/home/copyrightLink';
import GoToTop from './components/home/goToTop';
import PreLoader from './components/home/preLoader';

function App() {
  return (
    <div className="App">
      <Header />
      <Countdown />
      <Services />
      <About />
      <Counter />
      <Schedule />
      <Team />
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
      <PreLoader />
    </div>
  );
}

export default App;
