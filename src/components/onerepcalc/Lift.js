import React from "react";
import Grid from "material-ui/Grid";
import { withStyles } from "material-ui/styles";

import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import PropTypes from "prop-types";
import { FormLabel } from "material-ui/Form";
import Divider from "material-ui/Divider";

class Lift extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes, text } = this.props;

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

      liftHeader: {},
      headhead: {
        padding: 5
      }
    };

    return (
      <Paper>
        <FormLabel>{text}</FormLabel>
      </Paper>
    );
  }
}

Lift.propTypes = {
  text: PropTypes.string,
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
