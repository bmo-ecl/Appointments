import React, {Component} from 'react';
import {SimpleSelect} from 'react-selectize';
import ServiceList from './ServiceList';
import { Link } from 'react-router-dom';
import 'react-selectize/themes/material.css';

const EnterButton = props => {
	console.log(props);
	const isEnabled = props.selected !== 0 ?true:false;
	
	if(isEnabled){
		return(
				<button disabled={!isEnabled} className="appointments-enter">
					<Link to={{pathname: "/serviceappts/" + props.selected, state:{serviceid: props.selected}}}>ingresar</Link>
				</button>	
		);
	}else{
		return(
				<button disabled={!isEnabled} className="appointments-enter">ingresar
				</button>
				
		);
	}
	
		
}



class ClientList extends Component{
	constructor(props){
		super(props);
		this.state ={
				clientid: 0,
				servicelist:[],
				isLoading:true,
				serviceid:0,
		};
		
		this.selectClient = this.selectClient.bind(this);
	}
	
	
	async selectClient (client){
		if(client === undefined){
			
			this.setState({clientid: 0, servicelist: [], isLoading:false, serviceid:0});
		}else{
			
			let id = client.value;
			const response = await fetch('/api/clients/' + id + '/services');
			const list = await response.json();
			
			if(list.length != 0 && list.content[0]["standard"] == 1){
				this.setState({clientid: id, servicelist: list, isLoading:false, serviceid:list.content[0]["id"]});
			}else{
				this.setState({clientid: id, servicelist: list, isLoading:false, serviceid:0});
			}
			
			
		}
	}
	
	
	selectService =(service) => {
		if(service ===  undefined){
			this.setState({serviceid: 0});
		}else{
			
			let id = service.value;
			this.setState({serviceid:id});
			
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
						<option key={client.id} value={client.id} >{client.name}</option>
				)
			}
		});
		
		const {clientid, servicelist, isLoading, serviceid} = this.state;
		
		return(
				<div className="client-filter">
					<h3>Busca tu centro de servicio</h3>
					<div className="selection-holder">
						<SimpleSelect placeholder="Seleccione un Centro" tethered="true" theme="material"  
						onValueChange={value => this.selectClient(value)} >{clientList}</SimpleSelect>
						<ServiceList clientid={clientid} servicelist={servicelist} isLoading={isLoading} serviceid={serviceid} selectService={this.selectService} />
					</div>
						
					<EnterButton  selected={serviceid} />
				</div>
				
		)
	}
	
	
	
	
}
export default ClientList