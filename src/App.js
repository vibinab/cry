import Navbar from './Components/Navigation/Navbar';
import Navbar1 from './Components/Navigation/Navbar1';
import './App.css';
import { Route,Switch , BrowserRouter as Router} from 'react-router-dom';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Card from './pages/About/Card';
import Card1 from './pages/About/Card1';
import Aboutsub from './pages/About/Aboutsub';
import Card2 from './pages/About/Card2';
import Bottom1 from './pages/bottom/bottom';
import Footer from './Components/Footer/Footer';
import Carousel from './pages/Home/Carousel';
import Hcard from './pages/Home/Hcard';
import Habout1 from './pages/Home/Habout1';
import Icard  from './pages/Home/Icard';
import Secondcard  from './pages/Home/Secondcard';
import Bottom2 from './pages/bottom/bottom1';


function App() {
  return (
    <div className="App">
      <Router>

      <Navbar />
      <Navbar1 /> 
      <Switch>
        <Route path="/about">
      <About />
      <Card />
      
      <Aboutsub/>
      <Card1 />
      <Card2 />
      <Bottom1 />
      </Route>
      <Route path="/home">
      <Home />
      <Hcard />
      <Habout1 />
      <Icard />
      <Secondcard />
      <Carousel />
      <Bottom2 />
      
      
      
      </Route>
      </Switch>
       </Router>
      <Footer />
    </div>
  );
}

export default App;
