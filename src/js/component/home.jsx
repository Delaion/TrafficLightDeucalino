import React from "react";
import ReactDom from "react-dom";
import TrafficLight from "./TrafficLight.jsx"; 

//create your first component
const Home = () => {
	return (
			<TrafficLight/>
	);
};

ReactDOM.render(<Home />, document.querySelector('root'));

export default Home;
