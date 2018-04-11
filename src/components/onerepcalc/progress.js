import React from "react";
import PropTypes from "prop-types";

import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

import { withStyles } from "material-ui/styles";
import Data from "./Data";

const Progress = ({ value, max, marks }) => (
  <div style={styles.root}>
    <Slider defaultValue={0} value={value} min={0} marks={marks} max={max} />
  </div>
);

const styles = {
  root: {
    flexGrow: 1,
    marginTop: 10
  }
};

export default Progress;
