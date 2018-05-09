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
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    const { userWeight, error } = this.props;

    return (
      <Grid container className={classes.root} justify="center">
        <Grid item xs align="center">
          <Paper className={classes.paper} elevation={1}>
            <Typography variant="subheading" className={classes.subHeader}>
              <strong>Your Weight:</strong>
            </Typography>
            <TextField
              id="userWeight"
              type="number"
              className={classes.inputs}
              onChange={this.props.onChange}
              value={userWeight}
              placeholder="0"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Kg</InputAdornment>
                )
              }}
              error={error === 1}
              helperText={error === 1 ? "Only 0-140kg" : ""}
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
    paddingLeft: 0,
    width: 80,
    color: "inherit"
  },
  subHeader: {},
  paper: {
    width: 170,
    padding: 10,
    height: 70
  }
});

export default withStyles(styles)(ControlPanel);
