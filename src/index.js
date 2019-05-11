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

class App extends React.Component {
	render() {
		
		window.navigator.geolocation.getCurrentPosition(
			(position) => console.log(position),
			(err) => console.log(err)
		);
		return(
			<div> Latitude:
				<ShowSeason/>
			</div>
		);
	}
}


ReactDOM.render(
	<App />,document.querySelector('#root')
);