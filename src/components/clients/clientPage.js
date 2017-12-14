import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Typography from 'material-ui/Typography';

import ClientTable from './ClientTable';
import ClientDetail from './ClientDetail';


const propTypes = {
  match: PropTypes.object.isRequired,
  clients: PropTypes.array.isRequired,
  selectedClient: PropTypes.number,
  selectClient: PropTypes.func.isRequired,
};


class ClientPage extends Component {
  render() {
    const { clients, selectedClient, selectClient } = this.props;

    return (
      <div>
        <Typography type='display1'>Manage Clients</Typography>
        <Switch>
          <Route exact path={`/clients`} render={props =>
            <ClientTable
              {...props}
              clients={clients}
              selectedClient={selectedClient}
              selectClient={selectClient}
            />
          }/>
          <Route path={'/clients/detail'} component={ClientDetail}/>
        </Switch>
      </div>
    );
  }
}


ClientPage.propTypes = propTypes;


export default ClientPage;


