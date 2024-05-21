import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import "./Length.css";

const Length = () => {

	const [unit1, setUnit1] = useState(''); 
	const [unit2, setUnit2] = useState('');

	const [input, setInput] = useState(''); 
	let [output, setOutput] = useState('');
	let [output2, setOutput2] = useState(''); // for ft + in conversion


	const handleCalc = () => { 
		
		if (input !== '') {
			if (unit1 !== unit2) { //make sure that units are not the same
				
				if (unit1 === "cm") { //convert from cm to in
					if (unit2 === "in") {

						output =  input / 2.54; // length(inch) = length(cm) / 2.54 <- https://www.rapidtables.com/ conversion
						output = Math.round(output); //round as a whole number

						let whole = Math.floor(output / 12); //in to ft + in conversion
						let remainder = output % 12;
						output2 = whole + "ft " + remainder + "in";
						
						if (output !== 0) {

							setOutput(output);
							setOutput2(output2);
							//console.log(whole + "ft " + remainder + "in");
						}
						
					}
					//console.log("Error"); //else put out an error or don't do anything
				}

				if (unit1 === "in") { //convert from in to cm
					if (unit2 === "cm") {
						output =  input * 2.54; // length(inch) = length(cm) x 2.54
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

	//TODO: clear the output box when input value is set to '' or when user clicks inside input box
	//TODO: add conversion with ft + in

	return (
		<div className="rect">
			<h1>Length</h1>

			<input id="box1" type="number" min="0" onChange={e => setInput(e.target.value)}/>

			<select id="dropdown1" 
				value={unit1}
				onChange={e => setUnit1(e.target.value)}
		  	>
				<option value=""></option>
				<option value="cm">cm</option>
				<option value="in">in</option>

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
				<option value="cm">cm</option>
				<option value="in">in</option>

			</select>

			<p id="output2">{output2}</p>

		</div>
	);
};

export default Length;
