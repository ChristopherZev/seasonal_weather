import React from 'react';
import ReactDOM from 'react-dom';
import ShowSeason from './ShowSeason'

//class App is an exmaple of class based component. The App Class
//receives functionality/methods from the React.Component via 
//extends. When making a new class only one method is assigned 
//to it the render() method. React expects that a class has many
//methods assigned to it thus needing to extends the 
//React.Component class(think that you are subclassing)

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