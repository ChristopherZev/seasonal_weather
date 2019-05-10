import React from 'react';
import ReactDOM from 'react-dom';
import ShowSeason from './ShowSeason'

const App = () => {
	window.navigator.geolocation.getCurrentPosition(
		(position) => console.log(position),
		(err) => console.log(err)
	);
	return(
		<div> Hello!
			<ShowSeason/>
		</div>
		
	);
};



ReactDOM.render(
	<App />,document.querySelector('#root')
);