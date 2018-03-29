import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import Data from "./data";

const marks = {
  0: "Untrained",
  75: "Intermediate",
  150: "Olympic"
};

const Progress = ({ value, max }) => (
  <div style={styles.root}>
    <Slider
      defaultValue={0}
      value={value}
      min={0}
      max={max}
    //  marks={marks}
    />
  </div>
);

const styles = {
  root: {
    flexGrow: 1,
    marginTop: 10
  }
};

export default withStyles(styles)(Progress);
