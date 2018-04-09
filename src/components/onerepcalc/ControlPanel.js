import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Grid from "material-ui/Grid";
import Paper from "material-ui/Paper";
import { withStyles } from "material-ui/styles";
import { Home } from "material-ui-icons/";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import Typography from "material-ui/Typography";
import Divider from "material-ui/Divider";
import Input, { InputLabel, InputAdornment } from "material-ui/Input";

class ControlPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { classes } = this.props;
    const { userWeight } = this.props;

    return (
      <Grid container className={classes.root} justify="center">
        <Grid item xs align="center">
          <Paper className={classes.paper}>
            <Typography variant="subheading" className={classes.subHeader}>
              <strong>Your Weight:</strong>
            </Typography>
            <Input
              id="userWeight"
              type="number"
              className={classes.inputs}
              onChange={this.props.onChange}
              value={userWeight}
              disableUnderline
              placeholder="0"
              startAdornment={
                <InputAdornment position="start">Kg</InputAdornment>
              }
              maxLength={2}
            />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

ControlPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  header: {
    fontSize: 50,
    fontWeight: 250
  },
  lifts: {
    paddingLeft: 25
  },
  inputs: {
    paddingLeft: 20,
    width: 70,
    color: "inherit"
  },
  subHeader: {},
  paper: {
    maxWidth: 200,
    padding: 10
  }
});

export default withStyles(styles)(ControlPanel);
