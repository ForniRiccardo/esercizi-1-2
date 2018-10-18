import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';


const Li = styled.li`
  background-color: red;
  border: 2px solid black;
  width:120px;
  font-size:22;
  text-align:center;
`

class App extends React.Component {
  constructor() {
  	super();
    this.state = {
    	StatoAttuale: '', //scitta che compare dentro al submit
        coseDaFare: []  ,//vettore oggetti todo
		openL:false,
		p1:false,
		p2:false,
		p3:false,
		p4:false,
		ping:true
    };
    
    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmitText = this.onSubmitText.bind(this);
	
  }
  
  onChangeText(event) {
  	this.setState({ StatoAttuale: event.target.value });
	}
  
  onSubmitText(event) {
    event.preventDefault()
	if(this.state.StatoAttuale=="3"&& this.state.openL==false && this.state.p1==false ){
		this.setState({
		p1:true,
		StatoAttuale: '', //We clean the input text
		coseDaFare: [...this.state.coseDaFare, this.state.StatoAttuale]
		});
	}
	if(this.state.StatoAttuale=="1"&& this.state.openL==false && this.state.p1==true && this.state.p2==false){
		this.setState({
	    p2:true,
		StatoAttuale: '', //We clean the input text
		coseDaFare: [...this.state.coseDaFare, this.state.StatoAttuale]
		});
	}
	if(this.state.StatoAttuale=="0"&& this.state.openL==false && this.state.p1==true && this.state.p2==true  && this.state.p3==false){
		this.setState({
		p3:true,
		StatoAttuale: '', //We clean the input text
		coseDaFare: [...this.state.coseDaFare, this.state.StatoAttuale]
		});
	}
	if(this.state.StatoAttuale=="8"&& this.state.openL==false && this.state.p1==true && this.state.p2==true  && this.state.p3==true && this.state.p4==false){
		this.setState({
	    p4:true,
		openL:true,
		StatoAttuale: '', //We clean the input text
		coseDaFare: [...this.state.coseDaFare, this.state.StatoAttuale],
		coseDaFare: [ "","premi invio ancora"]
		});
	}
	if(this.state.openL==true){
		this.setState({
		StatoAttuale: '', //We clean the input text
		coseDaFare: [..."sei stato bravo"]
		});
	}
	}

  render() {
    return (
      <div>
	  <h1>TROVA LA PASSWORD DELLA CASSA FORTE (inserisci solo numeri)</h1>
        <form onSubmit={this.onSubmitText}>
          <input value={this.state.StatoAttuale} onChange={this.onChangeText} />
          <button>Submit</button>
        </form>
        <ul>
        {
          this.state.coseDaFare.map((todo, index) => <Li key={index}>{todo}</Li>)
        }
        </ul>
      </div>
    )
  }
}
export default App;
