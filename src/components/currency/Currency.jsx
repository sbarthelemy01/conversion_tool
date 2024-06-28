import React, { Component } from "react";
import axios from 'axios';
import $ from 'jquery';
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

API source help: 
API key -> https://openexchangerates.org/api/latest.json?app_id=54f59ce0f37d4c6eaf2972a402446648
https://dev.to/fleepgeek/react-throwaway-app-1-currency-converter--52c7 
https://blog.logrocket.com/build-dynamic-currency-converter-ecommerce-react-app/ 
*/

const api_key = 'wAMerLDGEZqcmLqpUeQP7EjyOHQ1YbyA';
const endpoint = 'live';
class Currency extends Component {

	state = {
        result: "",
        fromCurrency: "",
        toCurrency: "",
        amount: "",
        currencies: [],

    };

    
	componentDidMount() {
        axios
            //.get("https://openexchangerates.org/api/latest.json?app_id=54f59ce0f37d4c6eaf2972a402446648")
			.get('https://api.currencybeacon.com/v1/latest?api_key=' + api_key)
            .then(response => {
                
                const currencyArray = ["USD"] //initializing currencies from api starting with the base currency (USD)
                for (const key in response.data.rates) {
                    currencyArray.push(key)
                }
                this.setState({ currencies: currencyArray.sort() })
            })
            .catch(err => {
                console.log("Error:", err.message);
            });
    }
	
	
	
    handleCalc = () => {
        /*if (this.state.fromCurrency !== this.state.toCurrency) {
            axios
                //.get(`https://openexchangerates.org/api/latest?base=${this.state.fromCurrency}&symbols=${this.state.toCurrency}`)
				.get('https://api.currencybeacon.com/' + endpoint + '?api_key=' + api_key +'&from=' + this.state.fromCurrency + '&to=' + this.state.toCurrency + '&amount=' + this.state.amount)
                .then(response => {
                    const result = this.state.amount * (response.data.rates[this.state.toCurrency]);
                    this.setState({ result: result.toFixed(3) })
                })
                .catch(err => {
                    console.log("Error:", err.message);
                });
        } */

		
		let from = this.state.fromCurrency;
		let to = this.state.toCurrency;
		let amount = this.state.amount;

		
		$.ajax({
			url: 'https://api.currencybeacon.com/v1/convert?api_key=' + api_key +'&from=' + from + '&to=' + to +
			'&amount=' + amount,
			dataType: 'json',
			success: function(json) {
			
			console.log("From: " + from);
			console.log("To: " + to);
			console.log("Amt: " + amount);
			
			// access the conversion result in json.result
			console.log(json.result);
			
			}
		});
		


		
		
    };

	render() {

		return (
			<div className="rect">
				<h1>Currency</h1>

				<input id="box1" name="amount" type="number" min="0" value={this.state.amount} onChange={ e => this.setState({ amount: e.target.value }) }/>

				<Select
					className="dropdown1"
					//name="from"
					placeholder="Country/Territory"
					options={Countries}
					val={this.state.fromCurrency}
					//onChange={opt => setCountry1(opt.label.substring(opt.label.length - 4, opt.label.length - 1), opt.value)} //first part extracts the currency for the country/territory
					//onChange={opt => console.log(opt.label, opt.value.substring(opt.value.length - 4, opt.value.length - 1))} 
					
					
					//onChange={(e) => this.handleCurrencyChange(e)}
					//onChange={(e) => console.log(e)} //this passes both the label and value in e
					//onChange={(e) => console.log(e.value.substring(e.value.length - 4, e.value.length - 1))}
					//onChange={(e) => console.log(this.handleCurrencyChange( e.value.substring(e.value.length - 4, e.value.length - 1)) )}  //extracting the currency for the country/territory selected

					//onChange={(e) => this.handleCurrencyChange( e.value.substring(e.value.length - 4, e.value.length - 1) ) }  //extracting the currency for the country/territory selected
					//onChange = {this.setState({ fromCurrency: e.target.value }) }
					
					onChange = {(e) => this.setState({ fromCurrency:  e.value.substring(e.value.length - 4, e.value.length - 1) }) }					
					//onChange = {(e) => console.log(this.setState({ fromCurrency:  e.value.substring(e.value.length - 4, e.value.length - 1) })) }

                    
					noOptionsMessage={({ inputValue }) => `No result found for "${inputValue}"`}
				/>
			


				<IconButton className="calc" onClick={this.handleCalc} >
					<SwapHorizIcon fontSize="large"/>
				</IconButton>


				<input id="box2" value={this.state.result} type="number" />

				<Select
					className="dropdown2"
					//name="to"
					placeholder="Country/Territory"
					options={Countries}
					val={this.state.toCurrency}

					//onChange={opt => setCountry2(opt.label, opt.value)}
					//onChange={opt => console.log(opt.label.substring(opt.label.length - 4, opt.label.length - 1), opt.value)} 
					
					
					//onChange={(e) => this.handleCurrencyChange(e)}
					//onChange={(e) => this.handleCurrencyChange( e.value.substring(e.value.length - 4, e.value.length - 1)) }  //extracting the currency for the country/territory selected
					//onChange={(e) => console.log(this.handleCurrencyChange( e.value.substring(e.value.length - 4, e.value.length - 1) ))}
					
					onChange = {(e) => this.setState({ toCurrency :  e.value.substring(e.value.length - 4, e.value.length - 1) }) }					
					//onChange = {(e) => console.log(this.setState({ toCurrency :  e.value.substring(e.value.length - 4, e.value.length - 1) })) }


					noOptionsMessage={({ inputValue }) => `No result found for "${inputValue}"`}
				/>

				<h3>{this.state.fromCurrency}, {this.state.toCurrency}</h3>

			</div>
		);
	};

}

//

export default Currency;
