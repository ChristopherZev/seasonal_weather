import React from 'react';
import ReactDOM from 'react-dom';
import ShowSeason from './ShowSeason'

const App = () => {
	return(
		<div> Hello!
			<ShowSeason/>
		</div>
		
	);
};



ReactDOM.render(
	<App />,document.querySelector('#root')
);