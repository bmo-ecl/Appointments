import React, { Component } from 'react';
import moment from 'moment'; 

import ClienteMain from "./ClienteMain";
import Calendar from "./components/Calendar";



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
