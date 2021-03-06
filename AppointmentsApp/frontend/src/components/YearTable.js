import React from 'react'
import moment from 'moment';


let YearTable = props => {
	
	let months = [];
    let nextsix = moment().set("year", props.currentyear).add("year", 6).format("Y");
    let b4six = moment().set("year", props.currentyear).subtract("year", 5).format("Y");
    
    let twelveyears = props.getdates(b4six, nextsix);
    
    twelveyears.map(data => {
        months.push(
          <td
            key={data}
            className="calendar-month"
            onClick={() => {
              props.setYear(data);
            }}
          >
            <span>{data}</span>
          </td>
        );
      });
      let rows = [];
      let cells = [];

      months.forEach((row, i) => {
        if (i % 3 !== 0 || i === 0) {
          cells.push(row);
        } else {
          rows.push(cells);
          cells = [];
          cells.push(row);
        }
      });
      rows.push(cells);
      
      let yearlist = rows.map((d, i) => {
        return <tr key={i}>{d}</tr>;
      });
      
      return (
    	      <table className="calendar-month">
    	        <thead>
    	          <tr>
    	            <th colSpan="4">Select a Year</th>
    	          </tr>
    	        </thead>
    	        <tbody>{yearlist}</tbody>
    	      </table>
    	    );

    
}

export default YearTable

