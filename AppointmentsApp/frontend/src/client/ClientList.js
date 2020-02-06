import React, {Component} from 'react';
import {ReactSelectize, SimpleSelect} from 'react-selectize';
 
class ClientList extends Component{
	constructor(props){
		super(props);
		this.state ={
				selected: 0,
		};
		
		this.selectClient = this.selectClient.bind(this);
	}
	
	
	selectClient = (client)=>{
		if(client === undefined){
			this.setState({selected: 0});
		}else{
			this.setState({selected: client.value});
		}
		
	}
	
	canBeSubmitted() {
	    const {selected} = this.state;
	    return selected != 0;
	  }
	
	
	render(){
		const isEnabled = this.canBeSubmitted();
		
		let clientList = this.props.clientlist.map(client=>{
			if(this.props.isLoading){
				return(
						<div>... loading...</div>
				)
			}else{
				return( 
						<option key={client.id} value={client.id} >{client.clientName}</option>
				)
			}
		});
		
		return(
				<div className="client-filter">
					<h3>Busca tu centro de servicio</h3>
					<div style={{display:"table-row"}}>
						<SimpleSelect placeholder="Seleccione un Centro" tethered="true" theme="material"  
						onValueChange={value => this.selectClient(value)} >
							{clientList}</SimpleSelect>
						<button disabled={!isEnabled} className="client-enter">ingresar</button>
					</div> 
					
				</div>
				
		)
	}
	
	
	
	
}
export default ClientList