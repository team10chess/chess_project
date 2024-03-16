import './App.css';
import Routess from './Routess';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
    <Routess />
    </Router>
  </div>
  );
}

export default App;
