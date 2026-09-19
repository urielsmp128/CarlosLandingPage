import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Intro from './components/Intro/Intro';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import About from './components/About/About';
import Services from './components/Services/Services';
import Reviews from './components/Reviews/Reviews';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import FloatingActions from './components/FloatingActions/FloatingActions';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Intro />
        <WhyChooseUs />
        <About />
        <Services />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;
