import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import ClientTable from './ClientTable';


const propTypes = {
  match: PropTypes.object.isRequired,
  clients: PropTypes.array.isRequired,
  selectedClient: PropTypes.number,
  selectClient: PropTypes.func.isRequired,
};

const Header = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

class ClientPage extends Component {
  render() {
    const { clients, selectedClient, selectClient } = this.props;

    return (
      <div>
        <Header>Manage Clients</Header>
        <Switch>
          <Route to={`clients/list`} render={props =>
            <ClientTable
              {...props}
              clients={clients}
              selectedClient={selectedClient}
              selectClient={selectClient}
            />
          }/>
        </Switch>
      </div>
    );
  }
}


ClientPage.propTypes = propTypes;


export default ClientPage;


