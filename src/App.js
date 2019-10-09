import React, { Fragment } from 'react';
//components
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import InfoForm from './components/InfoForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="row">
      <div className="col-md-3 sidebar">
        <Sidebar />
      </div>
      <div className="col-md-9 content">
        <Header />
        <InfoForm />
        <Footer />
      </div>
    </div>    
  );
}

export default App;
