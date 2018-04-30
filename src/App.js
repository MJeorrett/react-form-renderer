import React, { Component } from 'react';
import './App.css';

import { ProcessRenderer } from './components';

class App extends Component {

  config = {
    steps: [
      {
        title: "Personal Information",
        fields: [
          {
            title: "First Name"
          },
          {
            title: "Last Name"
          },
          {
            title: "Age"
          }
        ]
      },
      {
        title: "Criminal record",
        fields: [
          {
            title: "Crime"
          },
          {
            title: "Court"
          },
          {
            title: "Date"
          }
        ]
      },
      {
        title: "Consent",
        fields: [
          {
            title: "Accept Data Sharing"
          }
        ]
      }
    ]
  }

  render() {
    return (
      <ProcessRenderer steps={this.config.steps}></ProcessRenderer>
    );
  }
}

export default App;
