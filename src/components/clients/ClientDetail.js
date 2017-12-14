/* eslint-disable indent */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';


const styles = theme => ({
  root: {
    width: '50%'
  },
  formPaper: {
    padding: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 3,
    minWidth: 200,
  },
  textField: {
    width: '100%',
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    width: 100,
  }
});

const required = value => (value ? undefined : 'Required');

class ClientDetail extends Component {
  constructor(props) {
    super(props);
    this.renderTextField = this.renderTextField.bind(this);
  }


  renderTextField(fieldValues) {
    const { input, label, type } = fieldValues;
    const { classes } = this.props;
    return (
      <div>
        <TextField
          {...input}
          label={label}
          type={type}
          className={classes.textField}
        />
      </div>
    );
  }

  render() {
    const {
      handleSubmit, pristine,
      reset, submitting, classes
    } = this.props;

    const submit = values => {
      console.log(values);
    };

    return (
      <div className={classes.root}>
        <Paper className={classes.formPaper}>
          <Typography type='title'>Add Client</Typography>
          <form onSubmit={handleSubmit(submit)}>
            <Field
              name='clientName'
              type='text'
              component={this.renderTextField}
              label='Client Name'
              validate={[required,]}
            />
            <Field
              name='address'
              type='text'
              component={this.renderTextField}
              label='Address'
              className={classes.textField}
            />
            <Field
              name='phone'
              type='text'
              component={this.renderTextField}
              label='Phone'
              className={classes.textField}
            />
            <Field
              name='email'
              type='text'
              component={this.renderTextField}
              label='Email'
              className={classes.textField}
            />
            <div className={classes.buttonContainer}>
              <Button
                className={classes.button}
                dense
                raised
                type="submit"
                disabled={submitting}
              >
                Submit
              </Button>
              <Button
                className={classes.button}
                dense
                raised
                type="button"
                disabled={pristine || submitting}
                onClick={reset}
              >
                Reset
              </Button>
            </div>
          </form>
        </Paper>
      </div>
    );
  }
}

ClientDetail.propTypes = {};

export default reduxForm({
  form: 'clientDetail',
})(
  withStyles(styles, { withTheme: true })(ClientDetail)
);
