import React, { Component } from 'react';
import './App.css';

import Barchart from './ContainerComponents/Barchart'
import Donutchart from './ContainerComponents/Donutchart'
import DonutThreeSeries from './ContainerComponents/DonutThreeSeries'

class App extends Component {
    dataCallParameter = (param, params) => {
        console.log(param)
        console.log(params)
    }
  render() {
        const pass = [
            {
                "name": "Service Jobs",
                "open": 250,
                "scheduled": 33
            },
            {
                "name": "Emergency Jobs",
                "open": 84,
                "scheduled": 96
            }
        ];
    return (
      <div>
        <Barchart responseData={pass} dataCall={this.dataCallParameter} />
        <Donutchart dataCall={this.dataCallParameter} />
        <DonutThreeSeries dataCall={this.dataCallParameter} />
      </div>
    );
  }
}

export default App;
