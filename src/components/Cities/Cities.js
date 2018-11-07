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
      complete: this.updateData,
    });
  }

  updateData = (result) => {
    const rows = result.data;
    const columnSort = this.props.location.pathname.split('/')[1];
    const columns = Object.keys(rows[0]);

    let sortBy = null;
    for (let i = 0; i < columns.length; i++) {
      if (columns[i].toLowerCase().replace(/\s/g, "") === columnSort.replace(/\s/g, "")) {
        sortBy = columns[i];
        break;
      }
    }

    if (sortBy !== null) {
      rows.sort((a, b) =>
        (isNaN(a[sortBy]) || isNaN(b[sortBy])) ?
          a[sortBy].localeCompare(b[sortBy]) :
          a[sortBy] - b[sortBy]);

    }

    this.setState({ rows: rows });
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
