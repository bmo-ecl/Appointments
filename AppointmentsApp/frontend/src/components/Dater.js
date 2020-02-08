import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment';

class Timer extends Component{
	
	state={

			selectedDate: new Date(),
	}
	

	setDate = (date)=>{
		this.setState({selectedDate: date});
		this.props.setDate(moment(date));
	}
	
	
	render(){
		
		return(
				<div className="calendar-container">
					<div className="table-cell" style={{float:"left"}}><DatePicker 
						selected={this.state.selectedDate}
				      onChange={date => this.setDate(date)}
					minDate={new Date()}
					inline />
				     </div>
				</div>
		)
	}
	
}
export default Timer