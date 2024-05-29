import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import "./Speed.css"

const Speed = () => {

	const [unit1, setUnit1] = useState(''); 
	const [unit2, setUnit2] = useState('');

	const [input, setInput] = useState(''); 
	let [output, setOutput] = useState('');


	const handleCalc = () => { //updates output box
		
		if (input !== '') {
			if (unit1 !== unit2) { //make sure that units are not the same
				
				if (unit1 === "km/h") { //convert from km to mi
					if (unit2 === "mph") {

						output =  input / 1.609344; // d(mi) = d(km) / 1.609344 <- https://www.rapidtables.com/ conversion
						output = Math.round(output); //round temp as whole number

						if (output !== 0) {

							setOutput(output);
						}
						
					}
					//console.log("Error"); //else put out an error or don't do anything
				}

				if (unit1 === "mph") { //convert from mi to km
					if (unit2 === "km/h") {
						output =  input * 1.609344; // d(km) = d(mi) × 1.609344
						output = Math.round(output);

						if (output !== 0) {

							setOutput(output);							
						}

					}
					
					//console.log("Error"); //else statement
				}
				//console.log("Error");
			}

			/*else {
				console.log("Error"); // if both units are the same

			}*/
		}

		/*else {
			console.log("Error"); // <- Maybe use only this and create a nested if statement?
		}
		*/
		
		
		//TODO: do error checking - issue an alert to user that units should not be same or just don't do anything		
	};

	const ClearFields = () => {	
		let input = document.getElementById("box1"); //clear input field when onfocus event is called
		input.value = '';

		setOutput(''); //clear output
	}

	return (
		<div className="rect">
			<h1>Speed</h1>

			<input id="box1" type="number" onFocus={ClearFields} min="0" onChange={e => setInput(e.target.value)}/>

			<select id="dropdown1" 
				value={unit1}
				onChange={e => setUnit1(e.target.value)}
		  	>
				<option value=""></option>
				<option value="km/h">km/h</option>
				<option value="mph">mph</option>

			</select>


			<IconButton className="calc" onClick={() => handleCalc()}>
				<SwapHorizIcon fontSize="large"/>
			</IconButton>


			<input id="box2" value={output} onChange={e => setOutput(e.target.value)} type="number" />

			<select id="dropdown2"
				value={unit2}
				onChange={e => setUnit2(e.target.value)}
			>
				<option value=""></option>
				<option value="km/h">km/h</option>
				<option value="mph">mph</option>

			</select>

		</div>
	);
};

export default Speed;
