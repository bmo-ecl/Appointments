import React, {Component} from 'react';

import ClientChoose from './ClientChoose';
import ServiceAppointments from './ServiceAppointments';
import AppointmentList from './AppointmentList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class ClienteMain extends Component{
	
	
	render(){
		
		return (
			<Router>
				<Switch>
					<Route path="/" exact={true} component={ClientChoose} />
					<Route path="/serviceappts/:serviceid" exact={true} component={ServiceAppointments} />
					<Route path="/serviceappts/:serviceid/:personid/listar" exact={true} component={AppointmentList} />
					
				</Switch>
			</Router>
			
		)
	}
}


//<Route path="/serviceappts/:serviceid/buscar" exact={true} component={ServiceAppointments} />
//<Route path="/serviceappts/editar/:apptid" exact={true} component={ServiceAppointments} />
export default ClienteMain