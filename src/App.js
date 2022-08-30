import './App.css';
import NavigationBar
  from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from './components/Trending';
import Superhero from './components/Superhero';
import "./style/LandingPage.css";
import FormRange from 'react-bootstrap/esm/FormRange';

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
       <Intro/>
      </div>
      <div className="trending">
        <Trending />
      </div>
      <div className="superhero">
        <Superhero />
      </div>
    </div>
  );
}

export default App;
