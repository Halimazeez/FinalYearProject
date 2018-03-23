import React from "react";
import Grid from "material-ui/Grid";
import { withStyles } from "material-ui/styles";

import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import PropTypes from "prop-types";
import { FormLabel } from "material-ui/Form";
import Divider from "material-ui/Divider";

class Lift extends React.Component {
  render() {
    const { title, Icon, classes } = this.props;

    const styles = {
      content: {
        padding: "5px 10px",
        marginLeft: 90,
        height: 80
      },
      icon: {
        width: 20,
        maxWidth: "100%",
        color: "grey",
        padding: 5
      },
      paper: {
        //width: "100%"
      },

      liftHeader: {
        display: "flex",
      },
      headhead: {
        display: "block",
        padding: 5
      }
    };

    return (
      <Paper>
        <Grid xs={12} style={styles.liftHeader}>
          <Icon style={styles.icon} />

          <FormLabel style={styles.headhead}>{title}</FormLabel>
        </Grid>
        <Divider />
        <Grid xs={2}>
          <FormLabel>Aaaa</FormLabel>
        </Grid>
      </Paper>
    );
  }
}

Lift.propTypes = {
  Icon: PropTypes.any,
  Title: PropTypes.string,
  classes: PropTypes.object.isRequired
};

//  <span style={styles.iconSpan}>
//  <Icon style={styles.icon} />
//  </span>

/*  <div style={styles.content}>
    <span style={styles.text}>{Icon}</span>
    <span style={styles.number}>{title}</span>
  </div>
  */

export default Lift;
