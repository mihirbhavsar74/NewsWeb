import React, { useState } from 'react';
import Navigation from './navigation';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';

import All from './All';
import Top from './Top';
import Trending from './Trending';
import Science from './Science';
import Entertainment from './Entertainment';
import Sports from './Sports';
import Footer from './Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [activePage, setActivePage] = useState('All');

  const renderPage = () => {
    switch (activePage) {
      case 'All':
        return <All/>;
      case 'Top':
        return <Top/>;
      case 'Trending':
        return <Trending/>;
      case 'Science':
        return <Science/>;
      case 'Entertainment':
        return <Entertainment/>;
      case 'Sports':
        return <Sports/>;
      default:
        return <All />;
    }
    
  };

  return (
    <div className="App">
      <Navigation onSelect={(page) => setActivePage(page)} />
      <div className="content">
        {renderPage()}
      </div>
      <Router>
    
      <Routes>
        <Route path="./All" component={All} />
        <Route path="./Top" component={Top} />
        <Route path="./Trending" component={Trending} />
        <Route path="./Science" component={Science} />
        <Route path="./Entertainment" component={Entertainment} />
        <Route path="./Sports" component={Sports} />
       
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
