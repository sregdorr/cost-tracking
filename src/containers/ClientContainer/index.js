import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ClientPage from '../../components/clients/ClientPage';
import db from '../../db/index';

export class ClientContainer extends Component {

  render() {
    return (
      <div>
        <ClientPage />
      </div>
    );
  }
}

ClientContainer.propTypes = {
  prop: PropTypes.string,
};

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({

  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientContainer);
