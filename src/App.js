
import React, { Component } from 'react';
import './App.css';
import Table from './components/Table'
import Header from "./components/Header"
 
const data = [
  {id: 1, firstName: 'Hannah', lastName: "Perreault", email: 'hannah@email.com'},
  {id: 2, firstName: 'Ethan', lastName: "McKenna", email: 'ethan@email.com'},
  {id: 3, firstName: 'Elin', lastName: "George", email: 'elin@email.com'},
];
 
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Table data={data}/>
      </div>
    );
  }
}
 
export default App;