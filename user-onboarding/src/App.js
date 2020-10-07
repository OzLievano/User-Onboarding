import React from 'react';
import logo from './logo.svg';
import {Navbar} from 'reactstrap'
import styled from'styled-components';
import AdvancedForm from './Components/Form'
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar className="mb-3" color="info"><h1>FORM BUILDA</h1></Navbar>
      <AdvancedForm/>
    </div>
  );
}

export default App;
