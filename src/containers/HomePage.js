import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Grid from "material-ui/Grid";
import Paper from "material-ui/Paper";
import { withStyles } from "material-ui/styles";
import { Home } from "material-ui-icons/";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";

import Lift from "../components/onerepcalc/Lift";

class HomePage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container justify="center" align="center">
        <Grid container className={classes.sectionOne}>
          <Grid container className={classes.sectionOneContent}>
            <Grid item xs={12}>
              <Typography className={classes.title}>
                fit<b>Me</b>
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography className={classes.titleText}>
                Define your Strength and generate your dynamic Strength plan
              </Typography>
            </Grid>

            <Grid item xs={12} className={classes.titleButton}>
              <Link to="login" className={classes.link}>
                <Button variant="raised">Get Started</Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>

        <Grid container className={classes.sectionTwo}>
          <Grid
            container
            className={classes.sectionTwoContent}
            justify="center"
          >
            <Grid item xs={12} className={classes.repLift} />
            <Typography variant="title" className={classes.by}>
              Final Year Project
            </Typography>

            <Grid item xs={12} className={classes.repLift} />
            <Typography variant="subheading" className={classes.bytwo}>
              &copy; 2018 Halim Azeez - p15180243
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  //sectionOne
  sectionOne: {
    minHeight: "90vh",
    backgroundColor: "#3c8dbc"
  },
  sectionOneContent: {
    paddingTop: 250,
    paddingBottom: 100,
    color: "#fff",
    display: "block"
  },
  title: {
    fontSize: 120,
    width: "100%",
    color: "inherit",
    lineHeight: "1em",
    fontWeight: 300
  },
  titleText: {
    fontSize: "1.5rem",
    color: "inherit",
    maxWidth: 400,
    marginTop: 10
  },
  titleButton: {
    marginTop: 20
  },
  //sectionTwo
  sectionTwo: {
    maxWidth: 800,
    marginTop: 20
  },
  link: {
    color: "inherit",
    textDecoration: "none"
  },
  bytwo: {
    marginTop: 2
  }
});

export default withStyles(styles)(HomePage);
