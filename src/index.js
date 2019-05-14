import React from 'react';
import ReactDOM from 'react-dom';
import ShowSeason from './ShowSeason'

//Class based components----------------------------------------
//class App is an exmaple of class based component. The App Class
//receives functionality/methods from the React.Component via 
//extends. When making a new class only one method is assigned 
//to it the render() method. React expects that a class has many
//methods assigned to it thus needing to extends the 
//React.Component class(think that you are subclassing)


//Rules of State in React---------------------------------------
//1.Mainly used with class components
//2.Do not confuse props with state !!!!!!!
//3.State is a JS object that has contains data about a singular comp.
//4.Updating state on a comp. causes almost instant rerender, so to
//	get a comp to rerender you need to update state.
//5.State need to be initilized when a component is created
//6.State can ONLY be updated using the function 'setState'!!!!


//Constructor() method-------------------------------------------
//This is JS specific method and will run first in any instance of
//the component that it is in. In this exmaple it is the App comp.
// unlike the render() method that is React specific. 
//When defining the constructor() it is called with the props object
//as an argument.

//Super() function------------------------------------------------
//The super() func comes from the React.component class which has its
//own constructor so when we use the constructor()method we are replacing
//the original constructor, however we still want to use the setup code
//within the constructor in the base class so we use super(props);

/*/
Component Lifecycle
	constructor() - good place to do one time setup
	render() - Avoid doing anything besides returning JSX
	
		***content becomes visible on screen***
	
	componentDidMount() - good place to do data loading

		***sit and wait for updates...***

	componentDidUpdate() - good place to do more data loading when
						 state/props change

		***sit and wait until this component is no longer shown***

	componentWillUnmount() - good place to do cleanup (especially for
							 non-React stuff)
*/
class App extends React.Component {
/*	***Using a constructor is only one way to initilaize the state.
	another way to to do this is by setting state = {}; thus not
	needing the constructor***
------------------------------------------------------------------
	constructor(props){
		super(props);
		//To create state we need create the constructor as seen above
		//then call super(props); and since we are looking to work with 
		//the Latitude  we need to assign this.state to the {lat:null}
		//object, null is just a placeholder to say we do not yet know 
		//the Lat. 
		//***This allows this.state to be called from any func within the App Comp.
		//***This is the only time to direct assign only within the constructor
		this.state = {lat: null, errorMes:''};

		window.navigator.geolocation.getCurrentPosition(
			//position and err are callback funcs, they produce the 
			//lat from getCurrentPosition if found or  an error if not found
			(position) => {
				//We called the setState func to update the state.
				//This is the only way to update the state
				this.setState({lat:position.coords.latitude});
			},
			(err) => {
				this.setState({errorMes: err.message});
			}
		);
	}
------------------------------------------------------------------	
*/
	//This line replaced the constructor as a way of intializing
	//the state for this component. This is done thanks to Babel
	//trasnpiling the constructor for us. 	
	state = {lat: null, errorMes: ''};

//ComponetnDidMount() and componentDidUpdate()-------------------
//
	componentDidMount(){
		window.navigator.geolocation.getCurrentPosition(
			//position and err are callback funcs, they produce the 
			//lat from getCurrentPosition if found or  an error if not found
			
			//We called the setState func to update the state.
			//This is the only way to update the state
			position => this.setState({lat:position.coords.latitude}),
			err => this.setState({errorMes: err.message})
		);
	}

	
	//React says we have to define render!!!!
	render() {
		//Below are exmaples of *****conditional rendering*****
		//if statements to display error, the lat, or loading
		//depending on if the condition is met.
		if(this.state.errorMes && !this.state.lat){
			return(
				<div>Error: {this.state.errorMes} </div>
			);
		}
		
		if(this.state.lat && !this.state.errorMes){
			return(
				<div>Latitude: {this.state.lat}
					<ShowSeason />
				</div>
				
			);
		}
		//No need for else...
		return(
			<div>Loading...</div>
		);
	}
}



ReactDOM.render(
	<App />,document.querySelector('#root')
);