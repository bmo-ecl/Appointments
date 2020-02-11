import React, {Component} from 'react';
import moment from 'moment';


class ApptsByPerson extends Component{
	constructor(props){
		super(props);

		
		this.state ={
				appointments : [],
				serviceid: props.serviceid,
				personid: props.personid,
		}
		
	}
		
	
	async componentDidMount (){
		let serviceid = this.state.serviceid;
		let personid = this.state.personid;
		let date = this.state.date;
		
		const response =   await fetch('/serviceappts/services/' + serviceid + '/persons/' + personid + '/allappointments');
		const appointments_all =  await response.json();
		
		
		this.setState({appointments: appointments_all});
	}
	
	render(){
		
		
		if(this.state.appointments.empty==false){
			console.log(this.state.date);
			console.log(this.state.appointments);
			let apptsToday =  this.state.appointments.content.map((appt, index)  =>{
				console.log(appt);
				let apptdata = appt[0];
				let time_array = apptdata.time.split(":");
				let appttime = moment(appt[0].date).hours(time_array[0]).minutes(time_array[1]).format("HH:MM a");
				let apptdate = moment(appt[0].date).format("MMMM DD YYYY");
				let persondata = appt[1];
				return(
						<div key={index} className="apptbyday">
							<div>
								{apptdate}
							</div>
							<div>
								{appttime} - {persondata.name} {persondata.lastname}
							</div>
						</div>
				);
			});
			
			return (
					<div>{apptsToday}</div>
			)
		}else{
			return (
					<div></div>
			)
		}
			
		
	}
	
}


export default ApptsByPerson