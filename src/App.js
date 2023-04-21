import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import Banner from "./Components/Banner/Banner";
import './Components/App.css'
import { originals,action, comedy, horror, romance } from "./urls";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <RowPost url={originals} title='Netflix Origials' />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={comedy} title='Comedy' isSmall />
      <RowPost url={horror} title='Horror' isSmall />
      <RowPost url={romance} title='Romance' isSmall />
    </div>
  );
}

export default App;
