import React, { Component } from "react";
import axios from 'axios';
import Select from 'react-select'; //for use in creating searchable dropdowns
import IconButton from '@mui/material/IconButton';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import InfoIcon from '@mui/icons-material/Info';
import Tooltip from '@mui/material/Tooltip';
import {Countries} from './Countries.js';
import "./Currency.css";


/*
Source help for searchable dropdowns:
https://react-select.com/home 
https://www.digitalocean.com/community/tutorials/react-react-select
https://www.dhiwise.com/post/how-to-implement-a-react-search-bar-with-dropdown 

API source help: 
https://dev.to/fleepgeek/react-throwaway-app-1-currency-converter--52c7 
https://blog.logrocket.com/build-dynamic-currency-converter-ecommerce-react-app/ 
*/

let api_key = 'wAMerLDGEZqcmLqpUeQP7EjyOHQ1YbyA';
class Currency extends Component {

	state = {
        result: "",
        fromCurrency: "",
        toCurrency: "",
        amount: "",
        currencies: [],

    };

	
    handleCalc = () => {
  
		let from = this.state.fromCurrency;
		let to = this.state.toCurrency;
		let amount = this.state.amount;

		if (this.state.fromCurrency !== this.state.toCurrency) {
			axios
			.get('https://api.currencybeacon.com/v1/convert?api_key=' + api_key +'&from=' + from + '&to=' + to +
				'&amount=' + amount)
			.then((response) => {
				//console.log(response.data);	//response.data gives a log of data (data, from, to, amount, value, etc...)
				//console.log("Amt: " + response.data.value);
				let output = response.data.value;
				this.setState({ result: output.toFixed(2) }) //setting result to 2 decimal places

			})
			.catch((err) => {
				console.log("Error: ", err.message);
			});

		}
		
    };

	ClearFields = () => {	

		if (this.state.amount !== '') { // if the amount field has a value entered in it, clear the fields
		
			this.setState({ amount: ''}) //clear input field when onfocus event is called
			this.setState({ result: ''}) //clear output

			//clearing the pill boxes with the selected countries' currencies
			//document.getElementById("currency1").innerHTML = '';
			//document.getElementById("currency2").innerHTML = '';
		}
	}

	render() {

		return (
			<div className="rect">
				<h1>Currency</h1>

				<input id="box1" name="amount" type="number" min="0" onFocus={this.ClearFields} value={this.state.amount} onChange={ e => this.setState({ amount: e.target.value }) }/>
				<p id="currency1"> {this.state.fromCurrency} </p>

				<Select
					className="dropdown1"
					placeholder="Country/Territory"
					options={Countries}
					val={this.state.fromCurrency}			
					onChange = {(e) => this.setState({ fromCurrency:  e.value.substring(e.value.length - 4, e.value.length - 1) }) }					
					//onChange = {(e) => console.log(this.setState({ fromCurrency:  e.value.substring(e.value.length - 4, e.value.length - 1) })) }
					noOptionsMessage={({ inputValue }) => `No result found for "${inputValue}"`}
				/>
			

				<IconButton className="calc" onClick={this.handleCalc} >
					<SwapHorizIcon fontSize="large"/>
				</IconButton>


				<input id="box2" type="number" value={this.state.result} onChange={e => this.setState({ result: e.target.value })}/>
				<p id="currency2"> {this.state.toCurrency} </p>

				<Select
					className="dropdown2"
					placeholder="Country/Territory"
					options={Countries}
					val={this.state.toCurrency}
					onChange = {(e) => this.setState({ toCurrency :  e.value.substring(e.value.length - 4, e.value.length - 1) }) }					
					noOptionsMessage={({ inputValue }) => `No result found for "${inputValue}"`}
				/>

				<Tooltip className="info"
				title= {
					<>
						<u><b>{"Note"}</b></u>{": Not all countries use decimal points to "} <br/> {"separate the dollars and cents. "} 
						{"For a list of the "} <br/> {"countries that use commas as decimal separators, "} <br/> {"check this "} 
						<a href="https://finance.cornell.edu/treasurer/cash-management/processinginternational/intl-currency#Using%20Comma" target="_blank" rel="noreferrer">{"link"}</a> {"."}
					</>
				}  
				placement="right" arrow>

					<IconButton>
						<InfoIcon />
					</IconButton>
					
				</Tooltip>

			</div>
		);
	};

}

export default Currency;
