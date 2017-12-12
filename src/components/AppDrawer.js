import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  history: PropTypes.object.isRequired,
};

const Container = styled.div`
  width: 175px;
  background: #d9d9d9;
`;

const DrawerItem = styled.div`
  text-align: right;
  padding: 10px;
  padding-right: 20px;
  cursor: pointer;
  &:hover {
    background: #c7c7c7
  }
`;

const navRoutes = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Clients',
    path: '/clients',
  },
  {
    label: 'Projects',
    path: '/projects',
  },
  {
    label: 'Vendors',
    path: '/vendors',
  },
  {
    label: 'Purchase Orders',
    path: '/purchase-orders',
  },
  {
    label: 'Invoices',
    path: '/invoices',
  },
];

class AppDrawer extends Component {
  onItemClick(path) {
    this.props.history.push(path);
  }

  render() {
    const navItems = navRoutes.map(item => (
      <DrawerItem 
        onClick={this.onItemClick.bind(this, item.path)}
      >
        {item.label}
      </DrawerItem>
    ));
  
    return (
      <Container>
        {navItems}
      </Container>
    );
  }
}


AppDrawer.propTypes = propTypes;


export default AppDrawer;
