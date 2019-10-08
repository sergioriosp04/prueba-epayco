import React, { Fragment } from 'react';
//components
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Form from './components/Form'
import Footer from './components/Footer'

function App() {
  return (
    <Fragment>
      <Sidebar />
      <Header />
      <Form />
      <Footer />
    </Fragment>
  );
}

export default App;
