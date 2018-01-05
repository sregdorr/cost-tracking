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
  requestClients: PropTypes.func.isRequired,
  clients: PropTypes.array.isRequired,
  selectedClient: PropTypes.object,
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
  },
  tableRow: {
    '&:hover': {
      cursor: "pointer"
    }
  }
});

class ClientTable extends Component{
  constructor(props) {
    super(props);

    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
  }


  componentDidMount() {
    this.props.requestClients();
  }


  handleAddClick() {
    this.props.selectClient(null);
    this.props.history.push('clients/detail');
  }

  handleEditClick() {
    this.props.history.push('clients/detail');
  }

  render() {
    const { clients, classes,
      selectedClient, selectClient } = this.props;

    const renderData = clients.map(client => {
      const localDateTime = moment(client.createdDate).local().format('YYYY-MM-DD h:mm:ss a');

      return (
        <TableRow
          className={classes.tableRow}
          key={client.id}
          hover
          selected={selectedClient ? client.id === selectedClient.id : false}
          onClick={() => selectClient(client)}
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
          <IconButton style={{fontSize: 30}} onClick={this.handleAddClick}>
            <AddIcon />
          </IconButton>
          <IconButton style={{fontSize: 30}} onClick={this.handleEditClick}>
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
