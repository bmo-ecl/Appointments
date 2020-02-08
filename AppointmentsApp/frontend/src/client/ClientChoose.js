import React, {Component} from 'react';
import ClientList from './ClientList';
import './Client.css'


class ClientChoose extends Component{
	
	constructor(props){
		super(props);
		this.state ={
				clientlist : [],
				isLoading:true,
				aboutcontentStyle : {
						height: (window.innerHeight - 150),
				}
		};
		
	}
	
	async componentDidMount(){
		const response = await fetch('/api/clients');
		const clientlist_updated = await response.json(); 
		this.setState({ clientlist: clientlist_updated, isLoading:false});

	}
	
	

	
	render(){
		
		return (
			<div className="main">
				<div>
				<div className="h1-holder" id="h1-holder">
				<h1>Más reservaciones, menos planeación</h1>
				<div>Agenda, cancela o cambia tus citas en linea fácil y rapidamente</div>
			</div>
			
			
			
			<div className="about-container" >
				<div className="about-content" style={this.state.aboutcontentStyle}>
					<div className="about a-left">
						<ClientList clientlist={this.state.clientlist} isLoading={this.state.isLoading} />
					</div>
					<div className="about a-right">
						<div className="calendar-pic"></div>.
					</div>
					
				</div>
			</div>
				</div>

			</div>
			
		)
	}
}

export default ClientChoose