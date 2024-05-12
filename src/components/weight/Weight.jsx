import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import "./Weight.css";

const Weight = () => {

	/*storing selected value in a state
	source help:https://react.dev/reference/react-dom/components/select
				https://www.altcademy.com/blog/how-to-get-the-value-of-a-dropdown-button-in-reactjs/#:~:text=Storing%20the%20Selected%20Value%20in%20a%20State,-In%20many%20cases&text=In%20ReactJS%2C%20we%20use%20states,for%20us%20to%20use%20later.&text=In%20this%20updated%20code%2C%20we,setSelectedFruit%20that%20updates%20the%20state.
	*/
	const [unit1, setUnit1] = useState(' ');
	const [unit2, setUnit2] = useState(' ');

	const [input1, setInput1] = useState(' ');

	const handleCalc = () => { //will show the conversion on button click (in the second box)
		//console.log(input1 + unit1 + "=  " + unit2);
		
	};

	return (
		<div className="rect">
			<h1>Weight</h1>

			{/* updating value inside input field
			source help: https://medium.com/geekculture/using-react-hooks-to-get-input-value-9e0aa19b6b37*/}
			<input id="box1" type="number" min="0" onChange={e => setInput1(e.target.value)}/>

			<select id="dropdown1" 
				value={unit1}
				onChange={e => setUnit1(e.target.value)}
		  	>
				<option value="none selected"> </option>
				<option value="lbs">lbs</option>
				<option value="kg">kg</option>

			</select>


			<IconButton className="calc" onClick={() => handleCalc()}>
				<SwapHorizIcon fontSize="large"/>
			</IconButton>


			<input id="box2" type="number" min="0" />

			<select id="dropdown2"
				value={unit2}
				onChange={e => setUnit2(e.target.value)}
			>
				<option value="none selected"> </option>
				<option value="lbs">lbs</option>
				<option value="kg">kg</option>

			</select>

		{/* 
			<p>{unit1}</p>
			<p>{unit2}</p>
		*/}

		</div>
	);
};

export default Weight;