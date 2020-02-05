import React, {Component} from 'react';


class ClientList extends Component{
	constructor(props){
		super(props);
		this.state ={
				list :[],
				filtered:[],
				isLoading: true
		};
		
		this.clientSearchInput = this.clientSearchInput.bind(this);
	}
	
	



	componentDidMount(){
		this.setState({filtered:this.props.clientlist});
	}
	
	componentWillReceiveProps(nextProps) {
		  this.setState({filtered: nextProps.clientlist});
		}
	
	
	clientSearchInput (e){
		  // Variable to hold the original version of the list
	    let currentList = [];
	        // Variable to hold the filtered list before putting into state
	    let newList = [];

	        // If the search bar isn't empty
	    if (e.target.value !== "") {
	            // Assign the original list to currentList
	      currentList = this.props.clientlist;

	            // Use .filter() to determine which items should be displayed
	            // based on the search terms
	      newList = currentList.filter(item => {
	                // change current item to lowercase
	        const lc = item.clientName.toLowerCase();
	                // change search term to lowercase
	        const filter = e.target.value.toLowerCase();
	                // check to see if the current list item includes the search term
	                // If it does, it will be added to newList. Using lowercase eliminates
	                // issues with capitalization in search terms and search content
	        return lc.includes(filter);
	      });
	    } else {
	            // If the search bar is empty, set newList to original task list
	      newList = this.props.clientlist;
	    }
	        // Set the filtered state based on what our rules added to newList
	    this.setState({
	      filtered: newList
	    });

	}
	
	
	render(){
		let clientList = this.state.filtered.map(client=>{
			if(this.props.isLoading){
				return(
						<div>... loading...</div>
				)
			}else{
				return(
						<li key={client.id} className="client-li" onClick={()=> this.selectClient(client)} >
						{client.clientName}</li>
				)
			}
		});
		
		return(
				<div className="client-filter">
					<h3>Busca tu centro de servicio</h3>
					<div style={{display:"inline-block"}}>
						<input type="text" className="client-input" onChange={this.clientSearchInput} />
						<button className="client-enter">ingresar</button>
					</div>
					<div><ul className="client-ul">{clientList}</ul></div>	
				</div>
				
		)
	}
	
	
	
	
}
export default ClientList