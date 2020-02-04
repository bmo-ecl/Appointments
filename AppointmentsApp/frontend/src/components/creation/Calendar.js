import React, {Component} from 'react';
import moment from 'moment';
import './Calendar.css';
import MonthTable from './MonthTable';
import Month from './Month';
import YearTable from './YearTable';




class Calendar extends Component{
	
	
	
	state={
			dateObject: moment(),
			allmonths: moment.months(),
			showMonthTable:false,
			showYearTable:false,
			showDateTable:true,
			selectedDate: moment(),
	};
	
	

	currentDay = () =>{
		return this.state.dateObject.format("D");
	}
	
	month = ()=>{
		return this.state.dateObject.format("MMMM");
	}
	
	year = () => {    
	   return this.state.dateObject.format("Y");
	};
	
	setMonth = month =>{
		let monthNo = this.state.allmonths.indexOf(month);// get month number 
	    let dateObject = Object.assign({}, this.state.dateObject);
	    dateObject = moment(dateObject).set("month", monthNo); // change month value
	    this.setState({
	      dateObject: dateObject,
	      showMonthTable: false,
	      showDateTable: true,
	      showYearTable: false
	    });
	}
	
	setYear = year =>{
		let dateObject = Object.assign({}, this.state.dateObject);
	    dateObject = moment(dateObject).set("year", year);
	    this.setState({
	      dateObject: dateObject,
	      showMonthTable: false,
	      showDateTable: true,
	      showYearTable: false
	    });
	}
	
	showMonthTable = (e, month) =>{
		this.setState({
			showMonthTable: !this.state.showMonthTable,
		    showDateTable: this.state.showMonthTable,
		    showYearTable: false
			
		});
	};
	
	showYearTable = (e, year) =>{
		this.setState({
			showMonthTable: false,
		    showDateTable: this.state.showYearTable,
		    showYearTable: !this.state.showYearTable
		});
	};
	
	
	getDates = (startDate, stopDate) =>{
	    var dateArray = [];
	    var currentDate = moment(startDate);
	    var stopDate = moment(stopDate);
	    while (currentDate <= stopDate) {
	      dateArray.push(moment(currentDate).format("YYYY"));
	      currentDate = moment(currentDate).add(1, "year");
	    }
	    return dateArray;
	  }
	
	
	onPrev = () => {
	    let curr = "";
	    if (this.state.showYearTable == true) {
	      curr = "year";
	    } else {
	      curr = "month";
	    }
	    this.setState({
	      dateObject: this.state.dateObject.subtract(1, curr)
	    });
	  };
	onNext = () => {
	    let curr = "";
	    if (this.state.showYearTable == true) {
	      curr = "year";
	    } else {
	      curr = "month";
	    }
	    this.setState({
	      dateObject: this.state.dateObject.add(1, curr)
	    });
	  };
	  
	  
	  
	  selectDay = (day) =>{
		  this.setState({
			  selectedDate: day,
		  });
	  }
	
	

	render(){
		

		return(
			<div>
				<h2>Calendar</h2>
				
				<div className="calendar-container">
				
					<div className="calendar-header">
						<div className="calendar-header-content">
							<span onClick={e => {
						           this.onPrev();
					        		}}>Prev
					        </span>
			        		
							<div className="month-header" onClick={e=> {this.showMonthTable();}}>
								{this.month()}
							</div>
							<div className="year-header" onClick={e=> {this.showYearTable();}}>
								{this.year()}
							</div>
							<span onClick={e => {
						           this.onNext();
					        		}}>Next
					        </span>
						</div>
					</div>
					
					<div className="calendar-pick">
						{
							this.state.showYearTable && 
							<YearTable currentyear={this.year()} getdates={this.getDates} setYear={this.setYear} />
						}
						{
							this.state.showMonthTable && 
							<MonthTable data={this.state.allmonths} setMonth={this.setMonth} />
						}
					</div>
					
					<div className="calendar-body">
						{ this.state.showDateTable && (
							<Month current={this.state.dateObject} />
						)}	
					</div>
				</div>
					
			</div>
		)} 
}

export default Calendar