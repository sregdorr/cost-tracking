import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ClientPage from '../../components/clients/ClientPage';
import {
  requestClients,
  requestAddClient,
  requestEditClient
} from '../../entities/actions/clientActions';
import { selectClient } from './clientContainerActions';
import { clientContainerSelect } from './clientContainerSelectors';


export class ClientContainer extends Component {

  render() {
    const { match, clientContainer, initialValues,
      selectClient, addClient, editClient, requestClients } = this.props;

    return (
      <div>
        <ClientPage
          match={match}
          requestClients={requestClients}
          clients={clientContainer.visibleClients}
          selectedClient={clientContainer.selectedClient}
          selectClient={selectClient}
          addClient={addClient}
          editClient={editClient}
          initialValues={initialValues}
        />
      </div>
    );
  }
}

ClientContainer.propTypes = {
  clientContainer: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  clientContainer: clientContainerSelect(state),
  initialValues: state.clientContainer.selectedClient,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    requestClients: requestClients,
    selectClient: selectClient,
    addClient: requestAddClient,
    editClient: requestEditClient,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientContainer);
