import React, {Component} from 'react';
import {SimpleSelect} from 'react-selectize';


class ServiceList extends Component {
		
	render(){
		
		var general = false;
	
		if(this.props.servicelist.length !=  0 && this.props.servicelist.empty == false){
			 const services  = this.props.servicelist.content.map(service=>{
				if(this.props.isLoading){
					return(
							<div>... loading...</div>
					)
				}
				else{
					
					if(service.standard == 1){
						general = true;
					}
					
					return( 
							<option key={service.id} value={service.id} >{service.name}</option>
					)
				}
			});
			 
			if(general == false){
				return(
						<div style={{display:"table-row"}}>
							<SimpleSelect placeholder="Seleccione un Servicio" tethered="true" theme="material" clearable="true" 
								onValueChange={value => this.props.selectService(value)} >
									{services}</SimpleSelect>
						</div> 
						
				)
			}

		}
		
		return(<div></div>)
	}
		

}

export default ServiceList