import React from 'react';
import { Table } from 'element-react';

import 'element-theme-default';
import './table.css';

class Datatable extends React.Component  {
   constructor(props) {
      super(props);
  
      this.state = {
         columns: [
            {
               label: "Number",
               prop: "column1"
            },
            {
               label: "Text",
               prop: "column2"
            },
            {
               label: "Another text",
               prop: "column3"
            }
         ]
      }
   }
   render() {
      return (
         <div className="table">
            <Table
               columns={this.state.columns}
               data={this.props.data}
            />
         </div>
      );
   }
}

export default Datatable;
