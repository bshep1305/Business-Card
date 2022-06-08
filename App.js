import logo from './logo.svg';
import './App.css';
import {Button} from "react-bootstrap"
import Interests from "./Interests"
import About from "./About"
import Info from "./Info"

function App() {
  return (
    <div className="pagecontainer">
    <Info />
    <About />
    <Interests />
 

    </div>
  );
}

export default App;
