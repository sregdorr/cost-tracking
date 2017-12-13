import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Table, {
  TableHead, TableBody,
  TableRow, TableCell
} from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui-icons/AddBox';
import EditIcon from 'material-ui-icons/Edit';
import DeleteIcon from 'material-ui-icons/Delete';
import * as moment from 'moment';


const propTypes = {
  classes: PropTypes.object.isRequired,
  clients: PropTypes.array.isRequired,
  selectedClient: PropTypes.number,
  selectClient: PropTypes.func.isRequired,
};

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


class ClientTable extends Component {
  render() {
    const { clients, classes,
      selectedClient, selectClient } = this.props;

    const renderData = clients.map(client => {
      const localDateTime = moment(client.createdDate).local().format('YYYY-MM-DD h:mm:ss a');

      return (
        <TableRow
          key={client.id}
          hover
          selected={client.id === selectedClient}
          onClick={() => selectClient(client.id)}
        >
          <TableCell>{client.id}</TableCell>
          <TableCell>{client.clientName}</TableCell>
          <TableCell>{client.address}</TableCell>
          <TableCell>{client.phone}</TableCell>
          <TableCell>{client.email}</TableCell>
          <TableCell>{localDateTime}</TableCell>
        </TableRow>
      );
    });

    return (
      <div>
        <div>
          <IconButton style={{fontSize: 30}}>
            <AddIcon />
          </IconButton>
          <IconButton style={{fontSize: 30}}>
            <EditIcon />
          </IconButton>
          <IconButton style={{fontSize: 30}}>
            <DeleteIcon />
          </IconButton>
        </div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Client Name</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Added</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {renderData}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

ClientTable.propTypes = propTypes;

export default withStyles(styles, { withTheme: true })(ClientTable);
