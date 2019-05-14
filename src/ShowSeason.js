import React from 'react';


//The getSeason() func is created to reduce amount of logic
//within the functional comp.

//Function is set to take the lat and month as parameters
//the ternary operater is used to simplify the if and 
//return statements to return the proper season depending on
//the month and what hemisphere the user is in(from the lat)
const getSeason = (lat, month) => {
	if (month > 2 && month <9){
		return lat > 0 ? 'summer' : 'winter';
	} else{
		return lat > 0 ? 'winter' : 'summer';
	}
}

//Created ShowSeason comp. to display seasons based
//on user location and time of year.

//Since a prop was used in the App Compoment we need to pass the
//props as an parameter of ShowSeason so that we can use props
//within the Showseaon component



const ShowSeason = (props) => {
	//Here the getSeason() is called, getting the lat from
	//props.lat, and the month from new Date().getmonth().
	//This passes in the values of needed
	const season = getSeason(props.lat, new Date().getMonth());

	const text = season === 'winter' ? "Baby it's cold outside!" : 
							"Let's go to the beach!"
	const icon = season === 'winter' ? 'snowflake' : 'hotjar';

	return(
		
		<div> 
			<i className={`${icon} icon`}/>
			<h1>{text}</h1>
			<i className={`${icon} icon`}/>
		</div>
	);
};

export default ShowSeason;