/*import React, { useEffect, useState } from "react";
import Axios from 'axios';
import Select from 'react-select'; //for use in creating searchable dropdowns
import IconButton from '@mui/material/IconButton';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import {Countries} from './Countries.js';
import "./Currency.css";
*/

/*
Source help for searchable dropdowns:
https://react-select.com/home 
https://www.digitalocean.com/community/tutorials/react-react-select
https://www.dhiwise.com/post/how-to-implement-a-react-search-bar-with-dropdown 

*/

/*
YouTube help:  DELETE
https://www.youtube.com/watch?v=XN5elYWiSuw
https://www.youtube.com/watch?v=8kR8ahbeftE 

https://edisondevadoss.medium.com/react-currency-converter-application-9d579c902a78 

//API key:  https://v6.exchangerate-api.com/v6/5719e30838125774ff1345fd/latest/USD

*/

//API source help: https://blog.logrocket.com/build-dynamic-currency-converter-ecommerce-react-app/ 
//https://openexchangerates.org/api/latest.json?app_id=54f59ce0f37d4c6eaf2972a402446648

const Currency = () => {

	const [rates, setRates] = useState(); //stores and updates exchange rates(currencies)
	const [ratesFetched, setRatesFetched] = useState(false);

	const [country1, setCountry1] = useState(null); 
	const [country2, setCountry2] = useState(null);

	const [input, setInput] = useState(''); 
	let [output, setOutput] = useState('');


	const handleCalc = () => { //updates output box
		
		if (input !== '') {
			if (country1 !== country2) { //countries must not be the same
				
				if (country1 !== "") { 
					if (country2 !== "") {






						/*output =  input / 1.609344; // d(mi) = d(km) / 1.609344 <- https://www.rapidtables.com/ conversion
						output = Math.round(output); //round temp as whole number

						if (output !== 0) {

							setOutput(output);
						}
						*/
						
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
				//onChange={opt => setCountry1(opt.label, opt.value)}
				onChange={opt => setCountry1(opt.label.substring(opt.label.length - 4, opt.label.length - 1), opt.value)} //first part extracts the currency for the country/territory
				//onChange={opt => console.log(opt.label.substring(opt.label.length - 4, opt.label.length - 1), opt.value)} 
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
