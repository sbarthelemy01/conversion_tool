import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import "./Weight.css";

const Weight = () => {

	/*storing selected value in a state
	source help:https://react.dev/reference/react-dom/components/select
				https://www.altcademy.com/blog/how-to-get-the-value-of-a-dropdown-button-in-reactjs/#:~:text=Storing%20the%20Selected%20Value%20in%20a%20State,-In%20many%20cases&text=In%20ReactJS%2C%20we%20use%20states,for%20us%20to%20use%20later.&text=In%20this%20updated%20code%2C%20we,setSelectedFruit%20that%20updates%20the%20state.
	*/
	const [unit1, setUnit1] = useState('');
	const [unit2, setUnit2] = useState('');

	//updating value in the input tag
	//source help: https://react.dev/reference/react-dom/components/input#reading-the-input-values-when-submitting-a-form
	const [input, setInput] = useState('');
	let [output, setOutput] = useState('');
	//let ans = Number(output);


	const handleCalc = () => { //will show the conversion on button click (in the second box)
		//console.log(input + unit1 + "=  " + unit2);
		
		if (input !== '') {
			if (unit1 !== unit2) { //make sure that units are not the same
				//put calculated value into output box
				//source help: https://forum.freecodecamp.org/t/place-a-calculated-value-from-javascript-into-an-input-field/435749/2
							   //https://stackoverflow.com/questions/28695617/how-to-get-a-number-value-from-an-input-field
				if (unit1 === "lbs") { //convert from lbs to kg
					if (unit2 === "kg") {

						output =  input * 0.4536; // mass(kg) = mass(lb) * 0.4536 <- https://www.calculatorsoup.com/ conversion
						output = output.toFixed(2); //round to two decimal places; source help: https://coreui.io/blog/how-to-round-a-number-to-two-decimal-places-in-javascript/

						if (output !== 0.00) {

							setOutput(output);
						}
						
					}
					//console.log("Error"); //else put out an error or don't do anything
					//^ if unit2 = lbs or " "
				}

				if (unit1 === "kg") { //convert from kg to lbs
					if (unit2 === "lbs") {
						output =  input * 2.205; // mass(lb) = mass(kg) * 2.205
						output = output.toFixed(2);

						if (output !== 0.00) {

							setOutput(output);							
						}

					}
					
					//console.log("Error"); //else statement; if unit2 = kg or " "
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
			<h1>Weight</h1>

			{/* updating value inside input field
			source help: https://medium.com/geekculture/using-react-hooks-to-get-input-value-9e0aa19b6b37*/}
			<input id="box1" type="number" min="0" onChange={e => setInput(e.target.value)}/>

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


			<input id="box2" value={output} onChange={e => setOutput(e.target.value)} type="number" />

			<select id="dropdown2"
				value={unit2}
				onChange={e => setUnit2(e.target.value)}
			>
				<option value="none selected"> </option>
				<option value="lbs">lbs</option>
				<option value="kg">kg</option>

			</select>

		</div>
	);
};

export default Weight;