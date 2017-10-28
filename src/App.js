import React, { Component } from 'react';
import {NavbarDisplay} from './components/navbar/NavbarDisplay'
import {Routes} from './Routes.js'

import './App.css';

class App extends Component {
  render() {
    return (
		<div>
			<NavbarDisplay/>
			<Routes/>
		</div>
    );
  }
}

export default App;