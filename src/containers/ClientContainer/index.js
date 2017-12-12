import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ClientPage from '../../components/clients/ClientPage';
import { requestClients } from './clientContainerActions';


export class ClientContainer extends Component {

  componentDidMount() {
    this.props.requestClients();
  }


  render() {
    return (
      <div>
        <ClientPage match={this.props.match} />
      </div>
    );
  }
}

ClientContainer.propTypes = {
  prop: PropTypes.string,
};

const mapStateToProps = () => ({
  
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    requestClients: requestClients,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientContainer);
