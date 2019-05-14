//Webpack will see we are importing a css file, it will then take
//the contents of the css file and and place them within the 
//index.html file, a css import must place before the react import
import './ShowSeason.css';
import React from 'react';

//Made the seasonConfig object to store the summer and winter object
//values, text and iconName 
const seasonConfig = {
	summer:{
		text: "Let's go to the beach!",
		iconName: 'hotjar'
	},
	winter:{
		text: "Baby it's cold outside",
		iconName: 'snowflake'
	}
};

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
};

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
	//Here I destructure out the values text and iconName from
	//seasonConfig at season to be used by iconName below for 
	//the same functionality as the previous verbose ternary operations
	const {text, iconName } = seasonConfig[season];

	return(
		
		<div className={`show-season ${season}`}> 
			<i className={`icon-left massive ${iconName} icon`}/>
			<h1> {text}</h1>
			<i className={`icon-right massive ${iconName} icon`}/>
		</div>
	);
};

export default ShowSeason;