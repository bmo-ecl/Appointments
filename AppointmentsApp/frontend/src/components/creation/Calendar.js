import React, {Component} from 'react';
import moment from 'moment';
import './Calendar.css';
import Month from './Month';





class Calendar extends Component{
	
	
	
	state={
			dateObject: moment(),
			allmonths: moment.months(),
			showMonthTable:false,
	};
	
	days = moment.weekdays();

	firstDayOfMonth = () => {
		let dateObject = this.state.dateObject;
		let firstDay = moment(dateObject).startOf("month").format("d");
		return firstDay;
	}
	
	daysInMonth = () => {
		let totalDaysInMonth = moment().daysInMonth();
		let days = [];
		while(totalDaysInMonth){
			var current = moment().date(totalDaysInMonth).format("D");
			days.push(current);
			totalDaysInMonth--;
		}
		return days;
	}
	
	currentDay = () =>{
		return this.state.dateObject.format("D");
	}
	
	month = ()=>{
		return this.state.dateObject.format("MMMM");
	}
	
	
	setMonth = month =>{
		let monthNo = this.state.allmonths.indexOf(month);// get month number 
	    let dateObject = Object.assign({}, this.state.dateObject);
	    dateObject = moment(dateObject).set("month", monthNo); // change month value
	    this.setState({
	      dateObject: dateObject // add to state
	    });
	}

	render(){
		
		let daysNameDisplay = this.days.map(dayname =>{
			return (
					<th key={dayname} className="days-display">
						{dayname}
					</th>
			);
		});
		
		let daysBeforeMonth = [];
		for(let i=0; i< this.firstDayOfMonth(); i++){
			daysBeforeMonth.push(
					<td key={['lastmonth-'+ i]} className="calendar-day lastmonth">{""}</td>
			);
		}
		
		let daysThisMonth = [];
		for(let d=1; d<= this.daysInMonth().length; d++){
			console.log(d);
			console.log(this.currentDay());
			let currentDay = d == this.currentDay()?"today":"";
			console.log(currentDay);
			daysThisMonth.push(
					<td key={['thismonth-'+ d]} className={'date '  + currentDay}>
					{d}
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
					<tr key={index} className="calendar-month-row">
					{days}
					</tr>
				);
		});

		
		return(
			<div>
				<h2>Calendar</h2>
				
				<div className="">
					<div className="tail-datetime-calendar">
						<div className="calendar-navi">
							{this.month()}
						</div>
					</div>
					<div className="calendar-date">
						{
							this.state.showMonthTable &&
							<Month data={this.state.allmonths} setMonth={this.setMonth} />
						}
					</div>
					
					<div className="calendar-content">
						<table>
							<thead>
								<tr>{daysNameDisplay}</tr>
							</thead>
							<tbody>
								{daysinmonth}
							</tbody>
						</table>
					</div>
				</div>
					
				
				
				
			</div>
		)} 
}

export default Calendar