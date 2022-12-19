import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";



import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Counter from './components/counter';
import Reverse from './components/reverse';
import Home from './components/home';




class App extends React.Component{
  render() {
    return (
      <div className="container">
        

        
        <Router>
          <Routes>
            <Route path="/" element={<Home />}/> 
            <Route path="/counter" element={<Counter />}/>
            <Route path="/reverse" element={<Reverse />} />
          </Routes>
         
        </Router>
        
      </div>
    );
  }
  

  
}

export default App