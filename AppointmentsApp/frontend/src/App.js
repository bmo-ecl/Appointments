import React, { Component } from 'react';
import moment from 'moment'; 

import ClienteMain from "./ClienteMain";
import Calendar from "./components/Calendar";
import AppNavbar from './AppNavbar';


class App extends Component{
	
	render(){
		return(
				<div className="App">
					<div>
						<AppNavbar />
						<Calendar />
					</div>
					
				</div>
		)
	}
}

export default App;
