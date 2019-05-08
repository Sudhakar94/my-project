import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

import {data} from "./data.json"

class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
  render() {
    console.log(data)
    const  data = data;
    const columns = [
      {
        Header: "Name",
        accessor: "name"
      },
      {
        Header: "Position",
        id: "position",
      },
      {
        Header: "Salary",
        accessor: "salary",
      },
      {
        Header: "Start Date",
        accessor: "start_date",
      },
      {
        Header: "office",
        accessor: "office",
      },
      {
        Header: "extn",
        accessor: "extn",
      }
    ];
    return (
      <div>
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={10}

          className="-striped -highlight"
        />
      </div>
    );
  }
}


export default Table;