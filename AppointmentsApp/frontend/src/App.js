import React, { Component } from 'react';
import moment from 'moment';

import ClienteMain from "./components/creation/ClienteMain";
import Calendar from "./components/creation/Calendar";

class App extends Component{


	
	render(){
		return(
				<div className="App">

					<Calendar />
				</div>
		)
	}
}

export default App;
