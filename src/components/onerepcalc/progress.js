import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import Data from "./data";

class Progress extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    const marks = {
      0: "Untrained",
      75: "Intermediate",
      150: "Olympic"
    };
    const { classes, onerepmax, max } = this.props;

    return (
      <div className={classes.root}>
        <Slider
          defaultValue={0}
          value={onerepmax}
          min={0}
          max={max}
          marks={marks}
        />
      </div>
    );
  }
}

Progress.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = {
  root: {
    flexGrow: 1,
    marginTop: 10
  }
};

export default withStyles(styles)(Progress);
