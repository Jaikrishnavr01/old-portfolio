import Experties from "./Components/Experties/Experties";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import People from "./Components/People/People";
import Portfolio from "./Components/Portfolio/Portfolio";
import Works from "./Components/Works/Works";
import css from './styles/app.module.scss'
const App = () => {
  //don't forget to add font link in index.html
  return <div className={`bg-primary ${css.container}`}>
    <Header/>
    <Hero/>
    <Experties/>
    <Works/>
    <Portfolio/>
   { /*<People/> */}
    <Footer/>
  </div>

};

export default App;
