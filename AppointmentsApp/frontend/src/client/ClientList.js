import React, {Component} from 'react';
import {ReactSelectize, SimpleSelect} from 'react-selectize';
import ServiceList from './ServiceList';
 
class ClientList extends Component{
	constructor(props){
		super(props);
		this.state ={
				clientid: 0,
				servicelist:[],
				isLoading:true,
		};
		
		this.selectClient = this.selectClient.bind(this);
	}
	
	
	async selectClient (client){
		if(client === undefined){
			
			this.setState({clientid: 0, servicelist: [], isLoading:false});
		}else{
			
			let id = client.value;
			const response = await fetch('/api/clients/' + id + '/services');
			const list = await response.json();
			this.setState({clientid: id, servicelist: list, isLoading:false});
			
		}
	}
	
	
	
	
	render(){
		
		
		const clientList = this.props.clientlist.map(client=>{
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
		
		const {clientid, servicelist, isLoading} = this.state;
		
		return(
				<div className="client-filter">
					<h3>Busca tu centro de servicio</h3>
					<div style={{display:"table-row"}}>
						<SimpleSelect placeholder="Seleccione un Centro" tethered="true" theme="material"  
						onValueChange={value => this.selectClient(value)} >
							{clientList}</SimpleSelect>
						
					</div> 
					<ServiceList clientid={clientid} servicelist={servicelist} isLoading={isLoading} />
				</div>
				
		)
	}
	
	
	
	
}
export default ClientList