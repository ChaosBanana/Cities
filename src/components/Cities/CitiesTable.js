import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  }
});

const CitiesTable = (props) => {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} padding='dense'>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Country</TableCell>
            <TableCell numeric>All<br/>Buildings</TableCell>
            <TableCell numeric>100m+</TableCell>
            <TableCell numeric>150m+</TableCell>
            <TableCell numeric>200m+</TableCell>
            <TableCell numeric>300m+</TableCell>
            <TableCell numeric>Telecom<br/>Towers</TableCell>
            <TableCell numeric>All<br/>Structures</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows ? props.rows.map(row => {
            return (
              <TableRow key={row.City}>
                <TableCell>{row['#']}</TableCell>
                <TableCell>{row.City}</TableCell>
                <TableCell>{row.Country}</TableCell>
                <TableCell numeric>{row['All\nBuildings']}</TableCell>
                <TableCell numeric>{row['100m+']}</TableCell>
                <TableCell numeric>{row['150m+']}</TableCell>
                <TableCell numeric>{row['200m+']}</TableCell>
                <TableCell numeric>{row['300m+']}</TableCell>
                <TableCell numeric>{row['Telecom\nTowers']}</TableCell>
                <TableCell numeric>{row['All\nStructures']}</TableCell>
              </TableRow>
            );
          }) : <TableRow><TableCell>Loading...</TableCell></TableRow>}
        </TableBody>
      </Table>
    </Paper>
  );
}

CitiesTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CitiesTable);