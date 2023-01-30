import Sidebar from './components/Sidebar';
import './App.css';
import React, {useEffect} from 'react';
import Navbar  from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <Footer/>
    </div>
  );
}

export default App;
