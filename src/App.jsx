import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import WhyUS from './Screens/WhyUs';
import Explore from './Screens/Explore';
import ContactUs from './components/contactUs';
function App() {

  return (
    <div className='app'>
      <Header />
      <Hero />
      <WhyUS />
      <Explore />
      <ContactUs />
    </div>
  )
}

export default App
