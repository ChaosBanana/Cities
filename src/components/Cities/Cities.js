import React, { Component } from 'react';
import Papa from 'papaparse';
import citiesCsv from './cities.csv';
import CitiesTable from './CitiesTable';

class Cities extends Component {

  state = {}

  componentWillMount() {
    Papa.parse(citiesCsv, {
      header: true,
      download: true,
      skipEmptyLines: true,
      // Here this is also available. So we can call our custom class method
      complete: this.updateData
    });
  }

  updateData = (result) => {
    const rows = result.data;
    // Here this is available and we can call this.setState (since it's binded in the constructor)
    this.setState({ rows: rows }); // or shorter ES syntax: this.setState({ data });
    //console.log(rows);
  }

  render = () => {
    return (
      <div className="Cities">
        <CitiesTable
          rows={this.state.rows} />
      </div>
    );
  }
}

export default Cities;
