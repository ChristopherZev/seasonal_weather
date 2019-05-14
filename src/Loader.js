import React from 'react';

//Added props to make this comp more reusable by using props.loadMes
//instead of hard coding a message. Also added a default.props to 
//as an alt text in case comp does not display the message.
const Loader = (props) => {
	return(
	  <div className="ui active dimmer">
	    <div className="ui big text loader">{props.loadMes}</div>
	  </div>
	);
};

Loader.defaultProps = {
	loadMes: 'Loading...'
};

export default Loader;