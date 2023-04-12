import React from 'react';
import './App.css';

import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import Services from './sections/services/Services';
import Testimonials from './sections/testimonials/Testimonials';
import About from './sections/about/About';
import Footer from './sections/footer/Footer';
import MoreHeader from './sections/MoreHeader/MoreHeader';

function App() {
  return (
    <div className="App">
      <main>
        <Navbar />
        <Header />
        < About/>
        <Services />
        <MoreHeader/>
        <Testimonials />
        <Footer/>
      </main>
    </div>
  );
}

export default App;
