import React, { Component } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router';

import NavigationContainer from '../containers/NavigationContainer';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  position: fixed;
  width: 100%;
  padding: 10px;
  font-size: 24px;
  font-weight: bold;
  color: #e5e5e5;
  background: #ea9124;
  z-index: 1000;
`;


class App extends Component {
  render() {
    return (
      <Container>
        <Header>Project Cost Tracking</Header>
        <Route component={NavigationContainer} />
      </Container>
    );
  }
}

export default App;
