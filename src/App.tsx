import React from 'react';

import Popup from './components/Base/Popup'
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';
import Footer from './components/Layout/Footer';
import Navigation from './components/Sections/Navigation';

function App() {
  return (
    <>
      <Navigation/>
      <Header/>
      <Main/>
      <Footer/>
      <Popup/>
    </>
  );
}

export default App;
