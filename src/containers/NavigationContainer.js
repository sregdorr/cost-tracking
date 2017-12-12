import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { Switch } from 'react-router-dom';

import AppDrawer from '../components/AppDrawer';
import ClientPage from '../components/clients/clientPage';
import HomePage from '../components/HomePage';


const Container = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: calc(100% - 48px);
  top: 48px;
`;

const MainContent = styled.div`
  padding: 20px;
  flex: 1 1 auto;
  overflow: auto;
`;


class NavigationContainer extends Component {
  render() {
    return (
      <Container>
        <AppDrawer />
        <MainContent>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/clients' component={ClientPage}></Route>
          </Switch>
        </MainContent>
      </Container>
    );
  }
}

export default NavigationContainer;
