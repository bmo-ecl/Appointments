import React, { Component } from 'react';
import moment from 'moment'; 

import ClienteMain from "./client/ClienteMain";
import Calendar from "./components/Calendar";
import './App.css';



class App extends Component{
	
	render(){
		return(
				<div className="App">
					<ClienteMain />
				</div>
		)
	}
}

export default App;
