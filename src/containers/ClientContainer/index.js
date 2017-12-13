import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ClientPage from '../../components/clients/ClientPage';
import { requestClients } from '../../entities/actions/clientActions';
import { selectClient } from './clientContainerActions';
import { clientContainerSelect } from './clientContainerSelectors';


export class ClientContainer extends Component {

  componentDidMount() {
    this.props.requestClients();
  }


  render() {
    const { match, clientContainer, selectClient } = this.props;
    return (
      <div>
        <ClientPage
          match={match}
          clients={clientContainer.visibleClients}
          selectedClient={clientContainer.selectedClient}
          selectClient={selectClient}
        />
      </div>
    );
  }
}

ClientContainer.propTypes = {
  clientContainer: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  clientContainer: clientContainerSelect(state)
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    requestClients: requestClients,
    selectClient: selectClient,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientContainer);
