import React from 'react'
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import RowPost from './components/rowpost/RowPost';
import {originals,actions} from './urls'

function App() {
  return (
    <div>
    <Navbar/>
    <Banner/>
    <RowPost url={originals} title='Netflix Originals' />
    <RowPost url={actions} title='Action' isSmall />

  </div>
  );
}

export default App;
