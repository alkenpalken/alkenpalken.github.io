import React, { Component } from "react";
import { currency, dropdown } from "./fakeData";
import "./main.css";

export default class main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: "",
      currency1: "usd"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }
  handleChange(event) {
    this.setState({currency1: event.target.value});
    console.log(this.state.currency1);
  }
  handleChangeInput =(event)=>{
    this.setState({value1:event.target.value});
    console.log(this.state.value1);
  };

  render() {
    const valueF = this.state.value1;
    const currencyS = this.state.currency1;
    let sum = 0;
    if(currencyS === "usd") {
      sum = valueF * 462.50;
    }else if(currencyS==="eur") {
      sum = valueF * 507;
    }else if(currencyS==="rub") {
      sum = valueF * 5.75;
    }else if(currencyS==="cny") {
      sum = valueF * 95;
    }

    return (
      <div className="main">
        <div className="currency_rate">
          <div className="kzt">
            <h2>Курс валют на 28-04-2022 с</h2>
            <img className="kazakh" src="https://storage.ifin.kz/currency/kzt.svg" alt="current-icon" />
          </div>
          <div className="other_cur">
            {
              currency.map(currency => (
                <div className={currency.name}>
                  <h3>USD</h3>
                  <img className="kazakh" src={`https://storage.ifin.kz/currency/${currency.name}.svg`} alt="current-icon" />
                  <p>{currency.currency} тенге</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className="currency_converter">
          <div className="convert_text"><h2>Конвертер валют</h2></div>
          <div className="converter">
            <input type="number" className="first_in" name="firstValue" value={valueF} onChange={this.handleChangeInput}/>
            <select className="first_sel">
              <option value="kzt">KZT</option>
            </select>
            <input type="number" className="second_in" name="secondValue" value={sum}/>
            <select className="second_sel" value={this.state.currency1}  onChange={this.handleChange}>
              {
                dropdown.map(dropdown => (<option value={dropdown}>{dropdown}</option>))
              }
            </select>
          </div>
        </div>
      </div>
    );
  }
}
