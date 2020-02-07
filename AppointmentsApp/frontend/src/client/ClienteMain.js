import React, {Component} from 'react';
import './Client.css'
import ClientList from './ClientList';


class ClienteMain extends Component{
	
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
	
	updateDimensions(){
		let aboutcontentStyle_updated = { height: (window.innerHeight - document.getElementById('h1-holder').clientHeight - 50)};
		this.setState({aboutcontentSyle : aboutcontentStyle_updated});
	}
	
	
	async componentDidMount(){
		const response = await fetch('/api/clients');
		const clientlist_updated = await response.json(); 
		this.setState({ clientlist: clientlist_updated, isLoading:false});
		
		this.updateDimensions();
		window.addEventListener("resize", this.updateDimensions.bind(this));
	
	}
	
	
	componentWillUnmount() {
	    window.removeEventListener("resize", this.updateDimensions.bind(this));
	  }

	
	
	
	render(){
		
		return (
			<div className="main">
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
							<div className="calendar-pic"></div>
						</div>
						
					</div>
				</div>
				

			</div>
			
		)
	}
}

export default ClienteMain