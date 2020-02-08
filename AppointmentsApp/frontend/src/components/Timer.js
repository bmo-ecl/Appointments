import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment';

class Timer extends Component{
	
	state={

			selectedTime: new Date(),
	}
	

	setTime = (time)=>{
		this.setState({selectedTime: time});
		this.props.setTime(moment(time));
	}
	
	
	render(){
		
		return(
				<div className="timer-holder">
					<div className="table-cell">Horario Disponible</div>
					<div className="table-cell"><DatePicker 
						selected={this.state.selectedTime}
				      onChange={date => this.setTime(date)}
				      showTimeSelect
				      showTimeSelectOnly
				      timeIntervals={15}
				      timeCaption="Time"
				      dateFormat="h:mm aa" />
				     </div>
				</div>
		)
	}
	
}
export default Timer