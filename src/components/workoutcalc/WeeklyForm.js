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
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";

import Loading from "../../components/helpers/loading";

class WeeklyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      maxes: [
        //convert 1RM's to 90% of 1RM (Required for 5/3/1 workout base)
        { value: this.props.bench * 0.9 },
        { value: this.props.dead * 0.9 },
        { value: this.props.squat * 0.9 },
        { value: this.props.ohp * 0.9 }
      ],
      values: [],
      lifts: [
        {
          name: "Bench Press",
          sets: this.getSets(this.props.week)
        },
        {
          name: "Deadlift",
          sets: this.getSets(this.props.week)
        },
        {
          name: "Squat",
          sets: this.getSets(this.props.week)
        },
        {
          name: "Overhead Press",
          sets: this.getSets(this.props.week)
        }
      ]
    };
  }
  componentDidMount() {
    let Bench = [];
    let Squat = [];
    let Ohp = [];
    let Dead = [];
    let curSet = this.getSets(this.props.week);
    let curPer = this.getPer(this.props.week);

    for (let i = 0; i < 3; i++) {
      let calcBench = Math.round(this.state.maxes[0].value * curPer[i]);
      let calcDead = Math.round(this.state.maxes[1].value * curPer[i]);
      let calcSquat = Math.round(this.state.maxes[2].value * curPer[i]);
      let calcOhp = Math.round(this.state.maxes[3].value * curPer[i]);
      let dataBench = calcBench + "x" + curSet[i];
      let dataDead = calcDead + "x" + curSet[i];
      let dataSquat = calcSquat + "x" + curSet[i];
      let dataOhp = calcOhp + "x" + curSet[i];
      Bench.push(dataBench);
      Dead.push(dataDead);
      Squat.push(dataSquat);
      Ohp.push(dataOhp);
    }
    this.setState({
      values: [...this.state.values, [Bench], [Dead], [Squat], [Ohp]],
      loading: false
    });
  }

  getSets = weeknum => {
    switch (weeknum) {
      case 1:
        return [5, 5, "5+"];
      case 2:
        return [3, 3, "3+"];
      case 3:
        return [5, 3, "1+"];
      case 4:
        return [5, 5, 5];
    }
  };

  getPer = per => {
    switch (per) {
      case 1:
        return [0.65, 0.75, 0.85];
      case 2:
        return [0.7, 0.8, 0.9];
      case 3:
        return [0.75, 0.85, 0.95];
      case 4:
        return [0.4, 0.5, 0.6];
    }
  };

  render() {
    const { classes } = this.props;
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <Grid container className={classes.root}>
        {console.log("values:" + this.state.values)}
        <Grid item xs={12}>
          <Typography variant="headline" className={classes.header}>
            Week: {this.props.week}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid container className={classes.lifts}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Compound</TableCell>
                    <TableCell>Set 1</TableCell>
                    <TableCell>Set 2</TableCell>
                    <TableCell>Set 3</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {this.state.lifts.map((lift, liftIndex) => (
                    <TableRow key={liftIndex}>
                      <TableCell>{lift.name}</TableCell>
                      {this.state.values.map((valueData, valueIndex) => (
                        <TableCell key={valueIndex}>
                          {valueData[liftIndex]}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
WeeklyForm.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  root: {
    marginTop: 50
  },
  header: {
    fontWeight: "250"
  },
  Table: {
    minWidth: 800
  },
  typo: {
    display: "inline"
  }
});

export default withStyles(styles)(WeeklyForm);
