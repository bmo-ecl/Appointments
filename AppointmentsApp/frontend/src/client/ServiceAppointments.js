import React, {Component} from 'react';
import Dater from "../components/Dater";
import Timer from "../components/Timer";
import './ClienteCalendar.css';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.css';
import moment from 'moment';
import {FormErrors} from '../FormErrors';


class ServiceAppointments extends Component{
	
	constructor (props) {
		  super(props);

		 this.state={
				 	service: props.location.state,
					nombre:'',
					apellidos:'',
					dni:'',
					telefono:'',
					formErrors:{
						nombre: '',
						apellidos:'',
						dni:'',
						telefono:'',
					},
					dateSelected:moment(),
					timeSelected:moment(),
					currentTime:moment().format("h:mm a"),
					currentDate:moment().format("MMM D YYYY"),
					nombreValid:false,
					apellidosValid:false,
					dniValid:false,
					telefonoValid:false,
					formValid:false
			}
		 this.handleChange = this.handleUserInput.bind(this);
		 this.handleSubmit = this.handleSubmit.bind(this);

		 console.log(this.state.service);
	}
		
	
	
	setDate = date =>{
		this.setState({dateSelected: date, currentDate:date.format("MMM D YYYY")});
	}
	setTime = time =>{
		this.setState({timeSelected: time, currentTime:time.format("h:mm:ss a")});
	}
	
	handleUserInput= (e) => {
		const name = e.target.name;
		console.log({name});
		const value = e.target.value;
		this.setState({[name]:value}, 
            () => { this.validateField(name, value)});
		
	}
		
		
	validateField(fieldName, value) {
		
		  let fieldValidationErrors = this.state.formErrors;
		  let nombreValid = this.state.nombreValid;
		  let apellidosValid = this.state.apellidosValid;
		  let dniValid = this.state.dniValid;
		  let telefonoValid = this.state.telefonoValid;
		  
		  switch(fieldName) {
		    case 'nombre':
		    	nombreValid = value.length >= 1;
		    	fieldValidationErrors.nombre = nombreValid ? '' : ' es requerido';
		      break;
		    case 'apellidos':
		    	apellidosValid = value.length >= 1;
			    fieldValidationErrors.apellidos = apellidosValid ? '' : ' es requerido';
			      break;
		    case 'dni':
		    	if(value.length == 0){
		    		fieldValidationErrors.dni = dniValid ? '' : ' es requerido';
		    	}else{
		    		dniValid = value.length >= 5;
		    		fieldValidationErrors.dni = dniValid ? '' : ' no es valido';
		    	}
			      
			      
			      break;
		    case 'telefono':
		    	if(value.length == 0){
		    		 fieldValidationErrors.telefono = telefonoValid ? '' : ' es requerido';
		    	}else{
		    		telefonoValid = value.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g);
		    		 fieldValidationErrors.telefono = telefonoValid ? '' : ' no es valido';
		    	}
			      break;
		    default:
		      break;
		  }
		  this.setState({formErrors: fieldValidationErrors,
			  nombreValid: nombreValid,
			  apellidosValid: apellidosValid,
			  dniValid: dniValid,
			  telefonoValid: telefonoValid,
            }, this.validateForm);
		  
		  console.log("validated field");
		  console.log(this.state.nombreValid);
		  console.log(this.state.formValid);
		}
	
	validateForm() {
	    this.setState({formValid: this.state.nombreValid && this.state.apellidosValid && this.state.dniValid && this.state.telefonoValid});
	  }

	errorClass(error) {
	    return(error.length === 0 ? '' : 'has-error');
	}
	
	async handleSubmit(event){
		event.preventDefault();
		
		console.log(this.state);
		
		let person =  {
				name: this.state.nombre,
				lastname: this.state.apellidos,
				dni : this.state.dni,
				phone : this.state.telefono,
				estado:2,
		}
		
		
		
		
		console.log(person);
		const insertp = await fetch('services/' + this.state.service.serviceid + '/persons', {
			method: 'POST',
			headers: {
		        'Accept': 'application/json',
		        'Content-Type': 'application/json'
		      },
		      body: JSON.stringify(person),
		});
		
		const new_person = await insertp.json();
		

		let appt = {
				date : this.state.dateSelected.format("YYYY-MM-DD"),
				time : this.state.timeSelected.format("HH:mm:ss"),
				code : new_person.id + moment().format("MDYYhms"),
				estado:2,
		}
		
		
		
		const insertappt = await fetch('services/' + this.state.service.serviceid + '/persons/' + new_person.id + '/appointments', {
			method: 'POST',
			headers: {
		        'Accept': 'application/json',
		        'Content-Type': 'application/json'
		      },
		      body: JSON.stringify(appt),
		});
		const new_appt = await insertappt.json();
		console.log(new_appt);
		
		this.props.history.push('/serviceappts/'+ this.state.service.serviceid + '/' + new_person.id + '/listar');
		
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
								<form onSubmit={this.handleSubmit}>
									<div className="">
									 	<FormErrors formErrors={this.state.formErrors} />
									</div>
									<div className={'form-group ' + this.errorClass(this.state.formErrors.nombre)}>
										<label htmlFor="nombre">Nombres</label>
										<input type="text" className="form-control" name="nombre" value={this.state.nombre} onChange={this.handleUserInput} />
									</div>
									<div className={'form-group ' + this.errorClass(this.state.formErrors.apellidos)}>
										<label htmlFor="apellidos">Apellidos</label>
										<input type="text" className="form-control" name="apellidos" value={this.state.apellidos} onChange={this.handleUserInput} />
									</div>
									<div className={'form-group ' + this.errorClass(this.state.formErrors.dni)}>
										<label htmlFor="dni">DNI</label>
										<input type="text" className="form-control" name="dni" value={this.state.dni} onChange={this.handleUserInput} />
									</div>
									<div className={'form-group ' + this.errorClass(this.state.formErrors.telefono)}>
										<label htmlFor="telefono">Teléfono</label>
										<input type="text" className="form-control" name="telefono" value={this.state.telefono} onChange={this.handleUserInput} />
									</div>
									<button disabled={!this.state.formValid} className="btn btn-primary">Agendar</button>
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
							
							
							<Dater setDate={this.setDate}/>
							<Timer setTime={this.setTime}/>
						</div>
					</div>
					<div className="appt-edit">
						<div className="appt-edit-header">¿Ya tiene una Cita?</div>
						<button disabled={!this.state.formValid} className="btn btn-primary">Cancelar/Editar Cita</button>
					</div>
				</div>
		)
	}
	
}

export default ServiceAppointments