import React, {Component} from 'react';
import moment from 'moment';
import ApptsByDay from './ApptsByDay';




let CreateMonth = props =>{
	let serviceid = props.current.serviceid;
	let personid = props.current.personid;
	let currentDate = moment(props.current.current);

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
		days.push({day: current, date: moment(currentDate).format("YYYY-MM-DD")});
		totalDaysInMonth--;
	}
	

	let currentDay = props.current.current.format("D");

	let daysThisMonth = [];
	
	for(let d=days.length-1; d>0; d--){
		let currentday = days[d].day == currentDay?"today":"";
		let date = days[d].date;
		console.log(date);
		daysThisMonth.push(
				<td key={['thismonth-'+ days[d].day]} className={'calendar-body-cell '  + currentday} onClick={() => props.selectDay(days[d].day)} >
					<div className="date">{days[d].day}</div>
					<div className="appts">
						<ApptsByDay serviceid={serviceid} personid={personid} date={date} />
					</div>
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