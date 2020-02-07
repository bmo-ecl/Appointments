import React, {Component} from 'react';
import {ReactSelectize, SimpleSelect} from 'react-selectize';

const EnterButton = props => {
	console.log(props.selected);
	const isEnabled = props.selected != 0 ?true:false;
	return(<button disabled={!isEnabled} className="client-enter">ingresar</button>);
}




class ServiceList extends Component {
	constructor(props){
		super(props);

		this.state={
				selectedservice: 0
		}
	};
	
	selectService = (service)=>{
		console.log(service);
		if(service === undefined){
			this.setState({selectedservice:0});
		}else{
			this.setState({selectedservice:service.value});
			
		}
		
	}
	
	
	render(){
		
		console.log(this.props.clientid);
		
		if(this.props.servicelist.length != 0 && this.props.servicelist.empty == false){
			 const services  = this.props.servicelist.content.map(service=>{
				if(this.props.isLoading){
					return(
							<div>... loading...</div>
					)
				}else{
					return( 
							<option key={service.id} value={service.id} >{service.serviceName}</option>
					)
				}
			});
			 

			return(
					<div style={{display:"table-row"}}>
						<SimpleSelect placeholder="Seleccione un Servicio" tethered="true" theme="material"  
							onValueChange={value => this.selectService(value)} >
								{services}</SimpleSelect>
						<EnterButton  selected={this.state.selectedservice} />
					</div> 
					
			)

		}else{
			return <EnterButton  selected={this.state.selectedservice}/>
		}
		

	}
		

}

export default ServiceList