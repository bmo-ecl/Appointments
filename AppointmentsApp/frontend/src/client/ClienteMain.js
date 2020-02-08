import React, {Component} from 'react';

import ClientChoose from './ClientChoose';
import ServiceAppointments from './ServiceAppointments';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class ClienteMain extends Component{
	
	
	render(){
		
		return (
			<Router>
				<Switch>
					<Route path="/" exact={true} component={ClientChoose} />
					<Route path="/serviceappts" exact={true} component={ServiceAppointments} />
					
				</Switch>
			</Router>
			
		)
	}
}

export default ClienteMain