import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import  Movies  from "./components/movies.jsx";

class App extends Component {
  render() { 
    return (  
      <div>
        <Movies />
      </div>
    );
  }
}
 
export default App;
