import { BrowserRouter, Route } from 'react-router-dom';

import About from './pages/About';
import HowTo from './pages/HowTo';
import Home from './pages/Home';

import './App.css';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Route path="/about" component={About} />
      <Route path="/howto" component={HowTo} />
      <Route path="/profile" component={Profile} />
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
}

export default App;
