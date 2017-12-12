import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import ProjectsTable from './ProjectsTable';

const propTypes = {
  
};

const Header = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

class componentName extends Component {
  render() {
    const { match } = this.props;

    return (
      <div>
        <Header>Manage Projects</Header>
        <Switch>
          <Route to={`${match.url}/list`} component={ProjectsTable} />
        </Switch>
      </div>
    );
  }
}


componentName.propTypes = propTypes;


export default componentName;
