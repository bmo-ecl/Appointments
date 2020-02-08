import React, {Component} from 'react';
import Calendar from "../components/Calendar";
import Timer from "../components/Timer";
import './ClienteCalendar.css';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.css';
import moment from 'moment';


class ServiceAppointments extends Component{
	
	state={
			dateSelected:moment(),
			timeSelected:moment(),
			currentTime:moment().format("h:mm a"),
			currentDate:moment().format("MMM D YYYY"),
	}
	
	
	setDate = date =>{
		this.setState({dateSelected: date, currentDate:date.format("MMM D YYYY")});
	}
	setTime = time =>{
		this.setState({timeSelected: time, currentTime:time.format("h:mm:ss a")});
	}
	
	
	submitAppt=()=>{
		
	}
	
	
	render(){
		return(

				<div className="apptsmain">
				<br />	
				<h2>Cliente y Servicio Nombre</h2>
					<div className="bookappt">
						<div className="bookappt-container bleft">
							<h3 style={{marginTop:"30px"}}>Agendar Cita</h3>
							<div className="form-holder">
								<form>
									<div className="form-group">
										<label name="apptname">Nombre y Apellidos</label>
										<input type="text" className="form-control" id="apptname"/>
									</div>
									<div className="form-group">
										<label name="apptdni">DNI</label>
										<input type="text" className="form-control" id="apptdni"/>
									</div>
									<div className="form-group">
										<label name="apptphone">Teléfono</label>
										<input type="text" className="form-control" id="apptphone"/>
									</div>
									<button onClick={this.submitAppt} className="btn btn-primary">Agendar</button>
								</form>
							</div>
							
						</div>
						<div className="bookappt-container bright">
							<div className="appt-fecha-container">
								<div className="appt-fecha-display">
									<div className="table-cell">{this.state.currentDate}</div>
									<div className="table-cell">{this.state.currentTime}</div>
								</div>
							</div>
							
							
							<Calendar setDate={this.setDate}/>
							<Timer setTime={this.setTime}/>
						</div>
					</div>
					<div className="appt-edit">
						<div className="appt-edit-header">¿Ya tiene una Cita?</div>
						<button className="btn btn-primary">Cancelar/Editar Cita</button>
					</div>
				</div>
		)
	}
	
}

export default ServiceAppointments