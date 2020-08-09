import React, { Component } from "react";
import {BootstrapTable, 
       TableHeaderColumn} from 'react-bootstrap-table';
 
 
class Table extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.data}>
          <TableHeaderColumn isKey dataField='id'>
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='firstName'>
            First Name
          </TableHeaderColumn>          
          <TableHeaderColumn dataField='lastName'>
            Last Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='email'>
            Email
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
 
export default Table;