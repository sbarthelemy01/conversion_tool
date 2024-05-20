import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import "./Temp.css";

const Temp = () => {

	const [unit1, setUnit1] = useState(''); //for units
	const [unit2, setUnit2] = useState('');

	const [input, setInput] = useState(''); // for input and output values
	let [output, setOutput] = useState('');


	const handleCalc = () => { //update output box on button click
		
		if (input !== '') {
			if (unit1 !== unit2) { //make sure that units are not the same
				
				if (unit1 === "°C") { //convert from °C to °F
					if (unit2 === "°F") {

						output =  (input * (9/5)) + 32; // °F = (°C * (9/5)) + 32 <- https://www.calculatorsoup.com/ conversion
						output = Math.round(output); //round temp as whole number

						if (output !== 0) {

							setOutput(output);
						}
						
					}
					//console.log("Error"); //else put out an error or don't do anything
				}

				if (unit1 === "°F") { //convert from °F to °C
					if (unit2 === "°C") {
						output =  (input - 32) / (9/5); // °C = (°F - 32) ÷ (9/5)
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
		//TODO: reset output box when user clicks on input box or unit1 box
		
	};


	return (
		<div className="rect">
			<h1>Temperature</h1>

			<input id="box1" type="number" onChange={e => setInput(e.target.value)}/>

			<select id="dropdown1" 
				value={unit1}
				onChange={e => setUnit1(e.target.value)}
		  	>
				<option value=""></option>
				<option value="°C">°C</option>
				<option value="°F">°F</option>

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
				<option value="°C">°C</option>
				<option value="°F">°F</option>

			</select>

		</div>
	);
};

export default Temp;
