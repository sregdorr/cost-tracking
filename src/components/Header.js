import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  header: {
    padding: 11,
  },
  title: {
    color: '#e5e5e5',
    fontWeight: 'bold',
  }
});

const Header = (props) => {
  const { classes } = props;

  return (
    <AppBar className={classes.header}>
      <Typography className={classes.title} type='title'>
        Project Cost Tracking
      </Typography>
    </AppBar>
  );
};

export default withStyles(styles, { withTheme: true })(Header);
