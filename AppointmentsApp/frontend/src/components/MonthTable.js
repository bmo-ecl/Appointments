import React from 'react'
	
let MonthTable = props =>{
		let months = [];
		
		props.data.map(data => {
	      months.push(
	        <td key={data} onClick={() => props.setMonth(data)} >
	          <span>{data}</span>
	        </td>
	      );
		});
		
		let rows =[];
		let cells = [];
		
		months.forEach((row, i) => { 
			   if (i % 3 !== 0 || i === 0) { // except zero index 
			       cells.push(row); 
			   } else { 
			       rows.push(cells); 
			       cells = [];
			       cells.push(row); 
			   }
			
			});
		rows.push(cells); // add last row
			
			
		let monthlist = rows.map((d, i) => {
		   return <tr key={i}>{d}</tr>;
		});
		
		
		
		
		
		return (
			<table className="calendar-month">
		        <thead>
		          <tr>
		            <th colSpan="4">Select a Month</th>
		          </tr>
		        </thead>
		        <tbody>{monthlist}</tbody>
	      </table>	
		);
		

	}
	
	
export default MonthTable		


