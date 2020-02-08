import React, {Component} from 'react';
import moment from 'moment';


let CreateMonth = props =>{
	let currentDate = moment(props.current.current);
	console.log(currentDate);
	
	let firstDayOfMonth = moment(currentDate).startOf("month").format("d");
	
	let daysBeforeMonth = [];
	
	for(let i=0; i< firstDayOfMonth; i++){
		daysBeforeMonth.push(
				<td key={['lastmonth-'+ i]} className="calendar-body-cell lastmonth">{""}</td>
		);
	}
	
	
	let totalDaysInMonth = currentDate.daysInMonth();
	let days = [];
	while(totalDaysInMonth){
		var current = currentDate.date(totalDaysInMonth).format("D");
		days.push(current);
		totalDaysInMonth--;
	}
	

	let currentDay = props.current.current.format("D");
	console.log(currentDay);

	let daysThisMonth = [];
	for(let d=1; d<= days.length; d++){
		let currentday = d === currentDay?"today":"";
		daysThisMonth.push(
				<td key={['thismonth-'+ d]} className={'calendar-body-cell '  + currentday} onClick={() => props.selectDay(d)} >
					<div className="date">{d}</div>
				</td>
		);
	}
	
	
	var totalSlots = [...daysBeforeMonth, ...daysThisMonth];
	let rows =[];
	let cells = [];
	
	totalSlots.forEach((row,i) =>{
		if(i % 7 !== 0){
			cells.push(row);
		}else{
			rows.push(cells);
			cells = [];
			cells.push(row);
		}
		
		if(i=== totalSlots.length -1){  // when end loop we add remain date
			rows.push(cells);
		}
	});
	
	console.log(rows);
	
	let daysinmonth = rows.map((days, index) =>{
		return (
				<tr key={index} className="calendar-body-row">
				{days}
				</tr>
			);
	});
	
	
	return(<tbody>{daysinmonth}</tbody>);

	
}




class Month extends Component{

	days = moment.weekdays();
	
	
	render(){

		console.log(this.props);
		
		let daysNameDisplay = this.days.map(dayname =>{
			return (
					<th key={dayname} className="days-display">
						{dayname}
					</th>
			);
		});
		

		return(
				<table className="calendar-body-table">
					<thead>
						<tr>{daysNameDisplay}</tr>
					</thead>
					
					<CreateMonth current={this.props} selectDay={this.props.selectDay} />
					
				</table>
			
		
		) //end of return()
		
		
	}//end of render()
	
}



export default Month