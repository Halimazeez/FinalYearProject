import React from "react";

import { CircularProgress } from "material-ui/Progress";
import Grid from "material-ui/Grid";
import Paper from "material-ui/Paper";

const Loading = () => {
  return (
    <Grid container xs={12} justify="center" style={style.root}>
      <CircularProgress size={100} color="primary" />
    </Grid>
  );
};

const style = {
  root: {
    paddingTop: "20%"
  }
};
export default Loading;
