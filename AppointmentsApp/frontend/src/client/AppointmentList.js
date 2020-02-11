import React, {Component} from 'react';
import Calendar from '../components/Calendar'
import ApptsByPerson from './ApptsByPerson'

class AppointmentList extends Component{
	
	
	constructor(props){
		super(props);
		
		this.state = {
				serviceid: props.match.params.serviceid,
				personid: props.match.params.personid,
		}
		
		
		
	}
	
	setDate = date =>{
		//this.setState({dateSelected: date, currentDate:date.format("MMM D YYYY")});
	}
	
	render(){
		
		const {serviceid, personid} = this.state;
		
		return(
				<div>
					<h1>Appointments list</h1>
					<div className="apptslist-holder">
						<div className="al al-left">
							<h4>Citas</h4>
							<ApptsByPerson serviceid={serviceid} personid={personid} />	
						</div>
						<div className="al al-right"><Calendar setDate={this.setDate} serviceid={serviceid} personid={personid} /></div>
							
						
					</div>
					
				
				</div>
		)
		
	}
}
export default AppointmentList