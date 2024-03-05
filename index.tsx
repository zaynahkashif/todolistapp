import React, { Component } from "react";
import ReactDOM from 'react-dom';

class App extends Component {
    render() {
        return (
            "hello world"
             );
            }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);