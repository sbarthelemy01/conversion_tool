import React, { useState } from "react";
import Select from 'react-select'; //for use in creating searchable dropdowns
import IconButton from '@mui/material/IconButton';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import {Countries} from './Countries.js';
import "./Currency.css";

/*
Source help for searchable dropdowns:
https://react-select.com/home 
https://www.digitalocean.com/community/tutorials/react-react-select
https://www.dhiwise.com/post/how-to-implement-a-react-search-bar-with-dropdown 

*/

const Currency = () => {

	const [country1, setCountry1] = useState(null); 
	const [country2, setCountry2] = useState(null);

	const [input, setInput] = useState(''); 
	let [output, setOutput] = useState('');


	const handleCalc = () => { //updates output box
		
		if (input !== '') {
			if (country1 !== country2) { //countries must not be the same
				
				if (country1 !== "") { 
					if (country2 !== "") {






						output =  input / 1.609344; // d(mi) = d(km) / 1.609344 <- https://www.rapidtables.com/ conversion
						output = Math.round(output); //round temp as whole number

						if (output !== 0) {

							setOutput(output);
						}
						
					}
					//console.log("Error"); //else put out an error or don't do anything
				}

				/*if (unit1 === "mph") { //convert from mi to km
					if (unit2 === "km/h") {
						output =  input * 1.609344; // d(km) = d(mi) × 1.609344
						output = Math.round(output);

						if (output !== 0) {

							setOutput(output);							
						}

					}
					
					//console.log("Error"); //else statement
				}
				*/
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
			<h1>Currency</h1>

			<input id="box1" type="number" onFocus={ClearFields} min="0" onChange={e => setInput(e.target.value)}/>

			<Select
				className="dropdown1"
				placeholder="Country/Territory"
				options={Countries}
				onChange={opt => setCountry1(opt.label, opt.value)}
				noOptionsMessage={({ inputValue }) => `No result found for "${inputValue}"`}
			/>


			<IconButton className="calc" onClick={() => handleCalc()}>
				<SwapHorizIcon fontSize="large"/>
			</IconButton>


			<input id="box2" value={output} onChange={e => setOutput(e.target.value)} type="number" />

			<Select
				className="dropdown2"
				placeholder="Country/Territory"
				options={Countries}
				onChange={opt => setCountry2(opt.label, opt.value)}
				noOptionsMessage={({ inputValue }) => `No result found for "${inputValue}"`}
			/>

		</div>
	);
};

export default Currency;
