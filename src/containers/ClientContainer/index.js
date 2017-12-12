import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'react-redux';

export class ClientContainer extends Component {

  render() {
    return (
      <div>
        
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
