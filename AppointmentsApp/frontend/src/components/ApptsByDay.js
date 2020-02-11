import React, {Component} from 'react';
import moment from 'moment';


class ApptsByDay extends Component{
	constructor(props){
		super(props);

		
		this.state ={
				appointments : [],
				serviceid: props.serviceid,
				date : props.date,
				personid: props.personid,
		}
		
	}
		
	
	async componentDidMount (){
		let serviceid = this.state.serviceid;
		let personid = this.state.personid;
		let date = this.state.date;
		
		const response =   await fetch('/serviceappts/services/' + serviceid + '/persons/' + personid + '/appointments?date=' + date);
		const appointments_today =  await response.json();
		
		
		this.setState({appointments: appointments_today});
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
				let persondata = appt[1];
				return(
						<div key={index} className="appt">{appttime} - {persondata.name} {persondata.lastname}</div>
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


export default ApptsByDay