import React from "react";
import PropTypes from "prop-types";

import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

import { withStyles } from "material-ui/styles";
import Data from "./Data";


const Progress = ({ value, max, marks, min }) => (
  <div style={styles.root}>
    <Slider
      defaultValue={0}
      value={value}
      min={min}
      marks={marks}
      max={max}
      //activeDotStyle={{ size: 20 }}
      //dotStyle={{ borderColor: 'l' }}
    />
  </div>
);

const styles = {
  root: {
    flexGrow: 1,
    marginTop: 10
  },
  hey: {
    color: 'red'
  }
};

export default Progress;
