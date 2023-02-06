
import './App.css';

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {issLatitude: '',
  issLongitude: ''}
  }

  componentDidMount = async () => {
    await fetch('http://api.open-notify.org/iss-now.json')
    .then(response => response.json())
    .then(data => {
        this.setState({issLatitude: data.iss_position.latitude, issLongitude: data.iss_position.longitude})
    })
  }

  render() {
  return (
    <>
    <div className="App">
      <div className='container'>
        <h1 className='title'>Current Location of International Space Station</h1>
      <h1>ISS Latitude: {this.state.issLatitude}</h1>
      <h1>ISS Longitude: {this.state.issLongitude}</h1>
      </div>
    </div>
    </>
  );
}}

export default App;
