import React from 'react';

//Created ShowSeason comp. to display seasons based
//on user location and time of year.

//Since a prop was used in the App Compoment we need to pass the
//props as an parameter of ShowSeason so that we can use props
//within the Showseaon component
const ShowSeason = (props) => {
	return(
		//this line tests that the prop lat works within ShowSeason
		<div>Show me the Season!{props.lat}</div>
	);
};

export default ShowSeason;