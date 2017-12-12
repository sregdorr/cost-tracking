import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const propTypes = {
  
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Container = styled.div`
  width: 150px;
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
  }
];

const AppDrawer = () => {
  const navItems = navRoutes.map(item => (
    <DrawerItem><StyledLink to={item.path}>{item.label}</StyledLink></DrawerItem>
  ));

  return (
    <Container>
      {navItems}
    </Container>
  );
};


AppDrawer.propTypes = propTypes;


export default AppDrawer;
